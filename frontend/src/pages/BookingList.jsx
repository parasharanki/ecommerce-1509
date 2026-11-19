import React from "react";
import { useState } from "react";
import taxibg from "../assets/images/taxibg.png";
import taxiimg from "../assets/images/taxiimg.png";
import { Logo, BackIcon, UpmarkIcon } from "../Components/Iconsvg/Iconsvg";
import { Link } from "react-router-dom";
const BookingList = () => {
  return (
    <>
     
        <div className=" w-full flex ">
          <div className="w-[%35] servicescardgradient h-auto px-4 py-4">
            <div className="flex flex-col items-center">
              {/* Header */}
              <div className="w-full flex items-center justify-between mb-4">
                <Link to="/booking">
                <button>
                  <BackIcon />
                </button>
                </Link>
                <Logo />
                <div className="w-16" />
              </div>
              <div className="flex flex-col pt-4 gap-4">
                <h1 className="font-gordita font-medium  text-[32px] text-[#1F1608] text-center">
                  Book Your Taxi in Seconds!
                </h1>

                <div className="w-[438px] min-h-[101px] bg-white rounded-xl p-2">
                  <div className=" flex justify-between items-center">
                    <div className="flex  items-center">
                      <div className="w-[100px] h-[100px]">
                        <img
                          src={taxiimg}
                          alt="imgtaxi"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="font-gordita text-black font-medium text-[18px]">
                          Cab Economy
                        </h3>
                        <div className="font-gordita text-[#152B33] font-normal text-[14px]">
                          Drop at 4:36PM
                        </div>
                        <div className="font-gordita text-[#152B33] font-normal text-[14px]">
                          Passenger:4
                        </div>
                      </div>
                    </div>
                    <div className="font-gordita text-black font-medium text-[18px]">
                      ₹200.00
                    </div>
                  </div>
                </div>
                <div className="w-[438px] min-h-[101px] bg-white rounded-xl p-2">
                  <div className=" flex justify-between items-center">
                    <div className="flex  items-center">
                      <div className="w-[100px] h-[100px]">
                        <img
                          src={taxiimg}
                          alt="imgtaxi"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="font-gordita text-black font-medium text-[18px]">
                          Cab Economy
                        </h3>
                        <div className="font-gordita text-[#152B33] font-normal text-[14px]">
                          Drop at 4:36PM
                        </div>
                        <div className="font-gordita text-[#152B33] font-normal text-[14px]">
                          Passenger:4
                        </div>
                      </div>
                    </div>
                    <div className="font-gordita text-black font-medium text-[18px]">
                      ₹200.00
                    </div>
                  </div>
                </div>
                <div className="w-[438px] min-h-[101px] bg-white rounded-xl p-2">
                  <div className=" flex justify-between items-center">
                    <div className="flex  items-center">
                      <div className="w-[100px] h-[100px]">
                        <img
                          src={taxiimg}
                          alt="imgtaxi"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="font-gordita text-black font-medium text-[18px]">
                          Cab Economy
                        </h3>
                        <div className="font-gordita text-[#152B33] font-normal text-[14px]">
                          Drop at 4:36PM
                        </div>
                        <div className="font-gordita text-[#152B33] font-normal text-[14px]">
                          Passenger:4
                        </div>
                      </div>
                    </div>
                    <div className="font-gordita text-black font-medium text-[18px]">
                      ₹200.00
                    </div>
                  </div>
                </div>
                <div className="w-[438px] min-h-[101px] bg-white rounded-xl p-2">
                  <div className=" flex justify-between items-center">
                    <div className="flex  items-center">
                      <div className="w-[100px] h-[100px]">
                        <img
                          src={taxiimg}
                          alt="imgtaxi"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="font-gordita text-black font-medium text-[18px]">
                          Cab Economy
                        </h3>
                        <div className="font-gordita text-[#152B33] font-normal text-[14px]">
                          Drop at 4:36PM
                        </div>
                        <div className="font-gordita text-[#152B33] font-normal text-[14px]">
                          Passenger:4
                        </div>
                      </div>
                    </div>
                    <div className="font-gordita text-black font-medium text-[18px]">
                      ₹200.00
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <Link to="/booking-confirm"> 
                <button className=" w-full backgroundgradient  text-white rounded-full px-6 py-3 flex items-center gap-2 justify-center">
                  <span className="font-medium font-gordita text-[20px] text-center">
                  Book Taxi
                  </span>
                  <UpmarkIcon />
                </button>
                </Link>
                </div>
              </div>
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
     
    </>
  );
};

export default BookingList;
