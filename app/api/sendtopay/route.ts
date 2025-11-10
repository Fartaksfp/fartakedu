import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const token = request.nextUrl.searchParams.get('token')
    console.log('this is token', token);
    
    return NextResponse.redirect(`https://sep.shaparak.ir/OnlinePG/SendToken?token=${token}`)

}