import { Button } from "@/components/ui/button";
import CourseCard from "@/features/courses/components/CourseCard";
import getCourses from "@/hooks/courses/getCourses";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import { courseType } from "@/features/courses/types/course";

function FeaturedCourses() {

  const courses = getCourses()

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex flex-col items-center">
        <h1>دوره های محبوب</h1>
        <p className="text-center">
          محبوب ترین دوره هایی که توسط متخصصان صنعت برگزار شده اند.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        {courses.map((course: courseType, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
      <div>
        <Link href={'/courses'}>
        <Button variant={"outline"} className="flex items-center gap-2">
          <span>مشاهده تمام دوره ها</span>
          <ArrowLeft />
        </Button>
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;
