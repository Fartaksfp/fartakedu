import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const cookieStore = await cookies();
  const text = await request.text();
  const body = Object.fromEntries(new URLSearchParams(text));

  cookieStore.set({ name: "payment", value: JSON.stringify(body), path: "/" });

  redirect("/dashboard/receipt");
}
