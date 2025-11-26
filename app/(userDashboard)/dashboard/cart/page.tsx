"use client";
import { useEffect, useState } from "react";
import { cartType } from "@/features/dashboard/cart/cartType";
import { SendPayment } from "@/data-layer/payment/SendPayment";
import { getUser } from "@/data-layer/user/getUser";
import { getCart } from "@/data-layer/cart/getCart";
import { handleDeleteCourse } from "@/helpers/cart/handleDeleteCourse";
import { UserInfoPayload } from "@/types/userInfo";
import { CartContainer } from "@/features/dashboard/cart/components/CartContainer";
import { CartLoading } from "@/features/dashboard/cart/components/CartLoading";
import { EmptyCart } from "@/features/dashboard/cart/components/EmptyCart";

const PAGE_TITLE = "پنل کاربری | سبد خرید";

export default function CartPage() {
  const [user, setUser] = useState<UserInfoPayload | null>(null);
  const [cart, setCart] = useState<cartType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = PAGE_TITLE;
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getUser();
      setUser(userData);
    };
    fetchUser();
  }, []);

  useEffect(() => {
    if (!user) return;

    const fetchCart = async () => {
      try {
        const data = await getCart(user.user_id);
        setCart(data.res);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, [user]);

  const handleCheckout = () => {
    if (cart.length === 0 || !user) return;
    SendPayment(cart[0].uuid, user.phone!, cart[0].total);
  };

  if (loading) {
    return <CartLoading />;
  }

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-center md:text-right">
        سبد خرید شما
      </h1>

      {cart.map((cartItem) => (
        <CartContainer
          key={cartItem.uuid}
          cartItem={cartItem}
          onDeleteCourse={handleDeleteCourse}
          cart={cart}
          setCart={setCart}
          onCheckout={handleCheckout}
        />
      ))}
    </div>
  );
}
