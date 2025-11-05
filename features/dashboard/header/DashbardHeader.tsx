import React from "react";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

import Themetoggle from "@/components/shared/Themetoggle/Themetoggle";
import TodayDate from "@/components/shared/TodayDate";
import SidebarMobile from "../sidebar/SidebarMobile";
import Logo from "@/components/shared/Logo";

function DashbardHeader() {
  return (
    <header className="border-b bg-white dark:bg-slate-950 fixed z-50 w-full">
      <div className="flex px-10 mx-auto h-16 justify-between items-center ">
        <div className="block md:hidden">
          <SidebarMobile />
        </div>
        <div className="items-center ">سلام خوش آمدید👋</div>
        <div>
          <Logo width="140px" />
        </div>

        <div className=" items-center space-x-4 hidden md:flex">
          <Themetoggle />
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-600 rounded-full" />
          </Button>
        </div>
      </div>
    </header>
  );
}

export default DashbardHeader;
