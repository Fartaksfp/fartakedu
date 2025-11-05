"use client";
import { useSession } from "next-auth/react";
import UserForm from "@/features/dashboard/profile/UserForm";
import SkeletonForm from "@/features/dashboard/profile/SkeletonForm";
import { useUser } from "@/lib/query/useUser";
import UserInfo from "@/features/dashboard/profile/UserInfo";
import { useEffect } from "react";

function Page() {
  useEffect(() => {
    document.title = "پروفایل کاربر";
  }, []);

  const { data: session, status } = useSession();

  const userId = session?.user?.id;

  const { data, isLoading, isError, error } = useUser(userId);

  if (isLoading) return <SkeletonForm />;
  if (isError) return <p>خطا در دریافت اطلاعات کاربر: {String(error)}</p>;
  if (data?.success === true && data.res) {
    return <UserInfo data={data.res} />;
  }

  return (
    <>
      <div>{status === "loading" ? <SkeletonForm /> : <UserForm />}</div>
    </>
  );
}

export default Page;
