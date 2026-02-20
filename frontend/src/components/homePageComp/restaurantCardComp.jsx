function RestaurantCard({ image, name, description, rating }) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition">
      <img src={image} alt={name} className="h-48 w-full object-cover" />

      <div className="p-4">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-gray-500 text-sm mt-1">{description}</p>

        <div className="flex justify-between items-center mt-3">
          <span className="text-green-600 font-semibold">{rating} ⭐</span>
          <button className="text-green-600 text-sm font-medium">
            Book Table
          </button>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCard;