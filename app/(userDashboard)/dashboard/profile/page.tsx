"use client";
import { useEffect, useState } from "react";
import UserForm from "@/features/dashboard/profile/UserForm";
import UserInfo from "@/features/dashboard/profile/UserInfo";
import { getUser } from "@/data-layer/user/getUser";
import { UserInfoPayload } from "@/types/userInfo";
import SkeletonForm from "@/features/dashboard/profile/SkeletonForm";

export default function Page() {
  const [user, setUser] = useState<UserInfoPayload | null>(null);

  const fetchUserData = async () => {
    const data = await getUser();
    setUser(data);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  if (!user) return <SkeletonForm />;

  return !user.first_name ? (
    <>
      <UserForm refresh={fetchUserData} />
    </>
  ) : (
    <>
      <UserInfo data={user} />
    </>
  );
}
