import React from 'react'
import { Metadata } from "next";
import StatsItem from '@/features/dashboard/components/StatsItem';
import DashboardCourseCard from '@/features/dashboard/components/DashboardCourseCard';
import NewsCard from '@/features/dashboard/components/NewsCard';

export const metadata: Metadata = {
  title: "فرتاک آکادمی | داشبورد",
  description:
    "در فرتاک آکادمی به بهترین دوره‌های آنلاین دسترسی پیدا کنید و مهارت‌های خود را در حوزه‌های مختلف ارتقا دهید.",
}

const statsInfo = [
  {
    title:'دوره های شما',
    number:'4',
    icon:'book-open'
  },
  {
    title:'دوره های تکمیل شده',
    number:'2',
    icon:'award'
  },
  {
    title:'ساعات مطالعه',
    number:'12',
    icon:'clock'
  },
  {
    title:'پیشرفت کلی',
    number:'45%',
    icon:'trending'
  },
] as const

const inProgressCourses = [
  {
    title: "دوره پرامپت نویسی در هوش مصنوعی",
    progress: 65,
    duration: "8 ساعت",
    thumbnail: "/images/courses/prompt.jpg"
  },
  {
    title: "اعتبارسنجی ایده و محصول",
    progress: 30,
    duration: "8 ساعت",
    thumbnail: "/images/courses/product-valuation.jpg"
  },
  {
    title: "فروش برنده در شرایط اقتصادی",
    progress: 45,
    duration: "8 ساعت",
    thumbnail: "/images/courses/best-saler.jpg"
  }
];

const latestNews = [
  {
    title: "برگزاری دوره جدید فروش برنده در شرایط اقتصادی",
    excerpt: "به زودی دوره جدید فروش برنده در شرایط اقتصادی با تدریس اساتید مجرب برگزار خواهد شد.",
    date: "1402/08/05",
    category: "دوره‌های جدید"
  },
  {
    title: "بروزرسانی پلتفرم آموزشی",
    excerpt: "ویژگی‌های جدید به پلتفرم آموزشی اضافه شد.",
    date: "1402/08/03",
    category: "اخبار پلتفرم"
  }
];

function page() {
  return (
    <div className='flex flex-col gap-8'>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
        {statsInfo.map((stats,index) => <StatsItem key={index} title={stats.title} number={stats.number} icon={stats.icon} /> )}
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">دوره‌های در حال یادگیری</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {inProgressCourses.map((course, index) => (
            <DashboardCourseCard
              key={index}
              title={course.title}
              progress={course.progress}
              duration={course.duration}
              thumbnail={course.thumbnail}
            />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">آخرین اخبار و اطلاعیه‌ها</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {latestNews.map((news, index) => (
            <NewsCard
              key={index}
              title={news.title}
              excerpt={news.excerpt}
              date={news.date}
              category={news.category}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default page
