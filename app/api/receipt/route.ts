import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  console.log("request : ", request);
  const text = await request.text();
  const body = Object.fromEntries(new URLSearchParams(text));
  console.log("body : ", body);

  redirect("/dashboard/receipt?status=success");
}
