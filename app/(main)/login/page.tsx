import Login from "@/components/auth/Login";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

async function Page() {
  const session = await getServerSession();

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
