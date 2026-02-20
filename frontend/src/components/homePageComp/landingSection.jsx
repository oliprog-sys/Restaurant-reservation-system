import CategoryFilter from "./categoryComp";

function Landing() {
  return (
    <section className="bg-green-50 py-20 text-center">
      <h1 className="text-5xl font-bold text-gray-800">
        Find your table for <span className="text-green-600">any occasion.</span>
      </h1>

      <p className="text-gray-500 mt-4">
        Discover the best dining experiences near you.
      </p>

      <div className="flex justify-center mt-8">
        <div className="flex bg-white shadow-md rounded-xl p-3 gap-4 w-3/4">
          <input
            type="text"
            placeholder="Where are you going?"
            className="flex-1 outline-none px-3"
          />
          <input
            type="text"
            placeholder="Italian, Sushi..."
            className="flex-1 outline-none px-3"
          />
          <input
            type="datetime-local"
            placeholder="Select Date & Time"
            className="flex-1 outline-none px-3"
          />
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg">
            Search
          </button>
        </div>
      </div>

      <CategoryFilter />
    </section>
  );
}

export default Landing;