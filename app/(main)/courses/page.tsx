import React from "react";
import CourseCard from "@/features/courses/components/CourseCard";
import SearchBar from "@/features/courses/components/SearchBar";
import Sidebar from "@/features/courses/components/Sidebar";
import { courseType } from "@/features/courses/types/course";
import { Metadata } from "next";
import { getCourses } from "@/hooks/course/getCourses";

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'فرتاک - دوره‌های آموزشی برتر',
  description: 'دوره‌های آنلاین برنامه‌نویسی، طراحی و مهارت‌های فنی با اساتید فرتاک',
  openGraph: {
    title: 'دوره‌های آموزشی فرتاک',
    description: 'یادگیری مهارت‌های جدید با بهترین دوره‌های آموزشی',
    url: 'https://academy.fartaksfp.com/courses',
    siteName: 'فرتاک',
    type: 'website',
  },
}

async function Page() {

  const data = await getCourses()
  const courses = await data!.coursesdata

  return (
    <div className="container mx-auto py-30 px-4">
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

export default Page;