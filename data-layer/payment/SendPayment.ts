export async function SendPayment(
  cartId: string,
  phoneNumber: string,
  amount: number,
) {
  const res = await fetch("/api/payment", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      resNumber: cartId,
      phoneNumber: phoneNumber,
      amount: amount,
    }),
  });

  const data = await res.json();

  if (data.redirectUrl) {
    window.location.href = data.redirectUrl;
  }
}
