import { IoLocationSharp } from "react-icons/io5";

export function PopularCard({ status, name, location, cusineType, image }) {
  return (
    <div
      className="relative h-72 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 h-full flex flex-col justify-between p-4">
        <p className="inline-block w-fit bg-orange-500 text-white font-semibold uppercase text-[11px] px-2 py-[0.05rem] rounded-lg">
          {status}
        </p>

        <div>
          <h3 className="text-white font-bold text-xl tracking-wide">{name}</h3>

          <div className="flex items-center gap-2 text-gray-200 text-sm mt-1">
            <div className="flex items-center gap-1">
              <IoLocationSharp />
              {location}
            </div>

            <span>·</span>

            <div>{cusineType}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
