import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {

    const body = await request.json()

    const res = await fetch('https://sep.shaparak.ir/onlinepg/onlinepg', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            "action": "token",
            "TerminalId": process.env.SEP_TERMINAL_ID ,
            "Amount": body.amount,
            "ResNum": "1qaz@WSX",
            "RedirectUrl": "https://academy.fartaksfp.com/receipt",
            "CellNumber": body.phoneNumber
        })
    })

    const data = await res.json()

    if (data.token) {
        return NextResponse.redirect(new URL(`https://sep.shaparak.ir/OnlinePG/SendToken?token=${data.token}`))
    } else {
        return NextResponse.json({ data },{status: 500})
    }
     
}