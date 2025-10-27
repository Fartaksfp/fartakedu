import { CalendarDays } from "lucide-react";
import React from "react";

type NewsCardProps = {
  title: string;
  excerpt: string;
  date: string;
  category: string;
};

function NewsCard({ title, excerpt, date, category }: NewsCardProps) {
  return (
    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
        <span className="bg-primary/10 text-primary px-2 py-1 rounded">
          {category}
        </span>
        <div className="flex items-center gap-1">
          <CalendarDays className="w-4 h-4" />
          <span>{date}</span>
        </div>
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{excerpt}</p>
    </div>
  );
}

export default NewsCard;