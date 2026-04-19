import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";
import { db } from "@/utils/db";

export async function POST(request: NextRequest) {
  const cookieStore = await cookies();

  const text = await request.text();
  const body = Object.fromEntries(new URLSearchParams(text));

  cookieStore.set({
    name: "payment",
    value: JSON.stringify(body),
    path: "/",
  });

  const state = String(body.State);

  if (state === "OK") {
    const resnum = body.ResNum;
    const refnum = body.RefNum;

    const verifyTransaction = await fetch(
      "https://sep.shaparak.ir/verifyTxnRandomSessionkey/ipg/VerifyTransaction",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          RefNum: refnum,
          TerminalNumber: process.env.SEP_TERMINAL_ID,
        }),
      }
    );

    const verifyData = await verifyTransaction.json();
    console.log(verifyData);

    // 1. update cart
    const updatedCartRes = await db.query(
      `
      UPDATE cart
      SET status = 'completed',
          pay = $1
      WHERE uuid = $2
      RETURNING *
      `,
      [body.Amount, resnum]
    );

    const updatedCart = updatedCartRes.rows;

    if (!updatedCart.length) {
      return;
    }

    // 2. insert enrollments
    for (const item of updatedCart) {
      const userId = item.user_id;

      const courses = Array.isArray(item.courses_id)
        ? item.courses_id
        : [item.courses_id];

      for (const courseId of courses) {
        await db.query(
          `
          INSERT INTO enrollments (user_id, course_id)
          VALUES ($1, $2)
          `,
          [userId, courseId]
        );
      }
    }
  }

  redirect("/dashboard/receipt");
}