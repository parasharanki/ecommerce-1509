import React from "react";
import {
  PaybackIcon,
  Credit,
  DownwardIcon,
  UpmarkIcon,
  LocationIcon,
  Ratings,
   TickIcon,
   LocationTiny
} from "../Components/Iconsvg/Iconsvg";
import { Dialog } from "@headlessui/react";
import newbg from "../assets/images/newbg.jpg";
import paypage from "../assets/images/paypage.png";

import { CrossIcon } from "../Components/Iconsvg/Iconsvg";
import { useState } from "react";

const ConfirmPayPage = () => {

  const [isOpen, setIsOpen] = useState(false); 
     
     const handleOpenDialog = () => {
  
      setIsOpen(true);
    };
  return (
    <div className="bg-[#F6F6F6]">
      <div className=" max-w-screen">
        {/* both sections */}

        <div className="max-w-[1140px] text-center grid grid-cols-2 gap-2 mx-auto py-2">
          {/* slip one */}
          <div className="col-span-1 bg-white min-h-[1034px]">
            <div className="py-4 px-12">
              <div className="flex items-center gap-4 font-gordita font-medium text-[30px] text-[#1A1A1A]">
                <span>
                  <PaybackIcon />
                </span>
                Confirm And Pay
              </div>
              <div className=" max-w-[476px] grid grid-cols-2 gap-2 mx-auto pt-6 pb-2">
                <div className="border border-[#C8C8C8] rounded-sm text-left p-4 ">
                  <div className="font-gordita font-medium text-[#1A1A1A] text-[20px] ">
                    Dates
                  </div>
                  <div className="font-gordita font-normal text-[#223743] text-[16px]">
                    05May - 17 May
                  </div>
                </div>
                <div className="border border-[#C8C8C8] rounded-sm text-left p-4 ">
                  <div className="font-gordita font-medium text-[#1A1A1A] text-[20px] ">
                    Guests
                  </div>
                  <div className="font-gordita font-normal text-[#223743] text-[16px]">
                    {" "}
                    5 Guest
                  </div>
                </div>
                <div className="border border-[#C8C8C8] rounded-sm text-left p-4  ">
                  <div className="font-gordita font-medium text-[#1A1A1A] text-[20px] ">
                    Car
                  </div>
                  <div className="font-gordita font-normal text-[#223743] text-[16px]">
                    Self-drive car
                  </div>
                </div>
                <div className="border border-[#C8C8C8] rounded-sm text-left p-4 break-words ">
                  <div className="font-gordita font-medium text-[#1A1A1A] text-[20px] leading-snug ">
                    Maid/Housekeeping
                  </div>
                  <div className="font-gordita font-normal text-[#223743] text-[16px]">
                    3 Days
                  </div>
                </div>
                <div className="border border-[#C8C8C8] rounded-sm text-left p-4 ">
                  <div className="font-gordita font-medium text-[#1A1A1A] text-[20px] ">
                    Adults
                  </div>
                  <div className="font-gordita font-normal text-[#223743] text-[16px]">
                    3 members
                  </div>
                </div>
                <div className="border border-[#C8C8C8] rounded-sm text-left p-4 ">
                  <div className="font-gordita font-medium text-[#1A1A1A] text-[20px] ">
                    Children
                  </div>
                  <div className="font-gordita font-normal text-[#223743] text-[16px] ">
                    {" "}
                    1 Member
                  </div>
                </div>
              </div>
              <div className="max-w-[476px] mx-auto">
                <div className="border border-[#C8C8C8] rounded-sm text-left p-4 ">
                  <div className="font-gordita font-medium text-[#1A1A1A] text-[20px] ">
                    Infants
                  </div>
                  <div className="font-gordita font-normal text-[#223743] text-[16px]">
                    5 members
                  </div>
                </div>
              </div>
              <div className="max-w-[476px] mx-auto">
                <div className="flex items-center gap-4 font-gordita font-medium text-[22px] text-[#1A1A1A] pb-2">
                  Pay With
                </div>
                {/* have to make it */}
                <div className="flex flex-col gap-2">
                  <div className="border border-[#C8C8C8] rounded-sm text-left p-2 ">
                    <div className="flex p-4 items-center justify-between ">
                      <div className="flex gap-2 ">
                        <div>
                          <Credit />
                        </div>
                        <div className="font-gordita font-normal text-[#1A1A1A] text-[15px]">
                          Credit or debit card
                        </div>
                      </div>
                      <div className="font-gordita font-normal text-[#1A1A1A] text-[15px]">
                        <DownwardIcon />
                      </div>
                    </div>
                  </div>
                  <div className="border border-[#C8C8C8] rounded-sm text-left p-4 ">
                    <div className="font-gordita font-light text-[#1A1A1A] text-[14px] ">
                      Card number
                    </div>
                    <div className="font-gordita font-medium text-[#1A1A1A] text-[14px]">
                      1234 5678 9012 3456
                    </div>
                  </div>
                </div>
              </div>
              <div className=" max-w-[476px] grid grid-col-1 gap-2 mx-auto pt-2 pb-2">
                <div className="border border-[#C8C8C8] rounded-sm text-left p-4 ">
                  <div className="font-gordita font-light text-[#1A1A1A] text-[14px]">
                    Expiration
                  </div>
                  <div className="font-gordita font-normal text-[#1A1A1A] text-[14px]">
                    MM/YY
                  </div>
                </div>
                <div className="border border-[#C8C8C8] rounded-sm text-left p-4 ">
                  <div className="font-gordita font-light text-[#1A1A1A] text-[14px]">
                    CVV
                  </div>
                  <div className="font-gordita font-normal text-[#1A1A1A] text-[14px]">
                    {" "}
                    3 Digits
                  </div>
                </div>
              </div>
              <div className=" max-w-[476px]  gap-2 mx-auto pt-2 pb-2">
                <div className="border border-[#C8C8C8] rounded-sm text-left p-4 ">
                  <div className="font-gordita font-normal text-[#1A1A1A] text-[15px]">
                    Card Holder Name
                  </div>
                </div>
                <div className=" py-2">
                  <div className="w-full mx-auto">
                    <button className="backgroundgradient text-white rounded-full px-6 py-3 flex items-center gap-2 w-full justify-center" 
                      onClick={() => handleOpenDialog()}
                    >
                      <span className="font-medium font-gordita text-[20px] text-center">
                        Confirm And Pay
                      </span>
                      <UpmarkIcon />
                    </button>
                  </div>
                </div>
                <p className=" text-left font-gordita font-normal text-[#1A1A1A] text-[18px]">
                  Cancellation policy
                </p>
                <p className=" text-left font-gordita font-normal text-[#1A1A1A] text-[14px]">
                  This reservation is non-refundable.{" "}
                  <span className="font-gordita font-medium text-[#1A1A1A] text-[14px]">
                    Learn More
                  </span>
                </p>
              </div>
            </div>
          </div>
          {/* slip two */}
          <div className="col-span-1 bg-white min-h-[968px] slipcardgradient">
            <div className="px-12 py-2">
              <div className="flex flex-col gap-2">
                <div className="w-full min-h-[130px] bg-white mx-auto px-4 py-4">
                  <div className="flex gap-2 items-center">
                    <div className="w-[101px] h-[98px] rounded-md">
                      <img
                        src={paypage}
                        alt="Host"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex flex-col gap-1 text-left">
                      <div className="font-gordita font-medium text-[18px] text-[#1A1A1A]">
                        Skyper Pool Apartment
                      </div>
                      <div className="flex gap-1 items-center">
                        <div>
                          <LocationTiny/>
                        </div>
                        <div className="font-gordita font-normal text-[14px] text-[#1A1A1A]">
                          974 Valencia St San Francisco, CA 94110
                        </div>
                      </div>
                      <div className="flex gap-1 items-center">
                        <div className="font-gordita font-medium text-[16px] text-black">
                          4.0
                        </div>
                        <div className=" flex items-center gap-2 font-gordita font-normal text-[12px] text-[#1A1A1A]">
                          <Ratings />
                          (2 reviews)
                        </div>
                      </div>
                      <div></div>
                    </div>
                    <div></div>
                  </div>
                </div>

                <div className="w-full min-h-[339px] bg-white mx-auto px-4 py-4">
                  <h1 className="font-gordita font-medium text-[22px] text-[#1A1A1A] text-left">
                    Your Total
                  </h1>
                  <div className="flex justify-between border-b-[1px] border-[#E2E2E2] py-2">
                    <div className="font-gordita font-normal text-[20px] text-black">
                      Villa
                    </div>
                    <div className="font-gordita font-normal text-[20px] text-black">
                      5 Days
                    </div>
                    <div className="font-gordita font-medium text-[16px] text-black">
                      ₹24,764
                    </div>
                  </div>
                  <div className="py-2">
                    <div className="border-b-[1px] border-[#E2E2E2] py-2">
                      <h1 className="font-gordita font-medium text-[18px] text-[#1A1A1A] text-left">
                        Extra Features
                      </h1>
                      <div className="flex justify-between items-center">
                        <div className="flex flex-col">
                          <div className="font-gordita font-normal text-[20px] text-black">
                            Self-Drive Car:
                          </div>
                          <div className="font-gordita font-normal text-[14px] text-black text-left">
                            3 Days
                          </div>
                        </div>
                        <div className="font-gordita font-medium text-[18px] text-black">
                          ₹3000
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="py-2">
                    <div className="border-b border-[#E2E2E2] py-2">
                      <div className="flex flex-wrap justify-between items-start gap-2 sm:items-center">
                        <div className="flex flex-col">
                          <div className="font-gordita font-normal text-[16px] text-black">
                            Maid/Housekeeping:
                          </div>
                         
                        </div>
                        <div className="font-gordita font-medium text-[18px] text-black">
                          ₹1500
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="py-2">
                    <div className="border-b-[1px] border-[#E2E2E2] py-2">
                      <div className="flex justify-between items-center">
                        <div className="font-gordita font-normal text-[14px] text-black">
                          Taxi:
                        </div>
                        <div className="font-gordita font-medium text-[16px] text-black">
                          3 Days
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="py-2">
                    <div className="flex justify-between items-center">
                      <div className="font-gordita font-normal text-[14px] text-black">
                        Total:
                      </div>
                      <div className="font-gordita font-medium text-[16px] text-black">
                        ₹29,564
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full  mx-auto  py-4">
                  <h1 className="font-gordita font-medium text-[20px] text-black text-left">
                    Available Coupons Code
                  </h1>
                </div>

                <div className="relative bg-white w-full max-auto mx-auto min-h-[106px] ">
                  {/* Half circle - LEFT */}
                  <div className="absolute top-1/2 -translate-y-1/2 -left-[12px] w-6 h-6 bg-[#E5ECDA] rounded-full  z-10"></div>

                  {/* Half circle - RIGHT */}
                  <div className="absolute top-1/2 -translate-y-1/2 -right-[12px] w-6 h-6 bg-[#D1E6F0] rounded-full   z-10"></div>

                  {/* Main content inside the white box */}
                  <div className="p-4 text-left  text-black font-medium">
                    <div className="flex justify-between items-center">
                      <div className="flex flex-col gap-2">
                        <div className="font-gordita font-light text-[14px] text-black">
                          CTA 20% OFF Coupon
                        </div>
                        <div className="font-gordita font-medium text-[18px] text-[#1A5488]">
                          ₹2000 Discount at Booking
                        </div>
                        <div className="font-gordita font-normal text-[14px] text-black">
                          Ends on May 31st 2024
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <div className="even-gradient-border px-6 py-2  font-gordita  font-medium text-[12px] text-black">
                          <button >Welcome 50</button>
                        </div>
                        <div>
                          <button className="backgroundgradient text-white rounded-full px-6 py-2  w-full justify-center">
                            <span className="font-medium font-gordita text-[12px] text-center">
                              Apply
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative bg-white w-full max-auto mx-auto min-h-[106px] ">
                  {/* Half circle - LEFT */}
                  <div className="absolute top-1/2 -translate-y-1/2 -left-[12px] w-6 h-6 bg-[#E5ECDA] rounded-full  z-10"></div>

                  {/* Half circle - RIGHT */}
                  <div className="absolute top-1/2 -translate-y-1/2 -right-[12px] w-6 h-6 bg-[#D1E6F0] rounded-full   z-10"></div>

                  {/* Main content inside the white box */}
                  <div className="p-4 text-left  text-black font-medium">
                    <div className="flex justify-between items-center">
                      <div className="flex flex-col gap-2">
                        <div className="font-gordita font-light text-[14px] text-black">
                          CTA 20% OFF Coupon
                        </div>
                        <div className="font-gordita font-medium text-[18px] text-[#1A5488]">
                          ₹2000 Discount at Booking
                        </div>
                        <div className="font-gordita font-normal text-[14px] text-black">
                          Ends on May 31st 2024
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <div className="even-gradient-border px-6 py-2  font-gordita  font-medium text-[12px] text-black">
                          <button >Welcome 50</button>
                        </div>
                        <div>
                          <button className="backgroundgradient text-white rounded-full px-6 py-2  w-full justify-center">
                            <span className="font-medium font-gordita text-[12px] text-center">
                              Apply
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                 <div className="relative bg-white w-full max-auto mx-auto min-h-[106px] ">
                  {/* Half circle - LEFT */}
                  <div className="absolute top-1/2 -translate-y-1/2 -left-[12px] w-6 h-6 bg-[#E5ECDA] rounded-full  z-10"></div>

                  {/* Half circle - RIGHT */}
                  <div className="absolute top-1/2 -translate-y-1/2 -right-[12px] w-6 h-6 bg-[#D1E6F0] rounded-full   z-10"></div>

                  {/* Main content inside the white box */}
                  <div className="p-4 text-left  text-black font-medium">
                    <div className="flex justify-between items-center">
                      <div className="flex flex-col gap-2">
                        <div className="font-gordita font-light text-[14px] text-black">
                          CTA 20% OFF Coupon
                        </div>
                        <div className="font-gordita font-medium text-[18px] text-[#1A5488]">
                          ₹2000 Discount at Booking
                        </div>
                        <div className="font-gordita font-normal text-[14px] text-black">
                          Ends on May 31st 2024
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <div className="even-gradient-border px-6 py-2  font-gordita  font-medium text-[12px] text-black">
                          <button >Welcome 50</button>
                        </div>
                        <div>
                          <button className="backgroundgradient text-white rounded-full px-6 py-2  w-full justify-center">
                            <span className="font-medium font-gordita text-[12px] text-center">
                              Apply
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            <Dialog
                            open={isOpen}
                            onClose={() => setIsOpen(false)}
                            className="relative z-50"
                          >
                            {/* Backdrop */}
                            <div className="fixed inset-0 bg-black/80" aria-hidden="true" />
                  
                            <div className="fixed inset-0 flex items-center justify-center p-4 ">
                              {/* Dialog Panel */}
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-end">
                                  <button
                                    onClick={() => setIsOpen(false)}
                                    className="mt-6 w-8 h-8 rounded-full blogcarddgradient text-white border border-white flex items-center justify-center"
                                  >
                                    <CrossIcon />
                                  </button>
                                </div>
                                <div>
                                  <Dialog.Panel
                                    className="bg-white rounded-xl p-6 w-[635px] h-[814px] shadow-lg"
                                    style={{
                                      backgroundImage: `url(${newbg})`,
                                      backgroundRepeat: "no-repeat",
                                      backgroundSize: "cover",
                                      backgroundPosition: "center",
                                    }}
                                  >
                                  
                                     
                                    <div className="py-4 flex flex-col gap-4 items-center justify-center text-center">
                                        
                                        <div>
                                        <TickIcon/>
                                        </div>
                                        <h2 className="font-gordita font-medium text-[#1A1A1A] text-[68px]">
                                          Thank you
                                        </h2>
                                        <p className="font-gordita font-normal text-[#1A1A1A] text-[32px]">
                                          Your booking has been successfully Completed
                                        </p>
                                        <button className="rounded-full px-8 py-6 servicescardgradient border-2 border-dashed border-[#2573BA] "> 
                                          <span className="font-gordita font-normal text-[#1A1A1A] text-[30px]">
                                             Your Booking ID #258742
                                          </span>
                                        </button>
                                    </div>
                                  </Dialog.Panel>
                                </div>
                                landin
                              </div>
                            </div>
                          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPayPage;
