"use client";
import { useSession } from "next-auth/react";
import UserForm from "@/features/dashboard/profile/UserForm";
import SkeletonForm from "@/features/dashboard/profile/SkeletonForm";

function Page() {
  const { data: session, status } = useSession();

  return <div>{status === "loading" ? <SkeletonForm /> : <UserForm />}</div>;
}

export default Page;
