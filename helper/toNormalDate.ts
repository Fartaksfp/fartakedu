export function toNormalDate(locale: string, date: string) {
  const d = new Date(date);

  return d.toLocaleDateString(locale === "fa" ? "fa-IR" : "en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
}
