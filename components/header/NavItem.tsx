import React from "react";
import { NavigationMenuItem, NavigationMenuLink } from "../ui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, House, Pencil, Phone } from "lucide-react";

type IconKey = "house" | "book-open" | "pencil" | "phone";

type itemType = {
  name: string;
  href: string;
  icon: IconKey;
};

const iconsMap = {
  house: House,
  "book-open": BookOpen,
  pencil: Pencil,
  phone: Phone,
};

function NavItem({ item }: { item: itemType }) {
  const pathName = usePathname();
  const IconComponent = iconsMap[item.icon];
  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild>
        <Link
          href={item.href}
          className={`${pathName === item.href ? "bg-primary/80 text-white" : null} flex flex-row-reverse items-center gap-2 cursor-pointer hover:text-white transition focus:text-white focus:bg-primary/80`}
        >
          <IconComponent className="!w-5 !h-5 hover:text-white" />
          <span className="text-sm xl:text-lg">{item.name}</span>
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}

export default NavItem;
