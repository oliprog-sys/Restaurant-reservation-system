function Footer() {
  return (
    <footer className="bg-green-900 text-white px-10 py-10 mt-10">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold text-lg">BookN'Dine</h3>
          <p className="text-sm mt-3 text-gray-300">
            Making dining experiences effortless.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Discover</h4>
          <ul className="text-sm space-y-2 text-gray-300">
            <li>Nearby Restaurants</li>
            <li>Top Rated</li>
            <li>Cuisines</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">For Restaurants</h4>
          <ul className="text-sm space-y-2 text-gray-300">
            <li>Join Network</li>
            <li>Marketing Tools</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Get Notified</h4>
          <input
            type="email"
            placeholder="Your email"
            className="bg-white p-2 rounded-md text-black w-full"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;