import React from "react";
import { useState } from "react";
import { TubIcon,GirlIcon,CarIcon,LocationIcon,HeartIcon,HeartIconBlue } from "../Iconsvg/Iconsvg";


const Card = ({
  image,
  title,
  location,
  cars,
  baths,
  persons,
  price,
  boldtext,
  mediumtext,
  liked = false,
  dynamicIcon=null,
}) => {
   const [isLiked, setIsLiked] = useState(false);

  const handleLikeToggle = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsLiked((prev) => !prev);
  };

  return (
    <div className="  w-full rounded-2xl max-h-[500px]  h-full  relative ">
      {/* Image */}
      <div className=" rounded-[20px] relative ">
        <img src={image} alt={title} className=" rounded-2xl object-cover object-center w-full h-full sm:h-[260px]" />
        {dynamicIcon &&(
        <div className="absolute top-3 right-3 ">

         <div className="absolute top-3 right-3 cursor-pointer" onClick={handleLikeToggle}>
          {isLiked ? <HeartIconBlue /> : <HeartIcon />}
        </div>
        </div>
)}
      </div>

      {/* secon part the Content */}
      <div className="py-4">
  {/* bold black Title */}
  <h3 className="text-[24px] font-gordita font-medium text-black mb-1 line-clamp-1">
    {title}
  </h3>

  {/* Location information */}
  {/* <p className="text-[16px] font-gordita font-normal text-black flex items-center gap-1 mb-3 ">
    <LocationIcon/> {location}
  </p> */}
<div className="flex items-start gap-1 mb-3">
  <LocationIcon className="min-w-[16px] mt-0.5" />
  <p className="text-[16px] font-gordita font-normal text-black line-clamp-1">
    {location}
  </p>
</div>
  {/* horizontial divide */}
  <div className="h-px bg-[#CFCFCF] my-2"></div>

  {/* three icons divs  */}
 <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-black font-gordita text-[16px] font-normal mb-2">
  {/* Icons */}
  <div className="flex flex-wrap gap-6">
    <div className="flex items-center gap-2">
      <CarIcon className="text-[16px]" />
      <span>{cars}</span>
    </div>
    <div className="flex items-center gap-2">
      <TubIcon className="text-[16px]" />
      <span>{baths}</span>
    </div>
    <div className="flex items-center gap-2">
      <GirlIcon className="text-[16px]" />
      <span>{persons}</span>
    </div>
  </div>

  {/* Price */}
  {boldtext && (
  <div className="text-[21px] font-bold font-gordita gradient-boldheading sm:text-right">
    ₹{price.toLocaleString()}
  </div>
)}

{mediumtext && !boldtext && (
  <div className="text-[21px] font-medium font-gordita gradient-textheading sm:text-right">
    ₹{price.toLocaleString()}
  </div>
)}
</div>


  {/* lowestdidider */}
  <div className="h-px bg-[#CFCFCF] my-2"></div>
</div>

    </div>
  );
};

export default Card;
