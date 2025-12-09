"use client";
import { Button } from "@/components/ui/button";
import { getUser } from "@/data-layer/user/getUser";
import { UserInfoPayload } from "@/types/userInfo";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

function AddToCartButton({ id }: { id: string }) {
  const [user, setuser] = useState<UserInfoPayload>();

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser();
      setuser(user);
    };
    fetchUser();
  }, []);

  const addToCart = async (courseId: string) => {
    if(!user?.first_name) {
      toast.error('لطفا اطلاعات خود را وارد کنید')
      redirect('/dashboard/profile')
    }

    await toast.promise(
      fetch("/api/cart", {
        method: "POST",
        headers: {
          Content: "application/json",
        },
        body: JSON.stringify({ userId: user?.user_id, course: courseId }),
      }),
      {
        pending: "لطفا صبر کنید...",
        success: "به سبد خرید اضافه شد",
        error: "مشکلی رخ داده",
      }
    );
  };

  return (
    <Button
      size="lg"
      className="w-full sm:w-auto"
      onClick={() => addToCart(id)}
    >
      ثبت نام در دوره
    </Button>
  );
}

export default AddToCartButton;
