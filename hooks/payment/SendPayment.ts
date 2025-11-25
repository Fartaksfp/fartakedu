
export async function SendPayment(cartId :string,phoneNumber :string, amount: number) {

    const res = fetch('/api/payment', {
        method:'POST',
        headers:{
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({resNumber:cartId, phoneNumber:phoneNumber, amount:amount })
    })

}