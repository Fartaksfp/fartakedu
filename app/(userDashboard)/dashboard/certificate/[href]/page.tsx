import Certificate from "@/components/certificate/Certificate";
import { getCourse } from "@/data-layer/course/getCourse";
import { getUser } from "@/data-layer/user/getUser";
import { getUserCourses } from "@/data-layer/user/getUserCourses";
import React from "react";

export default async function page({
  params,
}: {
  params: Promise<{ href: string }>;
}) {
  const { href } = await params;
  const course = await getCourse(href);
  const user = await getUser();
  const userCourses = await getUserCourses();

  //   console.log(course);
  //   console.log(userCourses);
  const courseid = course.coursesdata.id;

  for (let i = 0; i < userCourses.length; i++) {
    const userCourse = userCourses[i];

    if (userCourse.courses.id === courseid) {
      return <Certificate user={user} course={course.coursesdata} />;
    }
  }

  return <div>شما مجوز لازم برای گواهینامه این دوره را ندارید.</div>;
}
