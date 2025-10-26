import React from "react";
import CourseCard from "@/features/courses/components/CourseCard";
import SearchBar from "@/features/courses/components/SearchBar";
import Sidebar from "@/features/courses/components/Sidebar";

const courses = [
  {
    name: "پرامپت نویسی در هوش مصنوعی",
    description:
      "آموزش نحوه نوشتن پرامپت‌های حرفه‌ای برای ابزارهایی مثل ChatGPT و Midjourney.",
    duration: 8,
    students: 18,
    price: 890000,
    image: "/images/courses/prompt.jpg",
  },
  {
    name: "مدل کسب و کار",
    description:
      "آشنایی با طراحی مدل کسب‌وکار و اجزای کلیدی آن برای راه‌اندازی استارتاپ‌ها و شرکت‌ها.",
    duration: 8,
    students: 20,
    price: 750000,
    image: "/images/courses/business-modeling.jpg",
  },
  {
    name: "اعتبارسنجی ایده و محصول",
    description:
      "یادگیری روش‌های علمی و عملی برای ارزیابی، اعتبارسنجی و تست ایده‌های استارتاپی.",
    duration: 8,
    students: 13,
    price: 970000,
    image: "/images/courses/product-valuation.jpg",
  },
  {
    name: "فروش برنده در شرایط اقتصادی",
    description:
      "یادگیری تکنیک‌های فروش حرفه‌ای و مذاکره در شرایط اقتصادی چالشی و رقابتی.",
    duration: 8,
    students: 22,
    price: 820000,
    image: "/images/courses/best-saler.jpg",
  },
];

function Page() {
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