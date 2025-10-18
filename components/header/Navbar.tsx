import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { House, BookOpen, Pencil, Phone } from "lucide-react";

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
    <NavigationMenu>
      <NavigationMenuList className="flex flex-row-reverse">
        {navbarItems.map((item, index) => {
          const IconComponent = iconsMap[item.icon];
          return (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink className="flex flex-row-reverse items-center gap-2 cursor-pointer text-lg ">
                <IconComponent className="!w-5 !h-5" />
                <span>{item.name}</span>
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default Navbar;
