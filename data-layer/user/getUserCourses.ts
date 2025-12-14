"use server";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";
import { supabase } from "@/utils/supabase/client";

const JWT_SECRET = process.env.JWT_SECRET!;

export type UserCourse = {
  id: string;
  progress: string;
  enrolled_at: string;
  courses: {
    id: string;
    title: string;
    thumbnail_url: string;
    teacher: string;
    duration: number;
    href:string;
    status: string;
  };
};

export async function getUserCourses(): Promise<UserCourse[]> {
  const cookieStore = await cookies();
  const tokenCookie = cookieStore.get("authtoken");
  const token = tokenCookie?.value
    ? decodeURIComponent(tokenCookie.value)
    : undefined;

  if (!token) {
    return [];
  }

  const encoder = new TextEncoder();
  const data = await jwtVerify(token, encoder.encode(JWT_SECRET));
  const userId = data.payload.user_id;

  const { data: userCourses } = await supabase
    .from("enrollments")
    .select("*,courses(*)")
    .eq("user_id", userId);

  return userCourses ?? [];
}
