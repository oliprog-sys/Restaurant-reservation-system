function SearchBar({ onSearch }) {
  return (
    <div className="flex items-center gap-2 mb-8">
      <input
        type="text"
        placeholder="Search here ... "
        className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        onChange={(e) => onSearch && onSearch(e.target.value)}
      />
      <button className="p-2 bg-gray-200 rounded-md cursor-pointer hover:bg-gray-300 ">
        <img src="/src/assets/filter.png" alt="filter-icon" className="w-6 h-6" />
      </button>
    </div>
  );
}

export default SearchBar;
