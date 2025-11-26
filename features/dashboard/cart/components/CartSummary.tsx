import React from "react";
import { Button } from "@/components/ui/button";
import { cartType } from "@/features/dashboard/cart/cartType";

interface CartSummaryProps {
  cartItem: cartType;
  onCheckout: () => void;
}

const STATUS_TEXT = {
  pending: "در انتظار پرداخت",
  completed: "پرداخت شده",
} as const;

const STATUS_COLORS = {
  pending: "text-yellow-600",
  completed: "text-green-600",
} as const;

export function CartSummary({ cartItem, onCheckout }: CartSummaryProps) {
  const statusColor = STATUS_COLORS[cartItem.status as keyof typeof STATUS_COLORS] || "text-gray-600";
  const statusText = STATUS_TEXT[cartItem.status as keyof typeof STATUS_TEXT] || cartItem.status;

  return (
    <>
      <hr className="mt-5" />
      <div className="mt-6 flex flex-col items-end">
        <p className="text-xl sm:text-2xl font-bold">
          جمع کل: {cartItem.total.toLocaleString()} تومان
        </p>
        <p className={`text-sm font-medium ${statusColor}`}>
          وضعیت: {statusText}
        </p>
      </div>

      {cartItem.status === "pending" && (
        <div className="mt-4 flex flex-col items-end gap-3">
          <Button
            className="w-full sm:w-50 text-lg sm:text-xl h-12"
            onClick={onCheckout}
          >
            پرداخت
          </Button>
        </div>
      )}
    </>
  );
}
