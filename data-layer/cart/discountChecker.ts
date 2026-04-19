"use server";

import { db } from "@/utils/db";

export async function discountChecker(code: string) {
  try {
    const result = await db.query(
      `
      SELECT *
      FROM discount
      WHERE name = $1
      LIMIT 1
      `,
      [code],
    );

    if (result.rows.length === 0) {
      return {
        valid: false,
        message: "not valid",
      };
    }

    return {
      valid: true,
      discount: result.rows[0],
    };
  } catch {
    return {
      valid: false,
      message: "not valid",
    };
  }
}
