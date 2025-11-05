import { Button } from "@/components/ui/button";
import { BookOpen, DoorOpen, LayoutGrid, Newspaper, User } from "lucide-react";
import Link from "next/link";
import React from "react";

type iconKey = "layout-grid" | "book-open" | "newspaper" | "user" | "door-open";

type ItemType = {
  name: string;
  href: string;
  icon: iconKey;
};

const iconsMap = {
  "layout-grid": LayoutGrid,
  "book-open": BookOpen,
  newspaper: Newspaper,
  "user": User,
  "door-open": DoorOpen,
};

function SidebarItem({ item }: { item: ItemType }) {
  const IconComponent = iconsMap[item.icon];
  return (
    <Link href={item.href}>
      <Button className="w-full h-12 flex justify-start" variant={"outline"}>
        <IconComponent />
        <span>{item.name}</span>
      </Button>
    </Link>
  );
}

export default SidebarItem;
