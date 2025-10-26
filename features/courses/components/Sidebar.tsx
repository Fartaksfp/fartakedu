import { Button } from "@/components/ui/button";
import React from "react";

const categories = [
  { id: 1, name: "برنامه‌نویسی" },
  { id: 2, name: "هوش مصنوعی" },
  { id: 3, name: "کسب و کار" },
  { id: 4, name: "بازاریابی و فروش" },
  { id: 5, name: "مهارت‌های نرم" },
];

function Sidebar() {
  return (
    <div className="w-full lg:w-64 p-4 bg-gray-50 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">دسته‌بندی‌ها</h3>
      <div className="flex flex-col gap-2">
        <Button
          variant="default"
          className="justify-start w-full"
        >
          همه دوره‌ها
        </Button>
        {categories.map((category) => (
          <Button
            key={category.id}
            variant="ghost"
            className="justify-start w-full"
          >
            {category.name}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;