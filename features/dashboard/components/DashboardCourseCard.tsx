import { BookOpen, Clock } from "lucide-react";
import Image from "next/image";
import React from "react";

type DashboardCourseCardProps = {
  title: string;
  progress: number;
  duration: string;
  thumbnail: string;
};

function DashboardCourseCard({
  title,
  progress,
  duration,
  thumbnail,
}: DashboardCourseCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="relative h-90">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/100 to-transparent py-20 px-4">
        </div>
          <h3 className="text-white font-semibold absolute bottom-4 right-4">{title}</h3>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 -mt-1" />
            <span className="text-md">{duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 -mt-1" />
            <span className="text-md">{progress}% تکمیل شده</span>
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-primary h-2 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCourseCard;