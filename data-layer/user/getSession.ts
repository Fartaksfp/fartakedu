"use server"
import { jwtVerify } from "jose";
import { cookies } from "next/headers";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function getSession() {
  const cookieStore = await cookies();
  const tokenCookie = cookieStore.get("authtoken");
  const token = tokenCookie?.value
    ? decodeURIComponent(tokenCookie.value)
    : undefined;

  if (!token) {
    return null;
  }

  try {
    const encoder = new TextEncoder();
    await jwtVerify(token, encoder.encode(JWT_SECRET));
    return "valid";
  } catch {
    cookieStore.delete({ name: "authtoken", path: "/" });
    return null;
  }
}
