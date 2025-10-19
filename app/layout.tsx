import type { Metadata } from "next";
import "./globals.css";
import MainHeader from "@/components/header/MainHeader";
import { ThemeProvider } from "next-themes";

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
    <html lang="fa" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute={'class'} >
          <MainHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
