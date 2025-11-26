import { removeCourseFromCart } from "@/data-layer/cart/removeCourseFromCart";
import { cartType } from "@/features/dashboard/cart/cartType";

export const handleDeleteCourse = async (
  courseId: string,
  cart: cartType[],
  setCart: (data: cartType[]) => void
) => {
  if (cart.length === 0) return;

  const cartId = cart[0].uuid;
  const updatedCart = await removeCourseFromCart(cartId, courseId);

  setCart(updatedCart);
};
