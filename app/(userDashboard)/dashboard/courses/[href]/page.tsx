import React, { Suspense } from "react";
import Image from "next/image";
import { Clock, Users, User, CalendarRange } from "lucide-react";
import { getCourse } from "@/data-layer/course/getCourse";
import { notFound } from "next/navigation";
import AddToCartButton from "@/features/dashboard/profile/AddToCartButton";
import { toShamsi } from "@/helper/toShamsi";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ href: string }>;
}) {
  const { href } = await params;
  const data = await getCourse(href);
  if (data?.status >= 400) {
    return {
      title: "خطا در دریافت اطلاعات | فرتاک",
    };
  }
  const course = await data?.coursesdata;

  if (data?.status === 404) {
    return {
      title: "دوره یافت نشد | فرتاک",
    };
  } else {
    return {
      title: `${course.title} | فرتاک`,
    };
  }
}

async function page({ params }: { params: Promise<{ href: string }> }) {
  const { href } = await params;

  const data = await getCourse(href);
  if (data?.status >= 400) {
    return <div>خطا در دریافت اطلاعات</div>;
  }
  const course = await data?.coursesdata;
  const courseDate = toShamsi(course.created_at);

  if (data?.status === 404) {
    notFound();
  } else {
    return (
      <div className="container sm:px-6 lg:px-8">
        <Suspense
          fallback={
            <div className="flex items-center justify-center min-h-[60vh]">
              <p className="text-xl">در حال بارگذاری...</p>
            </div>
          }
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 border-2 dark:border-gray-500 rounded-xl shadow-lg py-6 lg:py-10 px-4 lg:px-6">
            <div className="lg:col-span-1">
              <div className="relative w-full h-80 sm:h-80 md:h-96 lg:h-full overflow-hidden rounded-xl">
                <Image
                  src={course.image}
                  alt={course.title + " تصویر"}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-2xl sm:text-3xl font-bold mb-4">
                  {course.title}
                </span>
              </div>

              <div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {course.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <div className="p-3 rounded-full bg-primary/10">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <div className="mr-5">
                    <p className="text-sm text-muted-foreground">استاد</p>
                    <p className="font-medium">{course.teacher}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div className="mr-5">
                    <p className="text-sm text-muted-foreground">مدت دوره</p>
                    <p className="font-medium">{course.duration} ساعت</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div className="mr-5">
                    <p className="text-sm text-muted-foreground">
                      تعداد دانشجویان
                    </p>
                    <p className="font-medium">{course.students} نفر</p>
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

              <div className="flex sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-3 rtl:space-x-reverse mt-4">

                <div className="mr-3 ">
                  <p className="text-lg sm:text-xl text-muted-foreground">
                    قیمت دوره
                  </p>
                  <p className="font-medium text-lg sm:text-xl">
                    {course.price.toLocaleString()} تومان
                  </p>
                  {course.status === "soon" && (
                    <p className="text-sm text-muted-foreground mt-1">
                      تخفیف ویژه مخصوص شرکت ها در سبد خرید اعمال میگردد
                    </p>
                  )}
                </div>
              </div>

              <div className="pt-6">
                <AddToCartButton id={course.id} />
              </div>
            </div>
          </div>
        </Suspense>
      </div>
    );
  }
}

export default page;
