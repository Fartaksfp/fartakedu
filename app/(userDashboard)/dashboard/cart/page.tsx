"use client";
import { courseType } from "@/features/courses/types/course";
import { ShoppingBasket, X } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cartType } from "@/features/dashboard/cart/cartType";
import { removeCourseFromCart } from "@/hooks/cart/removeCourseFromCart";
import { SendPayment } from "@/hooks/payment/SendPayment";
import { getUser } from "@/data-layer/user/getUser";
import { UserInfoPayload } from "@/types/userInfo";
import { getCart } from "@/data-layer/cart/getCart";

export default function Page() {
  const [user, setUser] = useState<UserInfoPayload | null>(null);
  const [cart, setCart] = useState<cartType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getUser();
      setUser(userData);
    };
    fetchUser();
  }, []);

  useEffect(() => {
    document.title = "پنل کاربری | سبد خرید";
  }, []);

  useEffect(() => {
    if (!user) return;

    const fetchCart = async () => {
      const data = await getCart(user.user_id);
      setCart(data.res);
      setLoading(false);
    };
    
    fetchCart();
  }, [user]);

  const handleDeleteCourse = async (courseId: string) => {
    if (cart.length === 0) return;

    const cartId = cart[0].uuid;
    const updatedCart = await removeCourseFromCart(cartId, courseId);
    setCart(updatedCart);
  };

  const handleCheckout = () => {
    if (cart.length === 0 || !user) return;
    SendPayment(cart[0].uuid, user.phone!, cart[0].total);
  };

  if (loading) {
    return (
      <div className="h-[500px] flex justify-center items-center">
        در حال بارگذاری...
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="h-[500px] flex flex-col gap-5 justify-center items-center px-4">
        <ShoppingBasket size={150} />
        <h2 className="text-2xl md:text-4xl text-center">
          سبد خرید شما خالی است :(
        </h2>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-center md:text-right">
        سبد خرید شما
      </h1>

      {cart.map((cartItem: cartType) => (
        <div key={cartItem.uuid} className="border rounded-lg p-4 mb-6 shadow-sm">
          <div className="space-y-4">
            {cartItem.courses?.map((course: courseType) => (
              <div
                key={course.id}
                className="flex flex-col sm:flex-row border-2 rounded-4xl p-4 sm:p-5 items-center gap-4 relative"
              >
                <X
                  size={16}
                  className="self-end sm:self-auto cursor-pointer"
                  onClick={() => handleDeleteCourse(course.id)}
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
            ))}
          </div>

          <hr className="mt-5" />
          <div className="mt-6 flex flex-col items-end">
            <p className="text-xl sm:text-2xl font-bold">
              جمع کل: {cartItem.total.toLocaleString()} تومان
            </p>
            <p
              className={
                "text-sm font-medium " +
                (cartItem.status === "pending"
                  ? "text-yellow-600"
                  : "text-green-600")
              }
            >
              وضعیت: {cartItem.status === "pending" ? "در انتظار پرداخت" : "پرداخت شده"}
            </p>
          </div>

          {cartItem.status === "pending" && (
            <div className="mt-4 flex flex-col items-end gap-3">
              <Button
                className="w-full sm:w-50 text-lg sm:text-xl h-12"
                onClick={handleCheckout}
              >
                پرداخت
              </Button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
