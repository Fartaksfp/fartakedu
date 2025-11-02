import React from "react";
import SidebarDesktopItem from "./sidebardesktop/SidebarDesktopItem";

const navbarItems = [
  { name: "داشبورد", href: "/dashboard", icon: "layout-grid" },
  { name: "دوره های من", href: "/dashboard/my-courses", icon: "book-open" },
  { name: "گواهینامه ها", href: "/dashboard/certificates", icon: "newspaper" },
  { name: "پشتیبانی", href: "/dashboard/support", icon: "life-buoy" },
  { name: "بازگشت به سایت", href: "/", icon: "door-open" },
] as const;

function DashboardSidebar() {
  return (
    <div className="bg-gray-50 dark:bg-slate-950 w-52 h-full fixed right-0 top-0 pt-22 px-5">
      <div className="flex flex-col gap-2">
        {navbarItems.map((Item, index) => (
          <SidebarDesktopItem item={Item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default DashboardSidebar;
