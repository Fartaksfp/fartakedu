"use client";
import { useEffect, useState } from "react";
import UserForm from "@/features/dashboard/profile/UserForm";
import UserInfo from "@/features/dashboard/profile/UserInfo";
import { getUser } from "@/data-layer/user/getUser";
import { UserInfoPayload } from "@/types/userInfo";
import SkeletonForm from "@/features/dashboard/profile/SkeletonForm";
import { toast } from "react-toastify";
import { redirect, useSearchParams } from "next/navigation";

export default function Page() {
  const [user, setUser] = useState<UserInfoPayload | null>(null);
  const searchParams = useSearchParams();
  const course = searchParams.get("course");

  const fetchUserData = async () => {
    const data = await getUser();
    toast.success("اطلاعات ثبت شد. هم اکنون میتوانید خرید کنید");
    setUser(data);
    if (course) {
      redirect(course);
    }
  };

  useEffect(() => {
    document.title = "پنل کاربری | پروفایل";
    fetchUserData();
  }, []);

  if (!user) return <SkeletonForm />;

  return !user.first_name ? (
    <>
      <UserForm refresh={fetchUserData} />
    </>
  ) : (
    <>
      <UserInfo data={user} />
    </>
  );
}
