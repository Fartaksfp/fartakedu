import { ChevronLeft, User } from "lucide-react"
import Logo from "../Logo"
import { Button } from "../ui/button"
import Navbar from "./Navbar"
import Themetoggle from "../shared/Themetoggle"

function MainHeader() {
  return (
    <div className="p-7 flex justify-between">
      <div className="pr-20">
        <Logo width="200px" />
      </div>
      <div>
        <Navbar/>
      </div>
      <div className="flex flex-row-reverse gap-5 pl-20">
        <Button variant={"outline"}>
          <span>ورود | ثبت نام</span>
          <User/>
          <ChevronLeft/>
        </Button>
        <Themetoggle/>
      </div>
    </div>
  )
}

export default MainHeader