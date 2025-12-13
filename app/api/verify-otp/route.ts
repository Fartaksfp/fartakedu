import { supabase } from "@/utils/supabase/client";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { SignJWT } from "jose";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function POST(req: NextRequest) {
  const cookieStore = await cookies();
  const body = await req.json();

  const { data, error } = await supabase.rpc("verify_otp", {
    p_phone: body.phone,
    p_otp: body.otp,
  });

  if (data.success === false) {
    return NextResponse.json(
      { success: false, message: data.message },
      { status: 500 },
    );
  }

  if (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 },
    );
  }

  const { data: users_data, error: users_error } = await supabase
    .from("users")
    .upsert({ phone: body.phone }, { onConflict: "phone" })
    .select("*")
    .single();

  if (!users_error) {
    const encoder = new TextEncoder();
    const token = await new SignJWT({
      user_id: users_data.id,
      phone: body.phone,
    })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("7d")
      .sign(encoder.encode(JWT_SECRET));

    cookieStore.set({
      name: "authtoken",
      value: token,
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
      sameSite: "lax",
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } else {
    return NextResponse.json({ users_error }, { status: 500 });
  }
}
