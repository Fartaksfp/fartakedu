import React, { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cartType } from "@/features/dashboard/cart/cartType";
import { UserInfoPayload } from "@/types/userInfo";
import { discountChecker } from "@/data-layer/cart/discountChecker";

interface CartSummaryProps {
  cartItem: cartType;
  onCheckout: () => void;
  user: UserInfoPayload;
  setCart: React.Dispatch<React.SetStateAction<cartType[]>>;
}

const STATUS_TEXT = {
  pending: "در انتظار پرداخت",
  completed: "پرداخت شده",
} as const;

const STATUS_COLORS = {
  pending: "text-yellow-600",
  completed: "text-green-600",
} as const;

export function CartSummary({
  cartItem,
  onCheckout,
  user,
  setCart,
}: CartSummaryProps) {
  const statusColor =
    STATUS_COLORS[cartItem.status as keyof typeof STATUS_COLORS] ||
    "text-gray-600";
  const statusText =
    STATUS_TEXT[cartItem.status as keyof typeof STATUS_TEXT] || cartItem.status;

  const discountInput = useRef<HTMLInputElement | null>(null);

  const [discountPercent, setDiscountPercent] = useState(0);
  const [discountMessage, setDiscountMessage] = useState<string | null>(null);
  const [withTax, setWithTax] = useState(false);

  let orgDiscountTotal = 0;

  if (cartItem.courses) {
    cartItem.courses.forEach((course) => {
      if (course.status === "soon") {
        if (user.signup_model === "مرکز رشد، پیش رشد، کوآپ") {
          orgDiscountTotal += (course.price * 80) / 100;
        } else if (user.signup_model === "شرکت های اراضی و استیجاری") {
          orgDiscountTotal += (course.price * 50) / 100;
        }
      }
    });
  }

  const handleDiscountCode = async () => {
    const code = discountInput.current?.value?.trim();
    if (!code) return;

    const result = await discountChecker(code);

    if (!result.valid) {
      setDiscountPercent(0);
      setDiscountMessage("کد تخفیف نامعتبر است");
      return;
    }

    setDiscountPercent(result.discount.value);
    setDiscountMessage(`کد تخفیف ${result.discount.value}% اعمال شد`);
  };

  let discountByCodeTotal = 0;

  if (cartItem.courses && discountPercent > 0) {
    cartItem.courses.forEach((course) => {
      discountByCodeTotal += (course.price * discountPercent) / 100;
    });
  }

  const baseTotal =
    cartItem.courses?.reduce((sum, course) => sum + course.price, 0) ?? 0;

  const priceAfterDiscounts =
    baseTotal - orgDiscountTotal - discountByCodeTotal;

  const taxAmount = withTax ? (priceAfterDiscounts * 10) / 100 : 0;
  const finalPrice = priceAfterDiscounts + taxAmount;

  useEffect(() => {
    setCart((prev) => {
      const updatedCart = prev.map((item) =>
        item.uuid === cartItem.uuid
          ? {
              ...item,
              total: finalPrice, // فقط آپدیت total
            }
          : item
      );
      return updatedCart;
    });
  }, [finalPrice, cartItem.uuid, setCart]);

  return (
    <>
      <hr className="mt-5" />

      <div className="mt-6 flex flex-col md:flex-row gap-4 p-4 border rounded-lg">
        <p className="text-xl font-bold">
          جمع کل سفارش:
          <span> {baseTotal.toLocaleString()} تومان</span>
        </p>

        <p className="text-lg font-semibold">
          تخفیف:
          <span className="text-red-500">
            {" "}
            {(orgDiscountTotal + discountByCodeTotal).toLocaleString()} تومان
          </span>
        </p>

        {withTax && (
          <p className="text-lg font-semibold">
            مالیات (۱۰٪):
            <span className="text-orange-500">
              {" "}
              {taxAmount.toLocaleString()} تومان
            </span>
          </p>
        )}

        <p className="text-xl font-bold">
          قابل پرداخت:
          <span className="text-green-600">
            {" "}
            {finalPrice.toLocaleString()} تومان
          </span>
        </p>

        <p className={`text-sm font-medium ${statusColor}`}>
          وضعیت سفارش: {statusText}
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-2 mt-3">
        <p>کد تخفیف:</p>
        <input
          ref={discountInput}
          type="text"
          className="border-2 rounded px-2 py-1"
        />
        <Button onClick={handleDiscountCode}>بررسی</Button>

        {discountMessage && (
          <p className="text-sm text-blue-600">{discountMessage}</p>
        )}
      </div>

      <label className="flex items-center gap-2 mt-2">
        <input
          type="checkbox"
          checked={withTax}
          onChange={(e) => setWithTax(e.target.checked)}
        />
        افزودن مالیات (۱۰٪)
      </label>

      {cartItem.status === "pending" && (
        <div className="mt-4">
          <Button className="w-full text-lg h-12" onClick={onCheckout}>
            پرداخت
          </Button>
        </div>
      )}
    </>
  );
}
