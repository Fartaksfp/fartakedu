import { NextRequest, NextResponse } from "next/server";
import { getUser } from "@/app/actions/getUser";

export async function POST(req: NextRequest) {
  try {
    const user = await getUser();

    if (!user) {
      return NextResponse.json({ ok: false });
    }

    const message = `
ثبت نام جدید ✅
نام: ${user.first_name ?? "-"}
نام خانوادگی: ${user.last_name ?? "-"}
شماره: ${user.phone}
    `;

    await fetch("http://api.payamak-panel.com/post/Send.asmx/SendSms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: process.env.SMS_USERNAME,
        password: process.env.SMS_PASSWORD,
        from: "50002710054072",
        to: "09964233305",
        text: message,
      }),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false });
  }
}
