import DashbardHeader from "@/features/dashboard/header/DashbardHeader";
import DashboardSidebar from "@/features/dashboard/sidebar/DashboardSidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <DashbardHeader />
      <DashboardSidebar />
      <div className="px-10 pb-10 mx-auto pt-22 md:mr-52">{children}</div>
    </>
  );
}
