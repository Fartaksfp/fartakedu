"use server";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function getUserPhone() {
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

  const phone = data.payload.phone;
  return phone;
}
