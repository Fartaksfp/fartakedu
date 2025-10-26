
import Benefits from "@/features/home/components/benefits/Benefits";
import LastCta from "@/features/home/components/cta/LastCta";
import FeaturedCourses from "@/features/home/components/featuredCourses/FeaturedCourses";
import Hero from "@/features/home/components/hero/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "فرتاک آکادمی | آموزش آنلاین مهارت‌های روز",
  description:
    "در فرتاک آکادمی به بهترین دوره‌های آنلاین دسترسی پیدا کنید و مهارت‌های خود را در حوزه‌های مختلف ارتقا دهید.",
  keywords: [
    "فرتاک آکادمی",
    "دوره آنلاین",
    "آموزش آنلاین",
    "مهارت‌های دیجیتال",
  ],
  authors: [{ name: "فرتاک آکادمی" }],
  openGraph: {
    title: "فرتاک آکادمی | آموزش آنلاین مهارت‌های روز",
    description:
      "در فرتاک آکادمی به بهترین دوره‌های آنلاین دسترسی پیدا کنید و مهارت‌های خود را در حوزه‌های مختلف ارتقا دهید.",
    url: "https://academy.fartaksfp.com",
    siteName: "فرتاک آکادمی",
    images: [
      {
        url: "https://academy.fartaksfp.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "فرتاک آکادمی - آموزش آنلاین",
      },
    ],
    locale: "fa_IR",
    type: "website",
  },
};

function Home() {
  return (
    <main className="flex flex-col gap-10">
      <section className="h-dvh">
        <Hero />
      </section>
      <section className="w-[90%] sm:w-4/5 flex justify-center mx-auto">
        <Benefits />
      </section>
      <section className="w-[90%] sm:w-4/5 flex justify-center mx-auto">
        <FeaturedCourses />
      </section>
      <section className="w-full transition-all duration-300 dark:bg-green-800 bg-primary flex justify-center mx-auto">
        <LastCta />
      </section>
    </main>
  );
}

export default Home;
