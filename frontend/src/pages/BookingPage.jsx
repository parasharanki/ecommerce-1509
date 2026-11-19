import React from "react";
import { useState } from "react";

import {
  Logo,
  BackIcon,
  UpmarkIcon,
  Ship,
  CalenderIcon,
  DatechartIcon
} from "../Components/Iconsvg/Iconsvg";
import taxibg from "../assets/images/taxibg.png";
import { Link } from "react-router-dom";

const BookingPage = () => {
  const [activeTab, setActiveTab] = useState("bookNow");
  return (
    <>
      <div className="w-full">
        <div className="flex ">
          <div className=" w-[35%] servicescardgradient h-auto px-4 py-4">
            <div className="flex flex-col items-center">
              {/* Header */}
              <div className="w-full flex items-center justify-between pb-18 px-10">
                <Link to="/details">
                <button>
                  <BackIcon />
                </button>
                </Link>
                <Logo />
                <div className="w-16" />
              </div>

              {/* Toggle Tabs */}
              <div className="w-full max-w-md flex gap-6 border-b border-[#D0D0D0] mb-6">
                {["bookNow", "schedule"].map((tab) => (
                  <div key={tab} className="w-1/2 flex justify-center relative">
                    <button
                      onClick={() => setActiveTab(tab)}
                      className={`pb-2 font-gordita font-medium text-[20px] relative z-10 ${
                        activeTab === tab ? "text-black" : "text-[#1F1608]/70"
                      }`}
                    >
                      {tab === "bookNow" ? "Book Now" : "Schedule A Time"}
                    </button>
                    {activeTab === tab && (
                      <div className="absolute bottom-0 w-full h-[3px] blogcarddgradient rounded-full" />
                    )}
                  </div>
                ))}
              </div>

              {/* Title */}
              <h2 className="text-[24px] md:text-[32px] font-gordita font-medium text-[#1F1608] text-center mb-6">
                {activeTab === "bookNow"
                  ? "Book Your Taxi in Seconds!"
                  : "Schedule a Taxi in Seconds!"}
              </h2>

              {/* Form Fields */}
              <div className="w-full max-w-md space-y-4">
                {activeTab === "bookNow" ? (
                  <>
                    {/* Book Now Fields */}
                    <div className="flex justify-between items-center w-full px-4 py-3 rounded-full bg-white border border-[#2674BA]/20">
                      <input
                        type="text"
                        placeholder="Pickup Location"
                        className="w-full bg-transparent outline-none placeholder:text-[14px] placeholder:font-gordita placeholder:text-black placeholder:font-normal"
                      />
                      <Ship />
                    </div>

                    <input
                      type="text"
                      placeholder="Drop Location"
                      className="w-full px-4 py-3 rounded-full  bg-white border border-[#2674BA]/20 placeholder:text-[14px] placeholder:font-gordita placeholder:text-black placeholder:font-normal outline-none"
                    />
                  <Link to="/booking-taxi-list">
                    <button className=" w-full backgroundgradient  text-white rounded-full px-6 py-3 flex items-center gap-2 justify-center">
                     
                      <span className="font-medium font-gordita text-[20px] text-center">
                        Search
                      </span>
                      
                      <UpmarkIcon />
                    </button>
                    </Link>
                  </>
                ) : (
                  <>
                    {/* Schedule Fields */}
                   <div className="flex justify-between items-center w-full px-4 py-3 rounded-full bg-white border border-[#2674BA]/20">
                      <input
                        type="text"
                        placeholder="Select Date"
                        className="w-full bg-transparent outline-none placeholder:text-[14px] placeholder:font-gordita placeholder:text-black placeholder:font-normal"
                      />
                      <DatechartIcon/>
                    </div>
                   <div className="flex justify-between items-center w-full px-4 py-3 rounded-full bg-white border border-[#2674BA]/20">
                      <input
                        type="text"
                        placeholder="Select Date"
                        className="w-full bg-transparent outline-none placeholder:text-[14px] placeholder:font-gordita placeholder:text-black placeholder:font-normal"
                      />
                      <DatechartIcon/>
                    </div>

                    <button className=" w-full backgroundgradient  text-white rounded-full px-6 py-3 flex items-center gap-2 justify-center">
                      <span className="font-medium font-gordita text-[20px] text-center">
                        Next
                      </span>
                      <UpmarkIcon />
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="relative w-[65%]  ">
            <img
              src={taxibg}
              alt="taxibg"
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

export default BookingPage;
