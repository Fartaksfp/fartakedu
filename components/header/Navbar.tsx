"use client";

import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import {
  House,
  BookOpen,
  Pencil,
  Phone,
  Menu,
  ChevronLeft,
  User,
} from "lucide-react";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import NavItem from "./NavItem";

const navbarItems = [
  { name: "صفحه اصلی", href: "/", icon: "house" },
  { name: "دوره های آموزشی", href: "/courses", icon: "book-open" },
  { name: "بلاگ", href: "/blog", icon: "pencil" },
  { name: "ارتباط با ما", href: "/contact", icon: "phone" },
] as const;

const iconsMap = {
  house: House,
  "book-open": BookOpen,
  pencil: Pencil,
  phone: Phone,
};

function Navbar() {

  return (
    <>
      <div className="hidden xl:flex">
        <NavigationMenu>
          <NavigationMenuList className="flex flex-row-reverse gap-4">
            {navbarItems.map((item, index) => {
              return (
                <NavItem key={index} item={item}/>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="xl:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background">
            <SheetHeader>
              <SheetTitle className="mt-10">فهرست</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col -mt-10 gap-6">
              <div className=""></div>
              {navbarItems.map((item, index) => {
                const IconComponent = iconsMap[item.icon];
                return (
                  <Link
                    key={index}
                    href={item.href}
                    className="flex flex-row mr-5 items-center gap-3 text-lg hover:text-primary transition"
                  >
                    <IconComponent className="!w-5 !h-5" />
                    {item.name}
                  </Link>
                );
              })}
            </div>
            <Button
              variant={"outline"}
              className="flex flex-row-reverse mx-10 items-center gap-1 text-sm md:text-base"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
              <User className="w-4 h-4 md:w-5 md:h-5" />
              <span>ورود | ثبت نام</span>
            </Button>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}

export default Navbar;
