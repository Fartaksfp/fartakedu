import React from "react";
import CourseCard from "@/features/courses/components/CourseCard";
import SearchBar from "@/features/courses/components/SearchBar";
import Sidebar from "@/features/courses/components/Sidebar";
import getCourses from "@/hooks/courses/getCourses";

function Page() {

  const courses = getCourses()

  return (
    <div className="container mx-auto py-30 px-4">
      <div className="mb-8">
        <SearchBar />
      </div>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:order-2">
          <Sidebar />
        </div>
        <div className="flex-1 lg:order-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;