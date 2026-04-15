import { FaUser } from "react-icons/fa";
import { HiOutlineSearch } from "react-icons/hi";
function Header() {
  return (
    <header className="flex justify-between items-center px-10 py-5 sticky top-0 z-50 bg-white shadow-sm">
      <div className="flex items-center gap-2">
        <img src="/resIcon.png" alt="logo" className="w-8 h-8 rounded-md" />
        <h1 className="text-xl font-bold ">Bookn'<span className="text-green-500">Dine</span></h1>
      </div>

  

      <div className="flex items-center gap-6">
        <button className="search">
          <HiOutlineSearch size={21} className="text-gray-600" />{" "}
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-red-50 text-black font-semibold border border-red-200 rounded-lg">
          <FaUser className="text-green-500" /> Sign In
        </button>
      </div>
    </header>
  );
}

export default Header;
