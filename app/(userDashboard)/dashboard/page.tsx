import React from "react";
import { Metadata } from "next";
import StatsItem from "@/features/dashboard/components/StatsItem";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "فرتاک آکادمی | داشبورد",
  description:
    "در فرتاک آکادمی به بهترین دوره‌های آنلاین دسترسی پیدا کنید و مهارت‌های خود را در حوزه‌های مختلف ارتقا دهید.",
};

const statsInfo = [
  {
    title: "دوره های شما",
    number: "0",
    icon: "book-open",
  },
  {
    title: "دوره های تکمیل شده",
    number: "0",
    icon: "award",
  },
  {
    title: "ساعات مطالعه",
    number: "0",
    icon: "clock",
  },
  {
    title: "پیشرفت کلی",
    number: "0%",
    icon: "trending",
  },
] as const;

function page() {
  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {statsInfo.map((stats, index) => (
          <StatsItem
            key={index}
            title={stats.title}
            number={stats.number}
            icon={stats.icon}
          />
        ))}
      </div>
      <Link href="/dashboard/courses">
        <Button>مشاهده دوره‌ها</Button>
      </Link>
    </div>
  );
}

export default page;
