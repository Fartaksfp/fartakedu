import { Button } from "@/components/ui/button";
import { UserCourse } from "@/data-layer/user/getUserCourses";
import { Clock, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function MyCourse({ item }: { item: UserCourse }) {
  return (
    <div
      key={item.id}
      className="flex flex-col md:flex-row items-center w-full justify-between border rounded-lg p-4 shadow-sm gap-5 md:gap-15"
    >
      <Link href={`/dashboard/courses/${item.courses.href}`}>
        <div className="flex flex-col md:flex-row items-center gap-5 flex-1/3">
          <Image
            src={item.courses.thumbnail_url}
            alt={item.courses.title}
            className="object-cover rounded-md mb-3"
            width={200}
            height={200}
          />
          <h2 className="text-lg font-semibold">{item.courses.title}</h2>
        </div>
      </Link>
      <div className="flex-1/3 w-[70%] md:w-auto flex flex-col md:flex-row gap-5">
        <div className="text-md flex justify-between md:justify-center w-full gap-2 items-center font-bold text-gray-600">
          <div className="bg-green-800 text-white p-3 rounded-full">
            <User />
          </div>
          مدرس: {item.courses.teacher}
        </div>
        <div className="text-md flex w-full justify-between md:justify-center gap-2  items-center font-bold text-gray-600">
          <div className="bg-green-800 text-white p-3 rounded-full">
            <Clock />
          </div>
          مدت دوره: {item.courses.duration} ساعت
        </div>
      </div>
      <div className="flex gap-5">
        <Button>دریافت گوهینامه</Button>
        <Button>دریافت لایسنس</Button>
      </div>
    </div>
  );
}
