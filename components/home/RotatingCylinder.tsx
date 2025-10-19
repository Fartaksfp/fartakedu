"use client";
import React, { useEffect, useState } from "react";

const courses = [
  "پرامپت نویسی",
  "امور مالیاتی",
  "فروش برنده",
  "مدیریت پروژه",
  "ارزیابی ایده و محصول",
  "قوانین بیمه",
  "کمپین بازاریابی",
  "روانشناسی فروش",
];

function RotatingCylinder() {
  const [courseIndex, setCourseIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(courses[0].length * 17);

  useEffect(() => {
    const interval = setInterval(() => {
      setCourseIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % courses.length;
        setItemWidth(courses[nextIndex].length * 17);
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="overflow-hidden h-[3rem] flex mx-2 -mt-1 transition-all duration-700 items-start justify-center"
      style={{ width: itemWidth + 'px' }}
    >
      <div
        className="transition-transform duration-700 ease-in-out"
        style={{ transform: `translateY(-${courseIndex * 3}rem)` }}
      >
        {courses.map((course, i) => (
          <div
            key={i}
            className="h-[3rem] whitespace-nowrap flex items-center justify-center text-yellow-400 text-3xl font-bold"
          >
            {course}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RotatingCylinder;
