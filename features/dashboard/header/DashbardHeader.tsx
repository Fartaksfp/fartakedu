import React from "react";
import { Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Themetoggle from "@/components/shared/Themetoggle/Themetoggle";

function DashbardHeader() {
  return (
    <header className="border-b bg-white dark:bg-slate-950 fixed z-50 w-full">
      <div className="flex px-10 mx-auto h-16 justify-between items-center ">
        <div className="flex items-center">سلام خوش آمدید👋</div>

        <div className="flex items-center space-x-4">
          <Themetoggle />
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-600 rounded-full" />
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Profile</SheetTitle>
              </SheetHeader>
              <div className="py-4">
                <div className="flex flex-col space-y-4">
                  <div className="flex flex-col space-y-1">
                    <span className="text-sm font-medium">John Doe</span>
                    <span className="text-sm text-muted-foreground">
                      john.doe@example.com
                    </span>
                  </div>
                  <Button variant="outline">Sign out</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default DashbardHeader;
