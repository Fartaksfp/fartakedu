export interface UserInfoPayload {
  user_id: string;
  first_name: string;
  last_name: string;
  age: number;
  company_name?: string;
  courses_count?: number;
  certificates_count?: number;
  phone?: string;
}