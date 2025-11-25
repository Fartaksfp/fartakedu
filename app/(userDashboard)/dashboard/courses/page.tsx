import CourseCard from "@/features/courses/components/CourseCard";
import { courseType } from "@/features/courses/types/course";
import { getCourses } from "@/hooks/course/getCourses";
import React from "react";

async function page() {
  const res = await getCourses();
  if (res.status >= 400){
    return <div>خطا در دریافت اطلاعات</div>
  } 
  const courses = res.coursesdata;

  return (
    <div className="container mx-auto px-4">
      {/* <div className="mb-8">
        <SearchBar />
      </div> */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* <div className="lg:order-2">
          <Sidebar />
        </div> */}
        <div className="flex-1 lg:order-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course: courseType, index: number) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
