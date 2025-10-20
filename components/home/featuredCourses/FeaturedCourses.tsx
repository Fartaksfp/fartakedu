import CourseCard from "@/components/shared/CourseCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const courses = [
  {
    name: "پرامپت نویسی در هوش مصنوعی",
    description:
      "آموزش نحوه نوشتن پرامپت‌های حرفه‌ای برای ابزارهایی مثل ChatGPT و Midjourney.",
    duration: 8, // ساعت
    students: 18,
    price: 890000, // تومان
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

function FeaturedCourses() {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex flex-col items-center">
        <h1>دوره های محبوب</h1>
        <p className="text-center">
          محبوب ترین دوره هایی که توسط متخصصان صنعت برگزار شده اند.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
        {courses.map((course, index) => (
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
