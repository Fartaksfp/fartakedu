import React from "react";
import SidebarItem from "./SidebarItem";

const navbarItems = [
  { name: "داشبورد", href: "/dashboard", icon: "layout-grid" },
  { name: "دوره های من", href: "/dashboard/my-courses", icon: "book-open" },
  { name: "گواهینامه ها", href: "/dashboard/certificates", icon: "newspaper" },
  { name: "پروفایل", href: "/dashboard/profile", icon: "user" },
  { name: "بازگشت به سایت", href: "/", icon: "door-open" },
] as const;

function DashboardSidebar() {
  return (
    <div>
      <div className="border-l-2 dark:bg-slate-950 w-52 h-full hidden md:block fixed right-0 top-0 pt-22 px-5">
        <div className="flex flex-col gap-2">
          {navbarItems.map((Item, index) => (
            <SidebarItem item={Item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DashboardSidebar;
