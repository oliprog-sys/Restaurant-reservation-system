import { useState } from "react";
import start1 from "/src/assets/starter1.png";
import start2 from "/src/assets/starters2.png";
import main1 from "/src/assets/main1.png";
import main2 from "/src/assets/main2.png";
import drink1 from "/src/assets/drink1.png";

const MENU = {
  Starters: [
    { id: 1, name: "Bruschetta", price: "$6.99", image: start1 },
    { id: 2, name: "Garlic Bread", price: "$5.49", image: start2 },
  ],
  Main: [
    { id: 3, name: "Grilled Salmon", price: "$14.99", image: main1 },
    { id: 4, name: "Steak Plate", price: "$18.99", image: main2 },
  ],
  Drinks: [{ id: 5, name: "Fresh Lemonade", price: "$3.99", image: drink1 }],
};

export default function MenuPreview() {
  const [activeCategory, setActiveCategory] = useState("Starters");
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-2">🍽️ Menu Preview</h2>
      <p className="text-gray-600 mb-6">Discover our most loved dishes</p>

      {!showAll && (
        <div className="flex gap-3 mb-8 flex-wrap">
          {Object.keys(MENU).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full border text-sm font-medium ${
                activeCategory === category ? "bg-black text-white" : "bg-white border-amber-500"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {(showAll
          ? Object.keys(MENU).flatMap((category) => MENU[category])
          : MENU[activeCategory]
        ).map((dish) => (
          <div
            key={dish.id}
            className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <img
              src={dish.image}
              alt={dish.name}
              className="h-40 w-full object-cover"
            />
            <div className="p-4 flex justify-between items-center">
              <h3 className="font-semibold">{dish.name}</h3>
              <span className="font-medium">{dish.price}</span>
            </div>
          </div>
        ))}
      </div>

      {!showAll && (
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-3 bg-black text-white rounded-lg"
          >
            View Full Menu
          </button>
        </div>
      )}
    </section>
  );
}
