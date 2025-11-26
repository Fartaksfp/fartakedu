import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookieStore = await cookies();
  const v = cookieStore.delete("payment");
  return NextResponse.json({success: true});
}
