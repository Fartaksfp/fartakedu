/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { db } from "@/utils/db";

type SaveCertificateParams = {
  course_id: string;
  user_id: string;
};

export async function saveCertificate({
  course_id,
  user_id,
}: SaveCertificateParams): Promise<string> {
  try {
    const existing = await db.query(
      `
      SELECT certificate_id
      FROM certificates
      WHERE course_id = $1 AND user_id = $2
      LIMIT 1
      `,
      [course_id, user_id]
    );

    if (existing.rows.length > 0) {
      return existing.rows[0].certificate_id;
    }

    const inserted = await db.query(
      `
      INSERT INTO certificates (course_id, user_id)
      VALUES ($1, $2)
      RETURNING certificate_id
      `,
      [course_id, user_id]
    );

    return inserted.rows[0].certificate_id;
  } catch (error: any) {
    throw error;
  }
}