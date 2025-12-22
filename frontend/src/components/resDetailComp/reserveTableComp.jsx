import { useState } from "react";

export default function ReserveTable() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(2);
  const [tableType, setTableType] = useState("indoor");
  const [available] = useState(true);

  const handleReserve = () => {
    const reservation = { date, time, guests, tableType };
    console.log("Reservation:", reservation);
    alert("Table Reserved!");
  };

  return (
    <div className="max-w-lg  p-4 bg-white rounded-xl shadow-md mt-5">
      <h2 className="text-lg font-semibold mb-4">Reserve a Table</h2>

      <div className="grid grid-cols-3 gap-2">
        <input
          type="date"
          className="border rounded-md p-2"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <input
          type="time"
          className="border rounded-md p-2"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />

        <select
          className="border rounded-md p-2"
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
        >
          {[...Array(10)].map((_, i) => (
            <option key={i} value={i + 1}>
              {i + 1} Guests
            </option>
          ))}
        </select>
      </div>

      <div className="flex gap-2 mt-4">
        <button
          onClick={() => setTableType("indoor")}
          className={`flex-1 p-2 rounded-md border ${
            tableType === "indoor" ? "bg-black text-white" : "bg-white"
          }`}
        >
          Indoor
        </button>

        <button
          onClick={() => setTableType("outdoor")}
          className={`flex-1 p-2 rounded-md border ${
            tableType === "outdoor" ? "bg-black text-white" : "bg-white"
          }`}
        >
          Outdoor
        </button>
      </div>

      <p
        className={`mt-3 text-sm ${
          available ? "text-green-600" : "text-red-600"
        }`}
      >
        {available ? "✔ Tables Available" : "✖ No Tables Available"}
      </p>

      <button
        disabled={!available}
        onClick={handleReserve}
        className="w-full mt-4 bg-black text-white py-3 rounded-lg disabled:bg-gray-400"
      >
        Reserve Table
      </button>
    </div>
  );
}
