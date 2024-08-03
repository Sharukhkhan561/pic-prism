import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";

const ImageCard = ({id, img, title, icon1, icon2,price, author}) => {
  return (
    <div className="rounded-lg bg-white shadow-lg p-2">
          <div className="w-full h-[200px] overflow-hidden rounded-2xl">

          <img
          src={img}
            alt={title}
            className="w-full h-full hover:scale-105 transition-all ease-linear duartion-300 transform cursor-pointer"
          />
          </div>
          <p className="font-semibold text-white bg-black w-fit px-5 py-1 rounded-full text-sm mt-3">
            {/* {"@" + author.charAt(0).toUpperCase() + author.slice(1)} */} developer
          </p>
          <div className="flex justify-between items-center mt-2">
            <div>
           <h3 className="text-lg font-semibold">{title}</h3>
           <p className="text-gray-500">${price}</p>
            </div>
            <div className="flex gap-5 justify-center items-center">
            {icon1}
            {icon2}
            </div>
          </div>
        </div>
  )
}

export default ImageCard