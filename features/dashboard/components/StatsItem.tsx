import { Award, BookOpen, Clock, TrendingUp } from "lucide-react";
import React from "react";

const iconMap = {
  "book-open": BookOpen,
  award: Award,
  clock: Clock,
  trending: TrendingUp,
} as const;

type StatsItemProps = {
  title: string;
  number: string;
  icon: keyof typeof iconMap;
};

function StatsItem({ title, number, icon }: StatsItemProps) {
  const IconComponent = iconMap[icon];

  return (
    <div className="border-2 dark:bg-slate-900 rounded-2xl flex justify-between items-center p-5 ">
      <div className="flex flex-col gap-3">
        <div className="text-lg">{title}</div>
        <div className="text-4xl">{number}</div>
      </div>
      <div className="bg-primary/10  p-5 rounded-full">
        {IconComponent  && <IconComponent className="w-6 h-6 text-primary " />}
      </div>
    </div>
  );
}

export default StatsItem;
