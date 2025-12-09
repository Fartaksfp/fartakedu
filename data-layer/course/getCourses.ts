import { supabase } from "@/utils/supabase/client";

export async function getCourses(limit?: number) {
  const { data, error } = await supabase.rpc(
    "get_all_courses",
    limit ? { p_limit: limit } : {},
  );

  if (error) {
    return { error: error.message, status: 500 };
  }

  return {
    coursesdata: data ?? [],
    status: 200,
  };
}
