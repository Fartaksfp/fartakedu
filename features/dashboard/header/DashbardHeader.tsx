import React from "react";
import { ShoppingBasket } from "lucide-react";
import { Button } from "@/components/ui/button";
import Themetoggle from "@/components/shared/Themetoggle/Themetoggle";
import SidebarMobile from "../sidebar/SidebarMobile";
import Logo from "@/components/shared/Logo";
import Link from "next/link";

function DashbardHeader() {
  return (
    <header className="border-b bg-white dark:bg-slate-950 fixed z-50 w-full">
      <div className="flex px-10 mx-auto h-16 justify-between items-center ">
        <div className="flex gap-3 md:hidden">
          <SidebarMobile />
          <Link href={"/dashboard/cart"}>
            <Button variant="default" size="icon">
              <ShoppingBasket className="!w-5 !h-5" />
            </Button>
          </Link>
        </div>
        <div className="items-center hidden md:block">سلام خوش آمدید👋</div>
        <div>
          <Logo width="140px" />
        </div>

        <div className=" items-center space-x-4 hidden md:flex">
          <Themetoggle />
          <Link href={"/dashboard/cart"}>
            <Button variant="default" size="icon">
              <ShoppingBasket className="!w-5 !h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default DashbardHeader;
