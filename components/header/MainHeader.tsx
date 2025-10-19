import { ChevronLeft, User } from "lucide-react";
import Logo from "../Logo";
import { Button } from "../ui/button";
import Navbar from "./Navbar";
import Themetoggle from "../shared/Themetoggle";

function MainHeader() {
  return (
    <header className="p-4 md:px-7 z-10 bg-white dark:bg-black fixed w-full flex justify-between items-center border-b border-border">
      <div className="pr-6 md:pr-20">
        <Logo width="160px" />
      </div>

      <div className="flex items-center gap-4">
        <div className="sm:hidden">
        <Themetoggle />
        </div>
        <Navbar />
      </div>

      <div className="sm:flex flex-row-reverse items-center gap-3 md:gap-5 pl-4 md:pl-20 hidden">
        <Button
          variant={"outline"}
          className="flex flex-row-reverse items-center gap-1 text-sm md:text-base"
        >
          <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
          <User className="w-4 h-4 md:w-5 md:h-5" />
          <span>ورود | ثبت نام</span>
        </Button>
        <Themetoggle />
      </div>
    </header>
  );
}

export default MainHeader;