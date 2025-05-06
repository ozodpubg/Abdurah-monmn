import React from "react";
import { categories } from "../utils/constant"; // EHTIYOT BO'LING: to'g'ri yo'lni tekshiring

export default function Sidebar({ selectedCategory, setSelectedCategory }) {
  return (
    <div className="h-[90vh] min-w-60 p-4 flex flex-col max-h-[100px] scrollbar-width-1 scrollbar-thin lg:max-h-max overflow-y-auto">
      {categories.map((category) => (
        <button
          key={category.name}
          onClick={() => setSelectedCategory(category.name)}
          className={`${
            selectedCategory === category.name ? "bg-cherry" : "bg-transparent"
          } group px-6 py-2 rounded-md w-full flex items-center gap-4 transition-colors duration-300`}
        >
          <div
            className={`${
              selectedCategory === category.name ? "text-white" : "text-cherry"
            } text-2xl`}
          >
            {category.icon}
          </div>
          <span
            className={`${
              selectedCategory === category.name
                ? "text-white"
                : "text-gray-100"
            } text-sm font-semibold`}
          >
            {category.name}
          </span>
        </button>
      ))}
      <p className="px-6 hidden lg:block">Abdurahmon</p>
    </div>
  );
}
