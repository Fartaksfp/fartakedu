import Logo from "../shared/Logo";
import Navbar from "./Navbar";
import Themetoggle from "../shared/Themetoggle/Themetoggle";
import LoginButtonRender from "./LoginButtonRender";

function MainHeader() {
  return (
    <header className="p-4 md:px-7 z-10 bg-white dark:bg-black fixed w-full flex justify-between items-center border-b border-border transition-all duration-300">
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
        <LoginButtonRender />
        <Themetoggle />
      </div>
    </header>
  );
}

export default MainHeader;
