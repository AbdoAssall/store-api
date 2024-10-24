/* eslint-disable react/prop-types */
import { BiSolidCategoryAlt } from "react-icons/bi";
import { Rating } from "@material-tailwind/react";

export default function Card({title, price, category, rate, imgPath}) {
    return (
        <div className="grow-0 shrink-0 basis-full lg:basis-[32.3%] max-w-sm overflow-hidden bg-white rounded-lg shadow-lg">
            <div className="card-img">
                <img
                    src={imgPath}
                    alt="card-img"
                    className="object-contain object-center w-full h-56" />
            </div>
            <div className="flex items-center px-6 py-3 bg-[#111827]">
                <BiSolidCategoryAlt className="w-6 h-6 text-white" />
                <h1 className="mx-2 text-lg font-semibold text-white">{category}</h1>
            </div>
            <div className="px-6 py-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h3>
                <div className="product-rate my-2 flex justify-betwee items-center">
                    <Rating value={Math.round(rate)}  ratedColor="amber" readonly className="pr-3" />
                    <span className="inline-block text-base font-semibold text-gray-800">{rate}</span>
                </div>
                <div className="product-price flex justify-between items-center">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800">$ {price}</h3>
                    <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 bg-[#374151] rounded hover:bg-[#2f3846] focus:outline-none focus:bg-[#2f3846]">Add to cart</button>
                </div>
            </div>
        </div>
    )
}