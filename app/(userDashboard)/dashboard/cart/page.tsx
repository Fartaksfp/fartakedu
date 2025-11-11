"use client";
import { useCart } from "@/lib/query/cart/useCart";
import { ShoppingBasket } from "lucide-react";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";

function Page() {
  const { data: session } = useSession();
  const userId = session?.user?.id;
  const { data, isLoading, isError, error } = useCart(userId);

  useEffect(() => {
    document.title = "پنل کاربری | سبد خرید";
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <p>خطا در دریافت سبد خرید: {String(error)}</p>;
  if (data?.success === true && data.res) {
    console.log(data.res.length);

    if (data.res.length === 0) {
      return (
        <div className="h-[500px] flex flex-col gap-5 justify-center items-center">
          <ShoppingBasket size={150} />
          <h2 className="text-2xl md:text-4xl">سبد خرید شما خالی است : (</h2>
        </div>
      );
    }
    return <div>{JSON.stringify(data)}</div>;
  }
}

export default Page;
