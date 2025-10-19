import HeroText from "./HeroText";
import HeroImage from "./HeroImage";

function Hero() {
  return (
    <div className="relative w-full h-full">
      <HeroImage />

      {/* overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative h-[100dvh] flex items-center justify-center">
        <HeroText />
      </div>
    </div>
  );
}

export default Hero;
