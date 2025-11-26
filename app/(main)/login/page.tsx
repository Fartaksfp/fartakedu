import Login from "@/components/auth/Login";
import { getSession } from "@/data-layer/user/getSession";
import { redirect } from "next/navigation";
import React from "react";

async function Page() {
  const session = await getSession();

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="h-dvh flex flex-col gap-5 justify-center items-center">
      <p className="text-center font-bold">ورود یا ثبت نام با شماره موبایل</p>
      <Login />
    </div>
  );
}

export default Page;
