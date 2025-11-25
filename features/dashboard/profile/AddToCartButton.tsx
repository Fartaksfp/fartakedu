"use client";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import React from "react";

function AddToCartButton({ id }: { id: string }) {
  const { data: session } = useSession();
  const userId = session?.user.id;

  const addToCart = async (courseId: string) => {
    const res = await fetch('/api/cart', {
        method: 'POST',
        headers: {
            'Content' : 'application/json'
        },
        body: JSON.stringify({userId : userId, course: courseId})
    })

    const data = await res.json()
    
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
