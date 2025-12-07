"use client";

import React, { useEffect, useState } from "react";

const STATUS_SUCCESS: readonly string[] = ["OK"];
const STATUS_FAILED: readonly string[] = [
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

const STATE_FA: Record<string, string> = {
  OK: "موفق",
  CanceledByUser: "لغو شده توسط کاربر",
  Failed: "ناموفق",
  SessionIsNull: "جلسه نامعتبر",
  InvalidParameters: "پارامترهای نامعتبر",
  MerchantIpAddressIsInvalid: "آی‌پی فروشنده نامعتبر",
  TokenNotFound: "توکن یافت نشد",
  TokenRequired: "توکن لازم است",
  TerminalNotFound: "ترمینال یافت نشد",
  MultisettlePolicyErrors: "خطای سیاست چندتایی",
};

interface PaymentData {
  ResNum: string;
  Amount: number;
  State: string;
}

export default function PaymentCard() {
  const [paymentData, setPaymentData] = useState<PaymentData | null>(null);

  useEffect(() => {
    document.title = "نتیجه پرداخت | پنل کاربری";
    const cookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("payment="));
    if (cookie) {
      const value = decodeURIComponent(cookie.split("=")[1]);
      setPaymentData(JSON.parse(value));
    }
    fetch("/api/rvp");
  }, []);

  if (!paymentData) {
    return (
      <div className="h-[500px] flex flex-col justify-center items-center text-gray-600">
        اطلاعات پرداخت یافت نشد.
      </div>
    );
  }

  const stateStr = String(paymentData.State);
  const isSuccess = STATUS_SUCCESS.includes(stateStr);
  const isFailed = STATUS_FAILED.includes(stateStr);
  const statusColor = isSuccess
    ? "bg-green-100 border-green-500 text-green-700"
    : isFailed
      ? "bg-red-100 border-red-500 text-red-700"
      : "bg-gray-100 border-gray-300 text-gray-700";
  const statusIcon = isSuccess ? "✔️" : isFailed ? "❌" : "ℹ️";
  const stateText = STATE_FA[stateStr] || paymentData.State;

  return (
    <div className="flex justify-center items-center mt-10 px-4 min-h-[80vh]">
      <div
        className={`border-l-4 ${statusColor} p-8 rounded-xl shadow-lg w-full max-w-lg text-center`}
      >
        <div className="flex flex-col items-center mb-6">
          <span className="text-4xl mb-2">{statusIcon}</span>
          <h1 className="text-2xl font-bold">
            {isSuccess
              ? "پرداخت موفق"
              : isFailed
                ? "پرداخت ناموفق"
                : "وضعیت پرداخت"}
          </h1>
        </div>
        <p className="text-lg mb-2">
          <strong>شناسه پرداخت:</strong> {paymentData.ResNum.slice(0, 8)}
        </p>
        <p className="text-lg mb-2">
          <strong>مبلغ پرداخت شده:</strong>{" "}
          {Number(paymentData.Amount).toLocaleString()} تومان
        </p>
        <p className="text-lg mb-2">
          <strong>تاریخ پرداخت:</strong> {new Date().toLocaleString("fa-IR")}
        </p>
        <p className="text-lg mb-4">
          <strong>وضعیت پرداخت:</strong> {stateText}
        </p>
      </div>
    </div>
  );
}
