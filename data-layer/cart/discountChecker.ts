import { supabase } from "@/utils/supabase/client";

export async function discountChecker(code: string) {
  const { data, error } = await supabase
    .from("discount")
    .select("*")
    .eq("name", code)
    .single();

  if (error || !data) {
    return {
      valid: false,
      message: "not valid",
    };
  }

  return {
    valid: true,
    discount: data,
  };
}
