"use server";
import React from "react";
import LoginDialog from "./Buttons/LoginDialog";
import DashboardButton from "./Buttons/DashboardButton";
import { getSession } from "@/data-layer/user/getSession";

async function LoginButtonRender() {
  const session = await getSession();

  return (
    <div>{session === "valid" ? <DashboardButton /> : <LoginDialog />}</div>
  );
}

export default LoginButtonRender;
