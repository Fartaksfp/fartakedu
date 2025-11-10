import {  NextResponse } from "next/server";

export async function GET() {

    const res = await fetch('https://api.ipify.org?format=json')

    const data = await res.json()

    console.log(data);

    if (data) {
        return NextResponse.json({ data },{status: 200})
    } else {
        return NextResponse.json({ data },{status: 500})
    }
     
}