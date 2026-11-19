import React from "react";
import { ButtonClick } from "../Iconsvg/Iconsvg";

const ServicesCard = ({ image, title, description, onClick }) => {
  return (
    <div className= " relative bg-white rounded-2xl shadow-2xl pt-4 px-4 flex flex-col items-center text-center w-full max-w-sm mx-auto min-h-[504px]">
      
      <img
        src={image}
        alt={title}
        className="rounded-xl w-full h-60 object-cover mb-4"
      />
      <h3 className="font-gordita font-bold text-[26px] text-black">{title}</h3>
      <p className="font-gordita font-normal text-[16px] text-black leading-[27px]">{description}</p>

      {/* Semi-circular Button */}
    
        <button
    onClick={onClick}
    className="w-33 h-9 py-8 rounded-t-full backgroundgradient text-white flex items-center justify-center absolute bottom-0 left-1/2 transform -translate-x-1/2 cursor-pointer"
  >
    <span>
      <ButtonClick/>
    </span>
  
  </button>
     
    </div>
  );
};

export default ServicesCard;
