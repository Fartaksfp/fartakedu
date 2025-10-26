import supabase from "@/lib/supabaseClient";
import { NextResponse } from "next/server";

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

    if (!melipayamakRes.ok || result.status) {
      return NextResponse.json(
        { error: result.status || "Provider Error!" },
        { status: 500 }
      );
    }

    const otp_code = result.code;

    if (!otp_code) {
      return NextResponse.json({ error: "Provider Error" }, { status: 500 });
    }

    const expires_at = new Date(Date.now() + 5 * 60 * 1000).toISOString();

    const { data, error } = await supabase.rpc("create_otp", {
      phone_e164,
      otp_code,
      expires_in: expires_at,
    });

    if (error) {
      console.error("Supabase Error:", error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ data });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Server Error:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
