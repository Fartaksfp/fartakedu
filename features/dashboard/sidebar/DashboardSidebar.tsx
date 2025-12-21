import React from "react";
import SidebarItem from "./SidebarItem";
import { navbarItems } from "@/static/dashboardNavbarItems";
import ExitButton from "./ExitButton";

function DashboardSidebar() {
  return (
    <div>
      <div className="border-l-2 dark:bg-slate-950 w-52 h-full hidden md:block fixed right-0 top-0 pt-22 px-5">
        <div className="flex flex-col gap-2">
          {navbarItems.map((Item, index) => (
            <SidebarItem item={Item} key={index} />
          ))}
          <ExitButton item={{ name: "خروچ", icon: "door-open" }}/>
        </div>
      </div>
    </div>
  );
}

export default DashboardSidebar;
