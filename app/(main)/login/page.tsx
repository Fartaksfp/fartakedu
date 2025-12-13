import Login from "@/components/auth/Login";
import { getSession } from "@/data-layer/user/getSession";
import { redirect } from "next/navigation";

async function page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const url = (await searchParams).url;

  const session = await getSession();

  async function redirectToDashboard() {
    'use server'
    if (url) {
      redirect(url);
    }
  }

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="h-dvh flex flex-col gap-5 justify-center items-center">
      <p className="text-center font-bold">ورود یا ثبت نام با شماره موبایل</p>
      <Login redirectToDashboard={redirectToDashboard} />
    </div>
  );
}

export default page;
