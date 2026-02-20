import { FaHeart, FaHistory, FaCalendarAlt, FaUser } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="hidden md:flex flex-col w-64 h-screen bg-white shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-8 text-amber-700">Menu</h2>

      <nav className="space-y-4">
        <button className="flex items-center gap-3">
          <FaHeart /> Favorites
        </button>
        <button className="flex items-center gap-3">
          <FaHistory /> Past Reservations
        </button>
        <button className="flex items-center gap-3">
          <FaCalendarAlt /> Upcoming Reservations
        </button>
        <button className="flex items-center gap-3">
          <FaUser /> Profile
        </button>
      </nav>
    </div>
  );
}
