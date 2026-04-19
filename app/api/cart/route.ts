/* eslint-disable @typescript-eslint/no-explicit-any */
import { db } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const user_id = searchParams.get("user_id");

    if (!user_id) {
      return NextResponse.json(
        { success: false, message: "user_id is required" },
        { status: 400 },
      );
    }

    const result = await db.query(
      `
      SELECT get_pending_cart($1) AS data
      `,
      [user_id],
    );

    const data = result.rows[0]?.data;

    if (!data) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 200 },
      );
    }

    return NextResponse.json({ success: true, res: data }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || "Internal Server Error" },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    await db.query(
      `
      SELECT add_to_cart($1, $2)
      `,
      [body.userId, body.course],
    );

    return NextResponse.json({ message: "success" }, { status: 200 });
  } catch {
    return NextResponse.json({ message: "failed" }, { status: 500 });
  }
}
