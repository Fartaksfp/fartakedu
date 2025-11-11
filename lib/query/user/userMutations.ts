import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UserInfoPayload } from "@/types/userInfo";

export function useAddUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newUser: UserInfoPayload) => {
      const res = await fetch("/api/user-info", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });
      if (!res.ok) throw new Error("Error On Add User");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
}
