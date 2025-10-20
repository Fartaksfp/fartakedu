import CourseType from "@/types/course";
import { ChevronLeft, Clock, Users } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

function CourseCard({ course }: { course: CourseType }) {
  return (
    <div className="rounded-t-3xl shadow-lg overflow-hidden">
      <div className="w-full aspect-[4/3] relative">
        <Image
          src={course.image}
          alt={course.name}
          fill
          className="object-cover object-top-left"
        />
      </div>
      <div className="p-4 sm:p-6 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold truncate">{course.name}</h3>
          <p className="text-xs line-clamp-2 sm:line-clamp-none">{course.description}</p>
        </div>
        <div className="hidden sm:flex flex-col sm:flex-row w-full">
          <div className="flex flex-1 gap-2 items-center">
            <Users size={18} />
            {course.students} دانشجو
          </div>
          <div className="flex flex-1 gap-2 items-center">
            <Clock size={18} />
            {course.duration} ساعت
          </div>
        </div>
        <div className="flex w-full justify-between items-center">
          <div className="flex flex-col sm:flex-row gap-3 w-full pt-4 sm:py-4 justify-between items-center border-t border-gray-200">
            <div className="text-md text-primary font-semibold truncate">
              {course.price.toLocaleString()} تومان
            </div>
            <Button>
              ثبت نام
              <ChevronLeft />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
