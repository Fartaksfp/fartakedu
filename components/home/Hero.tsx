import HeroText from "./HeroText";
import HeroImage from "./HeroImage";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Search } from "lucide-react";

function Hero() {
  return (
    <div className="relative w-full h-full">
      <HeroImage />

      {/* overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative h-[100dvh] flex flex-col items-center justify-center">
        <HeroText />
        <div className="relative">
          <Input
            className="w-80 mt-5 bg-white text-black p-6"
            placeholder="دنبال چه دوره ای هستی؟"
          />
          <Button className="absolute top-7 left-2">
            <Search />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
