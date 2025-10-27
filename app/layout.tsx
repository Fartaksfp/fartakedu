import "./globals.css";
import { ThemeProvider } from "next-themes";
import AuthProviders from "@/providers/AuthProviders";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" suppressHydrationWarning>
      <body>
        <AuthProviders>
          <ThemeProvider attribute={"class"} defaultTheme="light">
            {children}
          </ThemeProvider>
        </AuthProviders>
      </body>
    </html>
  );
}
