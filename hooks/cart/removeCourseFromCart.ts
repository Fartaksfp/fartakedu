export async function removeCourseFromCart(cartId: string, courseId: string) {
  const res = fetch("/api/rmcourse", {
    method: "POST",
    headers: {
      Content: "application/json",
    },
    body: JSON.stringify({ cartId: cartId, courseId: courseId }),
  });

  const data = await (await res).json();
  return data;
}
