import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    const body = await request.json();

    console.log(body);
    redirect("/dashboard/receipt?status=success");
}