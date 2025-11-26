import { UserInfoPayload } from "@/types/userInfo";

export async function addUser(user: UserInfoPayload) {
  const res = await fetch("/api/user-info", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  if (!res.ok) throw new Error("Error On Add User");
  return res.json();
}
