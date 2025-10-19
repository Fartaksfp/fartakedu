import { Award, BookOpen, TrendingUp, Users } from "lucide-react";
import React from "react";

const iconsMap = {
  "book-open": BookOpen,
  users: Users,
  award: Award,
  trending: TrendingUp,
};

type IconKey = keyof typeof iconsMap;

function BenefitCard({
  name,
  number,
  icon,
}: {
  name: string;
  number: string;
  icon: IconKey;
}) {
  const IconComponent = iconsMap[icon];

  return (
    <div className="flex flex-col items-center justify-center backdrop-blur-md rounded-2xl p-5 w-36 sm:w-60 hover:scale-105 transition-transform duration-300 shadow-lg dark:bg-gray-900">
      <div className="w-15 h-15 flex items-center justify-center bg-accent/30 rounded-full mb-3">
        {IconComponent && <IconComponent className="w-8 h-8 text-primary" />}
      </div>

      <div className="text-2xl sm:text-3xl font-bold mb-1">
        {number}
      </div>

      <div className="text-center text-sm sm:text-base font-medium">
        {name}
      </div>
    </div>
  );
}

export default BenefitCard;
