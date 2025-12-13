import { supabase } from "@/utils/supabase/client";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const cookieStore = await cookies();
  const text = await request.text();
  const body = Object.fromEntries(new URLSearchParams(text));

  cookieStore.set({ name: "payment", value: JSON.stringify(body), path: "/" });

  const paymentData = body;
  const state = String(paymentData.State);

  if (state === "OK") {
    
    const resnum = paymentData.ResNum;

    const { data: updatedCart, error: updateError } = await (await supabase)
      .from("cart")
      .update({ status: "completed" })
      .eq("uuid", resnum)
      .select();
    
    if (updateError) {
      console.error(updateError);
      return;
    }

    for (const item of updatedCart) {
      const userId = item.user_id;
      const courses = Array.isArray(item.courses_id)
        ? item.courses_id
        : [item.courses_id];

      for (const courseId of courses) {
        const { error: enrollError } = await (await supabase)
          .from("enrollments")
          .insert({
            user_id: userId,
            course_id: courseId,
          });

        if (enrollError) {
          console.error("Enroll error:", enrollError);
        }
      }
    }
  }

  redirect("/dashboard/receipt");
}
