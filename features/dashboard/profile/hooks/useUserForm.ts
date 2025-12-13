import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { UserInfoForm, userInfoSchema } from "../schema";

import { getUser } from "@/data-layer/user/getUser";
import { addUser } from "@/data-layer/user/addUser";
import { UserInfoPayload } from "@/types/userInfo";
import { toast } from "react-toastify";

export function useUserForm(refresh: () => void) {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<UserInfoPayload | null>(null);

  useEffect(() => {
    async function fetchUser() {
      const res = await getUser();
      setUser(res);
    }
    fetchUser();
  }, []);

  const form = useForm<UserInfoForm>({
    resolver: valibotResolver(userInfoSchema),
  });

  const onSubmit = async (values: UserInfoForm) => {
    if (!user) return;

    const payload = {
      ...values,
      user_id: user.user_id,
      phone: user.phone,
    };

    setLoading(true);
    await addUser(payload);
    setLoading(false);
    toast.success("اطلاعات ثبت شد. هم اکنون میتوانید خرید کنید");
    refresh();
  };

  return {
    user,
    loading,
    form,
    onSubmit,
  };
}
