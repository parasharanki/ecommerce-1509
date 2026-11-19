import React from "react";
import { useState } from "react";
import taxibg from "../assets/images/taxibg.png";
import taxiimg from "../assets/images/taxiimg.png";
import { Logo, BackIcon, UpmarkIcon ,TickIcon} from "../Components/Iconsvg/Iconsvg";

const BookingConfirm = () => {.qAO;
  return (
    <>
      <div className="w-full">
        <div className="flex ">
          <div className="w-[35%] servicescardgradient h-auto px-4 py-4 flex items-center justify-center">
            <div className="flex flex-col items-center ">

               <div className="pt-20">
           <TickIcon/>
               </div>
              
              <div className="flex flex-col gap-4 pb-10">

              <h1 className="font-gordita font-medium text-[#1A1A1A]  text-[36px] text-center">
                Congratulations! Your Taxi is Booked
              </h1>
               <h4 className="font-gordita font-normal text-[#1A1A1A]  text-[20px] text-center leading-[29px]">
                Your ride has been successfully confirmed.
               </h4>
               </div>
               <button className=" w-full backgroundgradient  text-white rounded-full px-6 py-3 flex items-center gap-2 justify-center">
                                 <span className="font-medium font-gordita text-[20px] text-center">
                               Okay
                                 </span>
                                 <UpmarkIcon />
                               </button>
            </div>
          </div>
          <div className="relative w-[65%] ">
            <img
              src={taxibg}
              alt="eventdetails"
              className="w-full h-full object-cover"
            />
            <div className=" absolute inset-x-0 bottom-0 mb-6 font-gordita font-bold text-white text-[60px] flex justify-center">
              Order Taxi Online
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingConfirm;
