import React from "react";
import { ChevronLeft, LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function DashboardButton() {
  return (
    <Link href={'/dashboard'}>
    <Button
      variant={"outline"}
      className="flex flex-row-reverse mx-10 items-center gap-1 text-sm md:text-base"
    >
      <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
      <LayoutDashboard className="w-4 h-4 md:w-5 md:h-5" />
      <span>داشبورد</span>
    </Button>
    </Link>
  );
}

export default DashboardButton;
