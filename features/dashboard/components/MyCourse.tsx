"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { getCourseLisence } from "@/data-layer/course/getCourseLisence";
import { UserCourse } from "@/data-layer/user/getUserCourses";
import { Clock, Copy, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function MyCourse({ item }: { item: UserCourse }) {
  const [popupForLisence, setPopupForLisence] = useState(false);
  const [license, setLicense] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const getLisence = async () => {
    try {
      setLoading(true);
      const result = await getCourseLisence(item.courses.spot_license);

      if (result && result.key) {
        setLicense(result.key);
        setPopupForLisence(true);
      } else {
        alert("خطا در دریافت لایسنس");
      }
    } catch (err) {
      console.error(err);
      alert("مشکلی پیش آمده است");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    if (!license) return;

    try {
      await navigator.clipboard.writeText(license);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

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
          <h2 className="text-lg font-semibold">
            {item.courses.title}
          </h2>
        </div>
      </Link>

      <div className="flex-1/3 w-[70%] md:w-auto flex flex-col md:flex-row gap-5">
        <div className="text-md flex justify-between md:justify-center w-full gap-2 items-center font-bold text-gray-600">
          <div className="bg-green-800 text-white p-3 rounded-full">
            <User />
          </div>
          مدرس: {item.courses.teacher}
        </div>

        <div className="text-md flex w-full justify-between md:justify-center gap-2 items-center font-bold text-gray-600">
          <div className="bg-green-800 text-white p-3 rounded-full">
            <Clock />
          </div>
          مدت دوره: {item.courses.duration} ساعت
        </div>
      </div>

      <div className="flex gap-5">
        <Link href={`/dashboard/certificate/${item.courses.href}`}>
          <Button>دریافت گواهینامه</Button>
        </Link>

        <Dialog open={popupForLisence} onOpenChange={setPopupForLisence}>
          <>
            <DialogTrigger asChild>
              <Button
                onClick={getLisence}
                disabled={loading}
              >
                {loading ? "در حال دریافت..." : "دریافت لایسنس"}
              </Button>
            </DialogTrigger>

            <DialogContent>
              <DialogTitle className="mr-5">
                کد لایسنس شما
              </DialogTitle>

              <textarea
                value={license}
                readOnly
                className="w-full border rounded-md p-2 text-sm mt-4"
                style={{ height: "100px" }}
              />

              <Button
                onClick={handleCopy}
                className="mt-4 gap-2"
                disabled={!license}
              >
                {copied ? "کپی شد" : "کپی"}
                <Copy size={16} />
              </Button>
            </DialogContent>
          </>
        </Dialog>
      </div>
    </div>
  );
}
