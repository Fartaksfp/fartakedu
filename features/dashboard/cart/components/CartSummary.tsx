import React from "react";
import { Button } from "@/components/ui/button";
import { cartType } from "@/features/dashboard/cart/cartType";
import { UserInfoPayload } from "@/types/userInfo";

interface CartSummaryProps {
  cartItem: cartType;
  onCheckout: () => void;
  user: UserInfoPayload;
}

const STATUS_TEXT = {
  pending: "در انتظار پرداخت",
  completed: "پرداخت شده",
} as const;

const STATUS_COLORS = {
  pending: "text-yellow-600",
  completed: "text-green-600",
} as const;

export function CartSummary({ cartItem, onCheckout, user }: CartSummaryProps) {
  const statusColor =
    STATUS_COLORS[cartItem.status as keyof typeof STATUS_COLORS] ||
    "text-gray-600";
  const statusText =
    STATUS_TEXT[cartItem.status as keyof typeof STATUS_TEXT] || cartItem.status;

  let discount_on_cart = 0;
  
  if (cartItem.courses !== null)
    cartItem.courses.forEach((course) => {
      if (course.status === "soon") {
        if (user.signup_model === "مرکز رشد، پیش رشد، کوآپ") {
          discount_on_cart += (course.price * 80) / 100;
        } else if (user.signup_model === "شرکت های اراضی و استیجاری") {
          discount_on_cart += (course.price * 50) / 100;
        }
      }
    });

  return (
    <>
      <hr className="mt-5" />
      <div className="mt-6 flex flex-col items-start gap-4 p-4 border rounded-lg">
        <p className="text-xl sm:text-2xl font-bold ">
          جمع کل سفارش:{" "}
          <span className="">{cartItem.total.toLocaleString()} تومان</span>
        </p>
        <p className="text-lg sm:text-xl font-semibold ">
          مقدار تخفیف:{" "}
          <span className="text-red-500">
            {discount_on_cart.toLocaleString()} تومان
          </span>
        </p>
        <p className="text-xl sm:text-2xl font-bold ">
          قابل پرداخت:{" "}
          <span className="text-green-600">
            {(cartItem.total - discount_on_cart).toLocaleString()} تومان
          </span>
        </p>
        <p className={`text-sm font-medium ${statusColor}`}>
          وضعیت سفارش: {statusText}
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
