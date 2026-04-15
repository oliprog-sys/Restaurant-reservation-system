import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

function RestaurantCard({ image, name, description, rating }) {
  return (
    <div className="group bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover group-hover:scale-105 transition duration-300"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>

        <div className="absolute top-3 right-3 bg-white/90 text-green-600 text-xs font-bold px-2 py-1 w-8 h-8 flex items-center justify-center rounded-full">
          <FaRegHeart size={20} />
        </div>
      </div>

      <div className="p-4 flex flex-col flex-1">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg">{name}</h3>
            <span className="bg-green-500/10 text-green-500 px-1 py-[0.04rem] rounded-lg flex items-center gap-1 text-md font-bold">
              <FaStar /> {rating}
            </span>
          </div>

          <p className="text-gray-500 text-sm mt-1">{description}</p>
        </div>

        <div className="mt-auto pt-4">
          <button className="w-full bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-green-200 hover:text-green-600 transition">
            Book Table
          </button>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCard;
