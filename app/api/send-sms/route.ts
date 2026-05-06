import { NextRequest, NextResponse } from "next/server";
import { getUser } from "@/data-layer/user/getUser";

export async function POST(req: NextRequest) {
  try {
    const user = await getUser();

    if (!user) {
      return NextResponse.json({ ok: false, error: "User not found" });
    }

    const message = `
ثبت نام جدید ✅
نام: ${user.first_name ?? "-"}
نام خانوادگی: ${user.last_name ?? "-"}
شماره: ${user.phone}
    `;

    const params = new URLSearchParams({
      username: process.env.SMS_USERNAME || "",
      password: process.env.SMS_PASSWORD || "",
      to: "09964233305",
      from: "50002710054072",
      text: message,
      isflash: "false",
    });

    const url = `http://api.payamak-panel.com/post/Send.asmx/SendSimpleSMS2?${params.toString()}`;

    const res = await fetch(url, {
      method: "POST", 
    });

    const rawResponse = await res.text();

    console.log("SMS API RAW RESPONSE:\n", rawResponse);

    const match = rawResponse.match(
      /<string[^>]*>(.*?)<\/string>/
    );

    const smsResult = match ? match[1] : null;

    console.log("Parsed SMS Result:", smsResult);

    return NextResponse.json({
      ok: true,
      smsResult,
    });
  } catch (err) {
    console.error("SMS ERROR:", err);

    return NextResponse.json({
      ok: false,
      error: "SMS send failed",
    });
  }
}
