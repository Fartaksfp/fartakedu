"use server";


import { db } from "@/utils/db";
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
    const result = await db.query(
      "SELECT * FROM users_info WHERE user_id = $1 LIMIT 1",
      [userId]
    );

    const user = result.rows[0];

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