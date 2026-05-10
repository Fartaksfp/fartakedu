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

    const body = {
      from: "50002710054072",
      to: "09964233305",
      text: message,
    };

    const url =
      "https://console.melipayamak.com/api/send/simple/cb07ad5993544e21a3dced484ec43ca5";

    const res = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(body),
    });

    const Response = await res.json();

    console.log("SMS API RESPONSE:\n", Response);

    return NextResponse.json({
      ok: true
    });
  } catch (err) {
    console.error("SMS ERROR:", err);

    return NextResponse.json({
      ok: false,
      error: "SMS send failed",
    });
  }
}
