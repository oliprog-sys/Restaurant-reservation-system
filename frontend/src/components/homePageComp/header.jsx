
function Header() {
  return (
    <header className="flex justify-between items-center px-10 py-5 bg-white shadow-sm">
      <div className="flex items-center gap-2">
        <img src="/resIcon.png" alt="logo" className="w-8 h-8" />
        <h1 className="text-xl font-bold text-red-800">BookN'Dine</h1>
      </div>

      {/* <nav className="flex gap-6 text-gray-600 font-medium">
        <a href="#">Discover</a>
        <a href="#" className="text-green-600">Promotions</a>
        <a href="#">Events</a>
      </nav> */}

      <div className="flex items-center gap-4">
        
        <button className="search"><img src="src/assets/searchIcon.png" alt="search-icon" className="w-6 h-6 mr-6" /></button>
        <button className="px-4 py-2 bg-orange-100 text-black font-semibold border border-orange-50 rounded-md">
          Sign in
        </button>
      </div>
    </header>
  );
}

export default Header;