"use client"
import React, { useEffect, useState } from "react";
import LoginDialog from "./Buttons/LoginDialog";
import DashboardButton from "./Buttons/DashboardButton";
import { getSession } from "@/data-layer/user/getSession";

function LoginButtonRender() {
  const [session, setsession] = useState<string | null>(null);
  useEffect(() => {
    const fetchSession = async () => {
      const session = await getSession();
      setsession(session);
    };

    fetchSession();
  }, []);

  return (
    <div>{session === "valid" ? <DashboardButton /> : <LoginDialog />}</div>
  );
}

export default LoginButtonRender;
