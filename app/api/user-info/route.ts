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

    const { data, error } = await supabase.rpc("get_user_info", {
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
    console.error("❌ API Error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {

    try {
        const {
            user_id,
            first_name,
            last_name,
            age,
            phone,
            company_name,
        } = await req.json()

        const { data, error } = await supabase.rpc("insert_user_info", {
            p_user_id: user_id,
            p_first_name: first_name,
            p_last_name: last_name,
            p_age: age,
            p_courses_count: 0,
            p_certificates_count: 0,
            p_phone: phone,
            p_company_name: company_name,
        });

        if (error) {
            if (error.code === '23505') {
                console.log(error);
                return NextResponse.json({ success: false, message: "کاربر تکراری" },
                    { status: 500 })
            }
            return NextResponse.json({ success: false, message: error },
                { status: 500 })
        }

        const res = data

        return NextResponse.json({ res }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ success: false, message: error },
            { status: 500 })
    }

}