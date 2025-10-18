import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="fa">
      <body>
        {children}
      </body>
    </html>
  );
}
