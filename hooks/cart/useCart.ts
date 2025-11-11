import { useQuery } from "@tanstack/react-query";

export function useCart(user_id: string | undefined) {

    return useQuery({
        queryKey: ["cart", user_id],
        queryFn: async () => {
            if (!user_id) throw new Error("No user_id provided");

            const res = await fetch(`/api/cart?user_id=${user_id}`);
            if (!res.ok) throw new Error("Error fetching user info");

            const data = await res.json();
            return data;
        },
        enabled: !!user_id,
        staleTime: 1000 * 60,
    });
}
