import { supabase } from "@/utils/supabase/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const { data, error } = await supabase.rpc("remove_from_cart", {
    p_cart_id: body.cartId,
    p_course_id: body.courseId,
  });

  if (error) {
    return NextResponse.json({ message: "failed" }, { status: 500 });
  } else {
    return NextResponse.json(data);
  }
}
