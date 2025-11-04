export async function POST(request: Request) {

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
    console.log(data);
     
}