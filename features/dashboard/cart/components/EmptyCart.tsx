import React from "react";
import { ShoppingBasket } from "lucide-react";

export function EmptyCart() {
  return (
    <div className="h-[500px] flex flex-col gap-5 justify-center items-center px-4">
      <ShoppingBasket size={150} />
      <h2 className="text-2xl md:text-4xl text-center">
        سبد خرید شما خالی است :(
      </h2>
    </div>
  );
}
