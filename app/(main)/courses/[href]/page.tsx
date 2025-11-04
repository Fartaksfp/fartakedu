import React, { Suspense } from "react";
import getCourse from "@/hooks/courses/getCourse";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Clock, Users, BookOpen } from "lucide-react";

async function page({ params }: { params: Promise<{ href: string }> }) {
  const { href } = await params;
  const course = getCourse(href);

  return (
    <div className="container mx-auto py-30">
      <Suspense fallback={<div className="flex items-center justify-center min-h-[60vh]"><p className="text-xl">در حال بارگذاری...</p></div>}>
        <div className="grid grid-cols-1 h-100 lg:grid-cols-3 gap-8 rounded-xl p-6 shadow-lg">
          <div className="lg:col-span-1">
            <div className="relative h-full w-full overflow-hidden rounded-lg">
              <Image 
                src={course.image} 
                alt={course.name + " تصویر"} 
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col justify-between space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-4">{course.name}</h1>
              <p className="text-muted-foreground leading-relaxed">{course.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                  <p className="text-sm text-muted-foreground">تعداد دانشجویان</p>
                  <p className="font-medium">{course.students} نفر</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <div className="p-3 rounded-full bg-primary/10">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <div className="mr-5">
                  <p className="text-sm text-muted-foreground">قیمت دوره</p>
                  <p className="font-medium">{course.price} تومان</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Button size="lg" className="w-full sm:w-auto">
                ثبت نام در دوره
              </Button>
            </div>
          </div>
        </div>
      </Suspense>
    </div>
  );
}

export default page;
