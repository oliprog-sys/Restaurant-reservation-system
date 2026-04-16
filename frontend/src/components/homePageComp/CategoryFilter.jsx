import { useState } from "react";
function CategoryFilter() {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = [
    "All",
    "Italian",
    "Sushi",
    "Mexican",
    "Vegan",
    "French",
    "Steakhouse",
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 py-6 mt-10">
      {categories.map((cat, index) => (
        <button
          key={index}
          onClick={() => setActiveCategory(cat)}
          className={`px-6 py-2 rounded-full text-sm font-semibold ${
            activeCategory === cat
              ? "bg-green-500 text-white"
              : "bg-white text-gray-600 hover:bg-green-400 hover:shadow-md hover:text-white transition duration-300"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
