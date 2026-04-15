import CategoryFilter from "./categoryComp";
import { HiOutlineSearch } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdRestaurant } from "react-icons/io";
import { FaRegCalendar } from "react-icons/fa";

function Landing() {
  return (
    <section className="bg-red-50 py-20 text-center">
      <div className="flex flex-col gap-2 ">
        <h1 className="text-5xl font-bold text-gray-800 tracking-wider">
          Find your table for
        </h1>
        <h1 className="text-5xl font-bold text-green-500">any occasion.</h1>
      </div>

      <p className="text-gray-500 mt-4 max-w-2/4 mx-auto text-lg">
        Discover the best dining experiences near you. From cozy bistros to fine
        dining, book your spot in seconds.
      </p>

      <div className="flex flex-col sm:flex-row flex-wrap justify-center mt-8 gap-4 px-4 max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row flex-1 min-w-0 bg-white shadow-md rounded-xl p-3 gap-4 overflow-hidden">
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <FaLocationDot size={20} className="text-green-500 shrink-0" />
            <input
              type="text"
              placeholder="Where are you going?"
              className="w-full min-w-0 outline-none py-2 border-b sm:border-b-0 sm:border-r border-gray-200"
            />
          </div>

          <div className="flex items-center gap-2 flex-1 min-w-0">
            <IoMdRestaurant size={20} className="text-green-500 shrink-0" />
            <input
              type="text"
              placeholder="Italian, Sushi..."
              className="w-full min-w-0 outline-none py-2 border-b sm:border-b-0 sm:border-r border-gray-200"
            />
          </div>

          <div className="flex items-center gap-2 flex-1 min-w-0">
            <FaRegCalendar size={20} className="text-green-500 shrink-0" />
            <input
              type="datetime-local"
              className="w-full min-w-0 outline-none py-2 text-gray-500"
            />
          </div>

          <button className="flex items-center justify-center gap-2 bg-green-400 text-white font-semibold px-6 py-3 rounded-lg shrink-0 whitespace-nowrap">
            <HiOutlineSearch size={22} />
            Search
          </button>
        </div>
      </div>

      <CategoryFilter />
    </section>
  );
}

export default Landing;
