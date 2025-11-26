import { cartType } from "@/features/dashboard/cart/cartType";
import { courseType } from "@/features/courses/types/course";
import React from "react";
import { CartItem } from "./CartItem";
import { CartSummary } from "./CartSummary";

interface CartContainerProps {
  cartItem: cartType;
  onDeleteCourse: (courseId: string, cart: cartType[], setCart: React.Dispatch<React.SetStateAction<cartType[]>>) => void;
  cart: cartType[];
  setCart: React.Dispatch<React.SetStateAction<cartType[]>>;
  onCheckout: () => void;
}

export function CartContainer({
  cartItem,
  onDeleteCourse,
  cart,
  setCart,
  onCheckout,
}: CartContainerProps) {
  return (
    <div className="border rounded-lg p-4 mb-6 shadow-sm">
      <div className="space-y-4">
        {cartItem.courses?.map((course: courseType) => (
          <CartItem
            key={course.id}
            course={course}
            onDelete={onDeleteCourse}
            cart={cart}
            setCart={setCart}
          />
        ))}
      </div>

      <CartSummary cartItem={cartItem} onCheckout={onCheckout} />
    </div>
  );
}
