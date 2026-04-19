/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { db } from "@/utils/db";

export async function getCourse(href: string) {
  try {
    const result = await db.query(
      `
      SELECT get_course($1) AS data
      `,
      [href],
    );

    const coursedata = result.rows[0]?.data;

    if (!coursedata || Object.keys(coursedata).length === 0) {
      return { error: "course not found", status: 404 };
    }

    return { coursesdata: coursedata, status: 200 };
  } catch (error: any) {
    return { error: error.message, status: 500 };
  }
}
