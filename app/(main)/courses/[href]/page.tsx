import React, { Suspense } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Clock, Users, BookOpen, User, CalendarRange } from "lucide-react";
import { getCourse } from "@/data-layer/course/getCourse";
import { notFound } from "next/navigation";
import Link from "next/link";
import { toShamsi } from "@/helper/toShamsi";

async function page({ params }: { params: Promise<{ href: string }> }) {
  const { href } = await params;

  const data = await getCourse(href);

  if (data?.status === 404) {
    notFound();
  } else {
    const course = await data?.coursesdata;
    const courseDate = toShamsi(course.created_at);
    return (
      <div className="container mx-auto px-4 sm:px-6 py-10">
        <Suspense
          fallback={
            <div className="flex items-center justify-center min-h-[60vh]">
              <p className="text-xl">در حال بارگذاری...</p>
            </div>
          }
        >
          <div className="grid mt-10 grid-cols-1 border-2 dark:border-gray-500 gap-6 rounded-xl shadow-lg p-4 lg:grid-cols-3 lg:gap-8 lg:p-6">
            <div className="lg:col-span-1 h-90 sm:h-110 relative w-full rounded-xl overflow-hidden">
              <Image
                src={course.image}
                alt={course.title + " تصویر"}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="lg:col-span-2 flex flex-col justify-between space-y-4">
              <h1 className="text-2xl sm:text-3xl font-bold">{course.title}</h1>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {course.description}
              </p>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <div className="p-3 rounded-full bg-primary/10">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <div className="mr-3">
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      استاد
                    </p>
                    <p className="font-medium text-sm sm:text-base">
                      {course.teacher}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div className="mr-3">
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      مدت دوره
                    </p>
                    <p className="font-medium text-sm sm:text-base">
                      {course.duration} ساعت
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div className="mr-3">
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      تعداد دانشجویان
                    </p>
                    <p className="font-medium text-sm sm:text-base">
                      {course.students} نفر
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <div className="p-3 rounded-full bg-primary/10">
                    <CalendarRange className="w-5 h-5 text-primary" />
                  </div>
                  <div className="mr-3">
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      تاریخ برگزاری
                    </p>
                    <p className="font-medium text-sm sm:text-base">
                      {courseDate}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <div className="mr-3">
                  <p className="text-lg sm:text-xl text-muted-foreground">
                    قیمت دوره
                  </p>
                  <p className="font-medium text-lg sm:text-xl">
                    {course.price.toLocaleString()} تومان
                  </p>
                  {course.status === "soon" && <p>تخفیف ویژه مخصوص شرکت ها در سبد خرید اعمال میگردد</p>}
                </div>
              </div>
              <div className="pt-4">
                <Link href={`/dashboard/courses/${course.href}`}>
                  <Button size="lg" className="w-full sm:w-auto">
                    ثبت نام در دوره
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Suspense>
      </div>
    );
  }
}

export default page;
