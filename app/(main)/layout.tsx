import type { Metadata } from "next";
import MainHeader from "@/components/header/MainHeader";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "پنل آموزشی فرتاک سنجش فناوری پیشرو",
  description: "پنل آموزشی مخصوص دانشجویان کارکاه های فرتاک سنجش فناوری پیشرو",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MainHeader />
      {children}
      <Footer />
    </>
  );
}
