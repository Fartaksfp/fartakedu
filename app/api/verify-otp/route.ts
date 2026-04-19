/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { SignJWT } from "jose";
import { db } from "@/utils/db";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function POST(req: NextRequest) {
  const cookieStore = await cookies();
  const body = await req.json();

  try {
    // 1. verify otp (Postgres function)
    const verifyRes = await db.query(
      `
      SELECT verify_otp($1, $2) AS data
      `,
      [body.phone, body.otp]
    );

    const verifyData = verifyRes.rows[0]?.data;

    if (verifyData?.success === false) {
      return NextResponse.json(
        { success: false, message: verifyData.message },
        { status: 500 }
      );
    }

    // 2. upsert user
    const userRes = await db.query(
      `
      INSERT INTO users (phone)
      VALUES ($1)
      ON CONFLICT (phone)
      DO UPDATE SET phone = EXCLUDED.phone
      RETURNING *
      `,
      [body.phone]
    );

    const user = userRes.rows[0];

    if (!user) {
      return NextResponse.json(
        { users_error: "User creation failed" },
        { status: 500 }
      );
    }

    // 3. create JWT
    const encoder = new TextEncoder();

    const token = await new SignJWT({
      user_id: user.id,
      phone: body.phone,
    })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("7d")
      .sign(encoder.encode(JWT_SECRET));

    // 4. set cookie
    cookieStore.set({
      name: "authtoken",
      value: token,
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
      sameSite: "lax",
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}