import { cookies } from "next/headers";
import React from "react";

const STATUS_SUCCESS = ["OK"];
const STATUS_FAILED = [
  "CanceledByUser",
  "Failed",
  "SessionIsNull",
  "InvalidParameters",
  "MerchantIpAddressIsInvalid",
  "TokenNotFound",
  "TokenRequired",
  "TerminalNotFound",
  "MultisettlePolicyErrors",
];

async function page() {
  const cookieStore = await cookies();
  const payment = cookieStore.get("payment");
  const paymentData = payment ? JSON.parse(payment.value) : null;

  if (!paymentData) {
    return (
      <div className="h-[500px] flex justify-center items-center text-gray-600">
        اطلاعات پرداخت یافت نشد.
      </div>
    );
  }

  const isSuccess = STATUS_SUCCESS.includes(paymentData.State);
  const isFailed = STATUS_FAILED.includes(paymentData.State);

  const statusColor = isSuccess
    ? "bg-green-100 border-green-500 text-green-700"
    : isFailed
    ? "bg-red-100 border-red-500 text-red-700"
    : "bg-gray-100 border-gray-300 text-gray-700";

  const statusIcon = isSuccess ? "✔️" : isFailed ? "❌" : "ℹ️";

  return (
    <div className="flex justify-center mt-10">
      <div className={`border-l-4 ${statusColor} p-6 rounded-lg shadow-md w-full max-w-md`}>
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-2">{statusIcon}</span>
          <h1 className="text-xl font-bold">
            {isSuccess ? "پرداخت موفق" : isFailed ? "پرداخت ناموفق" : "وضعیت پرداخت"}
          </h1>
        </div>
        <p>
          <strong>شناسه پرداخت:</strong> {paymentData.ResNum.slice(0, 8)}
        </p>
        <p>
          <strong>مبلغ پرداخت شده:</strong> {paymentData.Amount} تومان
        </p>
        <p>
          <strong>تاریخ پرداخت:</strong> {new Date().toLocaleString("fa-IR")}
        </p>
        <p>
          <strong>وضعیت پرداخت:</strong> {paymentData.State}
        </p>
      </div>
    </div>
  );
}

export default page;
