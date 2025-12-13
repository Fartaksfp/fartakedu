"use client";
import { useEffect, useState } from "react";
import { cartType } from "@/features/dashboard/cart/cartType";
import { SendPayment } from "@/data-layer/payment/SendPayment";
import { getUser } from "@/data-layer/user/getUser";
import { getCart } from "@/data-layer/cart/getCart";
import { UserInfoPayload } from "@/types/userInfo";
import { CartContainer } from "@/features/dashboard/cart/components/CartContainer";
import { CartLoading } from "@/features/dashboard/cart/components/CartLoading";
import { EmptyCart } from "@/features/dashboard/cart/components/EmptyCart";
import { toast } from "react-toastify";

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
    const cartItem = cart[0];

    if (cartItem.total === 0) {
      toast.error("سبد خرید شما خالی است");
      return;
    }

    let discount_on_cart = 0;

    cartItem.courses.forEach((course) => {
      if (course.status === "soon") {
        if (user.signup_model === "مرکز رشد، پیش رشد، کوآپ") {
          discount_on_cart += (course.price * 80) / 100;
        } else if (user.signup_model === "شرکت های اراضی و استیجاری") {
          discount_on_cart += (course.price * 50) / 100;
        }
      }
    });

    SendPayment(cart[0].uuid, user.phone!, cartItem.total - discount_on_cart);
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
          cart={cart}
          setCart={setCart}
          onCheckout={handleCheckout}
          user={user!}
        />
      ))}
    </div>
  );
}
