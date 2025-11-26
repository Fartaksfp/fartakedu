export async function getCart(user_id: string | undefined) {
  const res = await fetch(`/api/cart?user_id=${user_id}`);  
  if (!res.ok) throw new Error("Error fetching user info");

  const data = await res.json();
  return data;
}
