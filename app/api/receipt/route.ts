import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    console.log('request : ' , request);
    const body = await request.json();
    console.log('body : ' , body);
    
    redirect("/dashboard/receipt?status=success");
}