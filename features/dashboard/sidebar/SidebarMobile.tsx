import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import React from "react";
import SidebarItem from "./SidebarItem";

const navbarItems = [
  { name: "داشبورد", href: "/dashboard", icon: "layout-grid" },
  { name: "دوره های من", href: "/dashboard/my-courses", icon: "book-open" },
  { name: "گواهینامه ها", href: "/dashboard/certificates", icon: "newspaper" },
  { name: "پشتیبانی", href: "/dashboard/support", icon: "life-buoy" },
  { name: "بازگشت به سایت", href: "/", icon: "door-open" },
] as const;

function SidebarMobile() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="default" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="pt-8">فهرست</SheetTitle>
        </SheetHeader>
        <div className="py-4">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col px-5">
              <div className="flex flex-col gap-2">
                {navbarItems.map((Item, index) => (
                  <SheetClose asChild key={index}>
                    <SidebarItem item={Item} />
                  </SheetClose>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default SidebarMobile;
