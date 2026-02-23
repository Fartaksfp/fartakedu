import ClarityInit from "@/components/shared/Clarity";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Bounce, ToastContainer } from "react-toastify";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="0SR8lpb7O025Li7OAw5XAZtpQWkHSLBBxaPBQrCYN58"
        />
      </head>
      <body>
        <ThemeProvider attribute={"class"} defaultTheme="light">
          <ClarityInit />
          {children}
        </ThemeProvider>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Bounce}
        />
      </body>
    </html>
  );
}
