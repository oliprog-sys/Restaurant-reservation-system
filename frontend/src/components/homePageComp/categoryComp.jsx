// components/CategoryFilter.jsx
function CategoryFilter() {
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
    <div className="flex justify-center gap-3 py-6 mt-10">
      {categories.map((cat, index) => (
        <button
          key={index}
          className={`px-6 py-3 rounded-full text-sm font-semibold ${
            index === 0
              ? "bg-green-600 text-white"
              : "bg-white text-gray-600"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;