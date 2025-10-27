import DashbardHeader from "@/features/dashboard/header/DashbardHeader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <DashbardHeader />
      <div className="w-[1200px] pt-5 pb-10 mx-auto">

      {children}
      </div>
    </>
  );
}
