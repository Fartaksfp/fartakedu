import { getUserCourses } from "@/data-layer/user/getUserCourses";
import MyCourse from "@/features/dashboard/components/MyCourse";

export default async function Page() {
  const userCourses = await getUserCourses();

  return (
    <div className="flex flex-col gap-5 w-full">
      {userCourses.map((item) => (
        <MyCourse key={item.id} item={item} />
      ))}
    </div>
  );
}
