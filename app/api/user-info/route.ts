/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { db } from "@/utils/db";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const user_id = searchParams.get("user_id");

    if (!user_id) {
      return NextResponse.json(
        { success: false, message: "user_id is required" },
        { status: 400 }
      );
    }

    const result = await db.query(
      `
      SELECT get_user_info($1) AS data
      `,
      [user_id]
    );

    const data = result.rows[0]?.data;

    if (!data) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { success: true, user: data },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    let finalNationalCode = body.national_code;

    if (finalNationalCode.length < 10) {
      finalNationalCode = finalNationalCode.padStart(10, "0");
    }

    const result = await db.query(
      `
      SELECT insert_user_info(
        $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13
      ) AS data
      `,
      [
        body.user_id,
        body.first_name,
        body.last_name,
        body.first_name_en,
        body.last_name_en,
        body.age,
        0,
        0,
        body.phone,
        body.company_name,
        body.company_name_en,
        finalNationalCode,
        body.signup_model,
      ]
    );

    return NextResponse.json(
      { res: result.rows[0]?.data },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}