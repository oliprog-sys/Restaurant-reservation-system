import { PopularCard } from "./PoplarResCard";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

function Popular() {
  return (
    <section className="px-10 py-10">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold mb-6">Editor's Choice</h2>
        <div className="flex gap-2">
          <button className="w-8 h-8 flex items-center justify-center border border-red-100 rounded-full hover:bg-red-50 transition">
            <HiChevronLeft />
          </button>

          <button className="w-8 h-8 flex items-center justify-center border border-red-100 rounded-full hover:bg-red-50 transition">
            <HiChevronRight />
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <PopularCard
          image="/src/assets/main1.png"
          name="L'Artiste Brasserie"
          location="Addis Ababa"
          cusineType="French"
          status="Trending"
        />
        <PopularCard
          image="/src/assets/main2.png"
          name="Zen Garden Sushi"
          location="Addis Ababa"
          cusineType="Japanese"
          status="New entry"
        />
        <PopularCard
          image="/src/assets/drink1.png"
          name="The Fire Hearth"
          location="Addis Ababa"
          cusineType="Italian"
          status="5.0 star rated"
        />
      </div>
    </section>
  );
}

export default Popular;
