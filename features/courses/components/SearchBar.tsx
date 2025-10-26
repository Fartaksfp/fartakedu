import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

function SearchBar() {
  return (
    <div className="relative w-full">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
      <Input
        type="text"
        placeholder="جستجو در دوره‌ها..."
        className="pl-10 pr-4"
      />
    </div>
  );
}

export default SearchBar;