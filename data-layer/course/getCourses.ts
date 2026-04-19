/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { db } from "@/utils/db";

export async function getCourses(limit?: number) {
  try {
    const result = await db.query(
      `
      SELECT get_all_courses($1) AS data
      `,
      [limit ?? null],
    );

    return {
      coursesdata: result.rows[0]?.data ?? [],
      status: 200,
    };
  } catch (error: any) {
    return {
      error: error.message,
      status: 500,
    };
  }
}
