import { cookies } from "next/headers";
import React from "react";

async function page() {
  const cookieStore = await cookies();
  const payment = cookieStore.get("payment");
  const paymentData = payment ? JSON.parse(payment.value) : null;

  return (
    <div>
      {!payment ? (
        <div className="h-[500px] flex justify-center items-center">
          اطلاعات پرداخت یافت نشد.
        </div>
      ) : (
        <div>
          <h1 className="text-2xl font-bold mb-4">رسید پرداخت</h1>
          <div className="border p-4 rounded-lg shadow-md">
            <p>
              <strong>شناسه پرداخت:</strong> {paymentData.ResNum}
            </p>
            <p>
              <strong>مبلغ پرداخت شده:</strong> {paymentData.Amount} تومان
            </p>
            <p>
              <strong>تاریخ پرداخت:</strong>{" "}
              {new Date().toLocaleDateString("fa-IR")}
            </p>
            <p>
              <strong>وضعیت پرداخت:</strong> {paymentData.State}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default page;
