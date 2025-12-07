import { courseType } from "@/features/courses/types/course";
import { X } from "lucide-react";
import Image from "next/image";
import React from "react";
import { cartType } from "@/features/dashboard/cart/cartType";
import { removeCourseFromCart } from "@/data-layer/cart/removeCourseFromCart";

interface CartItemProps {
  course: courseType;
  cart: cartType[];
  setCart: React.Dispatch<React.SetStateAction<cartType[]>>;
}

export function CartItem({ course, cart, setCart }: CartItemProps) {
  return (
    <div className="flex flex-col sm:flex-row border-2 rounded-4xl p-4 sm:p-5 items-center gap-4 relative">
      <X
        size={16}
        className="self-end sm:self-auto cursor-pointer hover:text-red-600 transition-colors"
        onClick={() => removeCourseFromCart(course.id, cart, setCart)}
      />
      <div className="w-full sm:w-30 h-55 sm:h-30 flex-shrink-0 bg-gray-100 rounded-2xl overflow-hidden relative">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 flex flex-col sm:flex-row justify-between items-start sm:items-center mt-2 sm:mt-0 w-full">
        <h2 className="text-lg font-semibold">{course.title}</h2>
        <p className="text-xl sm:text-2xl font-medium mt-2 sm:mt-0">
          {course.price.toLocaleString()} تومان
        </p>
      </div>
    </div>
  );
}
