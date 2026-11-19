import React from "react";
import { useState } from "react";
import {
  PaybackIcon,
  Credit,
  DownwardIcon,
  UpmarkIcon,
  LocationIcon,
  Ratings,
  Profie,
  Letter,
  Cell,
  MinusIcon,
  PlusIcon,
  TickIcon
} from "../Components/Iconsvg/Iconsvg";
import { Dialog } from "@headlessui/react";
import newbg from "../assets/images/newbg.jpg";
import { CrossIcon } from "../Components/Iconsvg/Iconsvg";
import paymini from "../assets/images/paymini.png";
const PaymentPage = () => {

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
          <div className="col-span-1 bg-white min-h-[965px]">
            <div className="py-4 px-12">
              <div className="flex items-center gap-4 font-gordita font-medium text-[30px] text-[#1A1A1A]">
                <span>
                  <PaybackIcon />
                </span>
                Confirm And Pay
              </div>
             <div className="py-6"> 
              <div className="max-w-[476px] mx-auto">
                <div className="border border-[#C8C8C8] rounded-sm text-left p-4 ">
                  <h3 className="pl-2 font-gordita font-medium text-[#1A1A1A] text-[20px]">
                    Guest Info
                  </h3>
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-2 items-center">
                      <Profie />
                      <span className="font-gordita font-normal text-[#1A1A1A] text-[18px] leading-[22px]">
                        Jack Smith
                      </span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <Cell />
                      <span className="font-gordita font-normal text-[#1A1A1A] text-[18px] leading-[22px]">
                        +91 9876543210
                      </span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <Letter />
                      <span className="font-gordita font-normal text-[#1A1A1A] text-[18px] leading-[22px]">
                        jackSmith12345@gmail.com
                      </span>
                    </div>
                  </div>
                </div>
              </div>
               <div className="mx-auto max-w-[476px] flex  gap-2 w-full pt-2 pb-2">
                <div className="border border-[#C8C8C8] rounded-sm text-left p-4 w-[232px]">
                  <div className="font-gordita font-medium text-[#1A1A1A] text-[20px]">
                  Dates
                  </div>
                  <div className="font-gordita font-normal text-[#1A1A1A] text-[18px]">
                  27 May 2025
                  </div>
                </div>
                <div className="border border-[#C8C8C8] rounded-sm text-left p-4 w-[232px] ">
                  <div className="font-gordita font-medium text-[#1A1A1A] text-[20px]">
                   Time
                  </div>
                  <div className="font-gordita font-normal text-[#1A1A1A] text-[18px]">
                    {" "}
                  7:30 PM
                  </div>
                </div>
              </div>
              <div className="max-w-[476px] mx-auto">
                <div className="border border-[#C8C8C8] rounded-sm text-left p-4 ">
                     <div className="flex justify-between items-center">
                      <div className="font-gordita font-medium text-[#1A1A1A] text-[20px]">
                        Number of Attendees
                      </div>
                       <div className="flex items-center gap-4">
                                                     {/* Decrement Button */}
                                                     <button className="w-8 h-8 rounded-full backgroundgradient text-white flex items-center justify-center">
                                                       <MinusIcon />
                                                     </button>
                     
                                                     {/* Number Display */}
                                                     <div className="font-gordita font-medium text-[18px] text-black">
                                                       1
                                                     </div>
                     
                                                     {/* Increment Button */}
                                                     <button className="w-8 h-8 rounded-full backgroundgradient text-white  flex items-center justify-center">
                                                       <PlusIcon />
                                                     </button>
                                                   </div>

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
                      Card Number
                    </div>
                    <div className="font-gordita font-bold text-[#1A1A1A] text-[14px]">
                      1234 5678 9012 3456
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-auto max-w-[476px] flex  gap-2 w-full pt-2 pb-2">
                <div className="border border-[#C8C8C8] rounded-sm text-left p-4 w-[232px]">
                  <div className="font-gordita font-light text-[#1A1A1A] text-[14px]">
                    Expiration
                  </div>
                  <div className="font-gordita font-normal text-[#1A1A1A] text-[14px]">
                    MM/YY
                  </div>
                </div>
                <div className="border border-[#C8C8C8] rounded-sm text-left p-4 w-[232px] ">
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
                      onClick={() => handleOpenDialog()}>
                      <span className="font-medium font-gordita text-[20px] text-center">
                        Confirm And Pay
                      </span>
                      <UpmarkIcon />
                    </button>
                  </div>

                </div>
                <p className=" text-left font-gordita font-normal text-[#1A1A1A] text-[18px] py-2">
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
          </div>
          {/* slip two */}
          <div className="col-span-1 bg-white h-[460px] detailcarddgradient">
            <div className="px-12 py-2">
              <div className="flex flex-col gap-2">
                <div className="w-full min-h-[130px] bg-white mx-auto px-4 py-4">
                  <div className="flex gap-4 items-center">
                    <div className="w-[101px] h-[98px] rounded-md">
                      <img
                        src={paymini}
                        alt="Host"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex flex-col gap-1 text-left">
                      <div className="font-gordita font-medium text-[18px] text-[#1A1A1A]">
                        Skyper Pool Apartment
                      </div>
                      <div className="flex gap-1">
                        <div>
                          <LocationIcon />
                        </div>
                        <div className="font-gordita font-normal text-[14px] text-[#1A1A1A]">
                          974 Valencia St San Francisco, CA 94110
                        </div>
                      </div>
                      
                      <div></div>
                    </div>
                    <div></div>
                  </div>
                </div>

                <div className="w-full min-h-[236px] bg-white mx-auto px-4 py-4">
                  <h1 className="font-gordita font-medium text-[22px] text-[#1A1A1A] text-left">
                    Your Total
                  </h1>
                
                  
                
                  <div className="py-2">
                    <div className="border-b-[1px] border-[#E2E2E2] py-2">
                       <div className="flex justify-between items-center">
                        <div className="font-gordita font-normal text-[20px] text-black">
                        Social Event:
                        </div>
                        <div className="font-gordita font-normal text-[20px] text-black">
                         ₹2764
                        </div>
                      </div>
                      <div className=" py-2 flex justify-between items-center">
                        <div className="font-gordita font-normal text-[20px] text-black">
                          Tax
                        </div>
                        <div className="font-gordita font-normal text-[20px] text-black">
                      ₹400
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="py-2">
                    <div className="flex justify-between items-center">
                      <div className="font-gordita font-normal text-[20px] text-black">
                        Total:
                      </div>
                      <div className="font-gordita font-normal text-[20px] text-black">
                        ₹3164
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
                            backgroundSize: "contain",
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
                    
                    </div>
                  </div>
                </Dialog>
      </div>
    </div>
  );
};

export default PaymentPage;
