import supabase from "@/lib/supabaseClient";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const user_id = searchParams.get("user_id");

    if (!user_id) {
      return NextResponse.json(
        { success: false, message: "user_id is required" },
        { status: 400 }
      );
    }

    const { data, error } = await supabase.rpc("get_pending_cart", {
      p_user_id: user_id,
    });

    if (error) {
        console.log(error);
        
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 500 }
      );
    }

    if (!data) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 200 }
      );
    }

    return NextResponse.json({ success: true, res: data }, { status: 200 });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}