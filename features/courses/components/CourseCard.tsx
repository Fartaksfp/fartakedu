import { Button } from "@/components/ui/button";
import { courseType } from "@/features/courses/types/course";
import { ChevronLeft, Clock, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function CourseCard({ course }: { course: courseType }) {
  return (
    <Link href={`courses/${course.href}`}>
      <div className="rounded-t-3xl shadow-lg hover:shadow-2xl overflow-hidden">
        <div className="w-full aspect-[4/4] relative">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover object-top-left"
          />
        </div>
        <div className="p-4 sm:p-6 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold truncate">{course.title}</h3>
            <p className="text-xs line-clamp-2">
              {course.description}
            </p>
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
            <div className="flex sm:flex-row gap-3 w-full pt-4 sm:py-4 justify-between items-center border-t border-gray-200">
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
    </Link>
  );
}

export default CourseCard;
