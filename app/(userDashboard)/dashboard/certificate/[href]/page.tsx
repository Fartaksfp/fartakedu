import { saveCertificate } from "@/data-layer/cart/saveCertificate";
import { getCourse } from "@/data-layer/course/getCourse";
import { getUser } from "@/data-layer/user/getUser";
import { getUserCourses } from "@/data-layer/user/getUserCourses";
import Certificate from "@/features/dashboard/certificate/Certificate";
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
  const courseid = course.coursesdata.id;
  const certificateId = await saveCertificate({
    course_id: courseid,
    user_id: user.id,
  });

  for (let i = 0; i < userCourses.length; i++) {
    const userCourse = userCourses[i];

    if (userCourse.courses.id === courseid) {
      return (
        <Certificate
          user={user}
          course={course.coursesdata}
          id={certificateId}
        />
      );
    }
  }

  return <div>شما مجوز لازم برای گواهینامه این دوره را ندارید.</div>;
}
