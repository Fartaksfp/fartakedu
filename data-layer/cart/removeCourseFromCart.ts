import { toast } from "react-toastify";
import { cartType } from "@/features/dashboard/cart/cartType";

export async function removeCourseFromCart(
  courseId: string,
  cart: cartType[],
  setCart: (data: cartType[]) => void
) {
  if (cart.length === 0) return;
  const cartId = cart[0].uuid;
  const res = toast.promise(
    fetch("/api/rmcourse", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ cartId: cartId, courseId: courseId }),
    }),
    {
      pending: "لطفا صبر کنید",
      success: "از سبد خرید حذف شذ",
      error: "لطفا صبر مشکلی رخ داده!",
    }
  );

  const data = (await res).json();
  setCart(await data);
  return data;
}
