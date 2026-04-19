"use server";

import { db } from "@/utils/db";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";

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
    href: string;
    status: string;
    spot_license: string;
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

  try {
    const result = await db.query(
      `
      SELECT 
        e.id,
        e.progress,
        e.enrolled_at,
        json_build_object(
          'id', c.id,
          'title', c.title,
          'thumbnail_url', c.thumbnail_url,
          'teacher', c.teacher,
          'duration', c.duration,
          'href', c.href,
          'status', c.status,
          'spot_license', c.spot_license
        ) AS courses
      FROM enrollments e
      JOIN courses c ON c.id = e.course_id
      WHERE e.user_id = $1
      `,
      [userId]
    );

    return result.rows;
  } catch {
    return [];
  }
}