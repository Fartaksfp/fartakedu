import { courseType } from "@/features/courses/types/course";

export type cartType = {
  uuid: string;
  courses: courseType[];
  total: number;
  status: "pending" | "paid";
};
