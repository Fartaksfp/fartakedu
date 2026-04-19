/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { db } from "@/utils/db";

export async function POST(req: Request) {
  try {
    const { phone_e164 } = await req.json();

    if (!phone_e164) {
      return NextResponse.json(
        { error: "Phone Number Not Send!" },
        { status: 400 }
      );
    }

    const melipayamakRes = await fetch(
      "https://console.melipayamak.com/api/send/otp/cb07ad5993544e21a3dced484ec43ca5",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ to: phone_e164 }),
      }
    );

    const result = await melipayamakRes.json();

    if (!melipayamakRes.ok) {
      return NextResponse.json(
        { error: "Provider Error!" },
        { status: 500 }
      );
    }

    const otp_code = result.code;

    if (!otp_code) {
      return NextResponse.json(
        { error: "Provider Error" },
        { status: 500 }
      );
    }

    const expires_in = "2 minutes";

    await db.query(
      `
      SELECT create_otp($1, $2, $3)
      `,
      [phone_e164, otp_code, expires_in]
    );

    return NextResponse.json({ success: "true" });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}