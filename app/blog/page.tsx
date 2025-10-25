import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const posts = [
  {
    id: 1,
    title: "هوش مصنوعی و آینده کسب‌وکارها",
    excerpt: "چطور هوش مصنوعی می‌تواند عملیات کسب‌وکار شما را بهبود دهد و بهره‌وری را افزایش دهد.",
    date: "1404-7-25",
    category: "هوش مصنوعی",
    image: "/images/blog/ai-blog.jpg",
  },
  {
    id: 2,
    title: "تکنیک‌های فروش موفق در سال 2025",
    excerpt: "بهترین استراتژی‌ها و روش‌های افزایش فروش در بازار رقابتی امروز.",
    date: "1404-7-20",
    category: "فروش",
    image: "/images/blog/sale-blog.jpg",
  },
  {
    id: 3,
    title: "اصول مالیات برای کسب‌وکارهای کوچک",
    excerpt: "راهنمایی ساده و کاربردی برای مدیریت مالیات و کاهش ریسک‌ها.",
    date: "1404-7-10",
    category: "مالیات",
    image: "/images/blog/tax-blog.jpg",
  },
];

function page() {
  return (
    <main className="container mx-auto pt-30 px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">آرشیو بلاگ</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(post => (
          <div key={post.id} className="bg-white dark:bg-slate-950 rounded-lg shadow hover:shadow-xl transition overflow-hidden">
            <Image src={post.image} width={200} height={200} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <span className="text-sm text-blue-600 font-medium">{post.category}</span>
              <h3 className="text-xl font-semibold mt-2 mb-3">{post.title}</h3>
              <p className="text-gray-600 dark:text-white mb-4">{post.excerpt}</p>
              <p className="text-gray-400 text-sm">{post.date}</p>
              <Link href="#" className="mt-4 inline-block text-blue-600">
              <Button>ادامه مطلب <ChevronLeft className="-mt-0.5"/></Button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center gap-4">
        <Button>قبلی</Button>
        <Button>بعدی</Button>
      </div>
    </main>
  );
}

export default page