import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Bounce, ToastContainer } from 'react-toastify';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute={"class"} defaultTheme="light">
          {children}
        </ThemeProvider>
        <ToastContainer
          position="top-center"
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
