import React from "react";
import ImageCard from "./ImageCard";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";

const PhotoGallery = () => {
  return (
    <div className="my-20 bg-white flex flex-col jsutify-center items-center">
      <h3 className="text-3xl font-semibold my-14">Photos</h3>
      {/* all my photos shown here  */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 bg-20">
        {/* Image card  */}
        <ImageCard
          title="The Beach"
          author="Developer"
          img="https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=600"
          price={10}
          icon1={
            <FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-liner duration-300" />
          }
        icon2=
        {
          <IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-liner duration-300" />
        }
        />
        <ImageCard
          title="The river"
          author="Developer"
          img="https://images.pexels.com/photos/269583/pexels-photo-269583.jpeg?auto=compress&cs=tinysrgb&w=600"
          price={20}
          icon1={
            <FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-liner duration-300" />
          }
        icon2=
        {
          <IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-liner duration-300" />
        }
        />
        <ImageCard
          title="The river"
          author="Developer"
          img="https://images.pexels.com/photos/269583/pexels-photo-269583.jpeg?auto=compress&cs=tinysrgb&w=600"
          price={20}
          icon1={
            <FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-liner duration-300" />
          }
        icon2=
        {
          <IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-liner duration-300" />
        }
        />
        
      </div>
    </div>
  );
};

export default PhotoGallery;
