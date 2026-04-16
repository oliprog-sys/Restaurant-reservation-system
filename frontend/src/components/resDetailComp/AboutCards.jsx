import { MdOutlineRestaurant } from "react-icons/md";
import { IoMdPricetags } from "react-icons/io";
import { RiTimerFill } from "react-icons/ri";
import { RiLeafFill } from "react-icons/ri";


export function AboutCards({cusine, price, dinningLimit, dietary}) {

    return (
        <div className="flex gap-x-2 mt-4">
            <div className="bg-white p-6 rounded-xl">
                <MdOutlineRestaurant size={24} className="text-green-600" />
                <p className="uppercase text-xs font-bold py-1 text-gray-500">Cusine</p>
                <p className="track-wider text-xl">{cusine}</p>
            </div>
            <div className="bg-white p-6 rounded-xl">
                <IoMdPricetags size={24} className="text-green-600" />
                <p className="uppercase text-xs font-bold py-1 text-gray-500"> Max Price</p>
                <p className="track-wider text-xl">{price}</p>
            </div>
            <div className="bg-white p-6 rounded-xl">
                <RiTimerFill size={24} className="text-green-600" />
                <p className="uppercase text-xs font-bold py-1 text-gray-500">Dinning Limit</p>
                <p className="track-wider text-xl">{dinningLimit} Minutes</p>
            </div>
            <div className="bg-white p-6 rounded-xl">
                <RiLeafFill size={24} className="text-green-600" />
                <p className="uppercase text-xs font-bold py-1 text-gray-500">Dietary</p>
                <p className="track-wider text-xl">{dietary}</p>
            </div>
        </div>
    )
}