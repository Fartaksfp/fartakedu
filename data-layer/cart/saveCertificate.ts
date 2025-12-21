import { supabase } from "@/utils/supabase/client";

type SaveCertificateParams = {
  course_id: string;
  user_id: string;
};

export async function saveCertificate({
  course_id,
  user_id,
}: SaveCertificateParams): Promise<string> {
  const { data: existingCertificate, error: fetchError } = await supabase
    .from("certificates")
    .select("certificate_id")
    .eq("course_id", course_id)
    .eq("user_id", user_id)
    .single();

  if (existingCertificate) {
    return existingCertificate.certificate_id;
  }

  if (fetchError && fetchError.code !== "PGRST116") {
    throw fetchError;
  }

  const { data: newCertificate, error: insertError } = await supabase
    .from("certificates")
    .insert({
      course_id,
      user_id,
    })
    .select("certificate_id")
    .single();

  if (insertError) {
    throw insertError;
  }

  return newCertificate.certificate_id;
}
