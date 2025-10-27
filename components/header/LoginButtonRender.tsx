"use client";

import { useSession } from "next-auth/react";
import React from "react";
import LoginDialog from "./Buttons/LoginDialog";
import DashboardButton from "./Buttons/DashboardButton";
import { Skeleton } from "../ui/skeleton";

function LoginButtonRender() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <Skeleton className="w-40 h-10" />
    );
  }

  return <div>{session ? <DashboardButton /> : <LoginDialog />}</div>;
}

export default LoginButtonRender;
