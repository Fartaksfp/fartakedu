"use server";
import { supabase } from "@/utils/supabase/client";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function getUser() {
  const cookieStore = await cookies();
  const tokenCookie = cookieStore.get("authtoken");
  const token = tokenCookie?.value
    ? decodeURIComponent(tokenCookie.value)
    : undefined;

  if (!token) {
    return null;
  }

  const encoder = new TextEncoder();
  const data = await jwtVerify(token, encoder.encode(JWT_SECRET));

  const userId = data.payload.user_id;
  try {
    const { data: user } = await supabase
      .from("users_info")
      .select("*")
      .eq("user_id", userId)
      .maybeSingle();

    if (user) {
      return user;
    } else {
      return {
        info: null,
        phone: data.payload.phone,
        user_id: data.payload.user_id,
      };
    }
  } catch {
    return {
      info: null,
      phone: data.payload.phone,
      user_id: data.payload.user_id,
    };
  }
}
