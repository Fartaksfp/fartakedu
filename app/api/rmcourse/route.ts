import { NextRequest, NextResponse } from "next/server";
import { db } from "@/utils/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const result = await db.query(
      `
      SELECT remove_from_cart($1, $2) AS data
      `,
      [body.cartId, body.courseId]
    );

    return NextResponse.json(result.rows[0]?.data);
  } catch {
    return NextResponse.json(
      { message: "failed" },
      { status: 500 }
    );
  }
}