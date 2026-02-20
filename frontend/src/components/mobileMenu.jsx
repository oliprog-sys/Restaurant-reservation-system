import {
  FaHeart,
  FaHistory,
  FaCalendarAlt,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        className="md:hidden absolute top-6 right-6 text-2xl"
        onClick={() => setOpen(true)}
      >
        <FaBars />
      </button>

      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 p-6 transform transition-transform ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button className="mb-6 text-xl" onClick={() => setOpen(false)}>
          <FaTimes />
        </button>

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
    </div>
  );
}
