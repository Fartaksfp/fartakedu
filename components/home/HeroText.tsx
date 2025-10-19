import RotatingCylinder from "./RotatingCylinder";

function HeroText() {
  return (
    <h1 className="text-white text-3xl sm:text-4xl flex flex-col sm:flex-row items-center sm:items-baseline">
      برگزاری کارگاه های&nbsp;
      <RotatingCylinder />
      &nbsp;با فرتاک آکادمی
    </h1>
  );
}

export default HeroText;
