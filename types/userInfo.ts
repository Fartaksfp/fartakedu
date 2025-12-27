export interface UserInfoPayload {
  user_id: string;
  first_name: string;
  last_name: string;
  first_name_en: string;
  last_name_en: string;
  age: number;
  gender?:string;
  national_code: number;
  company_name?: string;
  company_name_en?: string;
  courses_count?: number;
  certificates_count?: number;
  phone?: string;
  signup_model:string
}
