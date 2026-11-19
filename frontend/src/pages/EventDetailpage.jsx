import React from "react";
import {
  DatechartIcon,
  PlusIcon,
  MinusIcon,
  UpmarkIcon,
  LocationIcon,
  CalyIcon,
  TinyClock,
  SandWatch,
  ChingIcon,
  BackIcon,
  HeartIcon,
  Tick,
  GreenTick,
  Blackdot,
PlayIcon,
StarSign
} from "../Components/Iconsvg/Iconsvg";
import bglanding from "../assets/images/bglanding.png";
import detailsvideo from "../assets/images/detailsvideo.png";
import delimg1 from "../assets/images/delimg1.png";
import delimg2 from "../assets/images/delimg2.png";
import delimg3 from "../assets/images/delimg3.png";
import rev1 from "../assets/images/rev1.png";
import rev2 from "../assets/images/rev2.png";
import rev3 from "../assets/images/rev3.png";
import ratings from "../assets/images/ratings.png";
import detailscard from "../assets/images/detailscard.png";
import evendetails from "../assets/images/evendetails.png";

import locationimg from "../assets/images/locationimg.png";
import { Link } from "react-router-dom";

const EventDetailspage = () => {
  return (
    <div className="bg-[#F6F6F6]">
      <div className="py-2 px-10">
        {/* section one images and description */}

        {/* second section of the page */}
        <div className="py-2">
          <div className="grid grid-cols-6 gap-4 max-w-[1140px] mx-auto">
            {/* Left Section - Takes 4 out of 6 columns */}
            <div className="col-span-4 h-[700px]  overflow-y-scroll no-scrollbar">
              <div className="flex flex-col gap-2">
                {/* this is card one  */}
                <div className="w-full min-h-[1404px] bg-white">
                  <div className="pl-2 pr-10 py-4">
                    {/* imgage one */}
                    <div className="flex flex-col gap-3">
                      <div className="relative w-full  rounded-2xl ">
                        {/* image */}
                        <img
                          src={evendetails}
                          alt="eventdetails"
                          className="w-full h-full object-fit"
                        />

                        {/* Top-left icon */}
                        <div className="absolute inset-0 flex justify-between ">
                        <div className=" top-10 left-6 p-2">
                      <Link to="/event">
                          <BackIcon className="" />
                          </Link>
                        </div>

                        {/* Top-right icon */}
                        <div className="top-10 right-6 p-2">
                          <HeartIcon className="" />
                        </div>
                        </div>
                      </div>
                      <div className="w-full flex justify-between">
                        <div>
                          {" "}
                          <h1 className="font-gordita font-medium text-[24px] text-black">
                            Social Events
                          </h1>
                        </div>
                        <div>
                          <button className="border border-black/15 rounded-full px-6 py-2 flex items-center gap-2 w-full ">
                            <span className="font-normal font-gordita text-[14px] text-center">
                              Report
                            </span>
                          </button>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <div>
                          <LocationIcon />
                        </div>
                        <div className="font-gordita font-normal text-[16px] text-[#223743]">
                          974 Valencia St San Francisco, CA 94110
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <div className="pr-4 border-r-2 border-black ">
                          <div className="flex gap-2">
                            <h4 className="font-gordita font-medium text-[16px] text-black">
                              Duration:
                            </h4>
                            <span className="font-gordita font-normal text-[16px] text-black">
                              2 Days
                            </span>
                          </div>
                        </div>
                        <div className="px-4 border-r-2  border-black ">
                          <div className="flex gap-2">
                            <h4 className="font-gordita font-medium text-[16px] text-black">
                              Event Category:
                            </h4>
                            <span className="font-gordita font-normal text-[16px] text-black">
                              Officerly Event
                            </span>
                          </div>
                        </div>
                        <div className="pl-4 ">
                          <div className="flex gap-2">
                            <h4 className="font-gordita font-medium text-[16px] text-black">
                              Language:
                            </h4>
                            <span className="font-gordita font-normal text-[16px] text-black">
                              Hindi, English, Tamil
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="font-gordita font-regular text-[15px] text-[#223743] leading-[28px]">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesettin
                      </div>

                      {/* grid structure */}

                      <div className="grid grid-cols-2 gap-4">
                        {/* list one  */}
                        <div className="flex flex-col gap-2">
                          <h3 className="font-gordita font-medium text-[20px] text-black">
                            What's Included
                          </h3>

                          <div className="flex gap-3 font-gordita font-normal text-[18px] text-[#223743] items-center">
                            <GreenTick />
                            <span>Complimentary food and drinks</span>
                          </div>
                          <div className="flex gap-3 font-gordita font-normal text-[18px] text-[#223743] items-center">
                            <GreenTick />
                            <span>Welcome kit</span>
                          </div>
                          <div className="flex gap-3 font-gordita font-normal text-[18px] text-[#223743] items-center">
                            <GreenTick />
                            <span>Reserved seating</span>
                          </div>
                          <div className="flex gap-3 font-gordita font-normal text-[18px] text-[#223743] items-center">
                            <GreenTick />
                            <span>Access to all sessions</span>
                          </div>
                          <div className="flex gap-3 font-gordita font-normal text-[18px] text-[#223743] items-center">
                            <GreenTick />
                            <span>Event materials</span>
                          </div>
                          <div className="flex gap-3 font-gordita font-normal text-[18px] text-[#223743] items-center">
                            <GreenTick />
                            <span>Access to partner</span>
                          </div>
                          <div className="flex gap-3 font-gordita font-normal text-[18px] text-[#223743] items-center">
                            <GreenTick />
                            <span>Raffle tickets </span>
                          </div>
                        </div>
                        {/* list two */}
                        <div className="flex flex-col gap-2">
                          <h3 className="font-gordita font-medium text-[20px] text-black">
                            What to Bring
                          </h3>

                          <div className="flex gap-3 font-gordita font-normal text-[18px] text-[#223743] items-center">
                            <GreenTick />
                            <span>Personal toiletries</span>
                          </div>
                          <div className="flex gap-3 font-gordita font-normal text-[18px] text-[#223743] items-center">
                            <GreenTick />
                            <span>Change of clothes</span>
                          </div>
                          <div className="flex gap-3 font-gordita font-normal text-[18px] text-[#223743] items-center">
                            <GreenTick />
                            <span>Medications</span>
                          </div>
                          <div className="flex gap-3 font-gordita font-normal text-[18px] text-[#223743] items-center">
                            <GreenTick />
                            <span>Pillow or blanket</span>
                          </div>
                        </div>
                        {/* list three */}
                        <div className="flex flex-col gap-2">
                          <h3 className="font-gordita font-medium text-[20px] text-black">
                            Safety & Accessibility Info
                          </h3>

                          <div className="flex gap-3 font-gordita font-normal text-[18px] text-[#223743] items-center">
                            <GreenTick />
                            <span>Emergency Assistance</span>
                          </div>
                          <div className="flex gap-3 font-gordita font-normal text-[18px] text-[#223743] items-center">
                            <GreenTick />
                            <span>Health & Hygiene</span>
                          </div>
                          <div className="flex gap-3 font-gordita font-normal text-[18px] text-[#223743] items-center">
                            <GreenTick />
                            <span>Wheelchair Accessibility</span>
                          </div>
                          <div className="flex gap-3 font-gordita font-normal text-[18px] text-[#223743] items-center">
                            <GreenTick />
                            <span>Accessible Parking</span>
                          </div>
                          <div className="flex gap-3 font-gordita font-normal text-[18px] text-[#223743] items-center">
                            <GreenTick />
                            <span>Assistive Services</span>
                          </div>
                          <div className="flex gap-3 font-gordita font-normal text-[18px] text-[#223743] items-center">
                            <GreenTick />
                            <span>Safe & Inclusive Space</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h3 className="font-gordita font-medium text-[20px] text-black ">
                          Cancellation Policy
                        </h3>
                        <p className="font-gordita font-normal text-[15px] text-[#223743] ">
                          We understand that plans can change. Please review our
                          cancellation policy below:
                        </p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h3 className="font-gordita font-medium text-[20px] text-black ">
                          Cancellations by Attendees
                        </h3>
                        <div className="flex gap-2 items-center">
                          <Blackdot />
                          <p className="font-gordita font-normal text-[15px] text-[#223743] ">
                            We understand that plans can change. Please review
                            our cancellation policy below:
                          </p>
                        </div>
                        <div className="flex gap-2 items-center">
                          <Blackdot />
                          <p className="font-gordita font-normal text-[15px] text-[#223743] ">
                            Cancellations made 7 days or more before the event
                            will receive a full refund.
                          </p>
                        </div>
                        <div className="flex gap-2 items-center">
                          <Blackdot />
                          <p className="font-gordita font-normal text-[15px] text-[#223743] ">
                            Cancellations made within 7 days of the event are
                            non-refundable.
                          </p>
                        </div>
                        <div className="flex gap-2 items-center">
                          <Blackdot />
                          <p className="font-gordita font-normal text-[15px] text-[#223743] ">
                           
                            No-shows will not be refunded.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* card location on the left section loaction acrd this is the second card */}
                <div className="w-full min-h-[344px] bg-white">
                  {/*card second heading */}
                  <h1 className=" px-4 py-4 font-medium font-gordita text-[20px] text-black">
                    Location Map
                  </h1>
                  <div className="px-4 py-4">
                    <img
                      src={locationimg}
                      alt="location"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* card video left section */}
                <div className="w-full min-h-[257px] bg-white">
                  {/*card three heading */}
                  <h1 className=" px-4 py-4 font-medium font-gordita text-[20px] text-black">
                    Video
                  </h1>
                  <div className=" relative px-4 py-4">
                    <img
                      src={detailsvideo}
                      alt="Host"
                      className="w-full h-full object-cover"
                      
                    />
                    <div className="absolute inset-0 flex justify-center items-center">
                     <PlayIcon/>
                    </div>
                  </div>
                </div>
                {/* cards for imahges */}
                <div className="w-full min-h-[344px] bg-white">
                  {/*card three heading */}
                  <h1 className=" px-4 py-4 font-medium font-gordita text-[20px] text-black">
                    Images
                  </h1>
                  <div className="px-4 py-4 grid grid-cols-3 gap-3">
                    <div className="min-h-[235px]">
                      <img
                        src={delimg1}
                        alt="Host"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="min-h-[235px]">
                      <img
                        src={delimg2}
                        alt="Host"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="min-h-[235px]">
                      <img
                        src={delimg3}
                        alt="Host"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                {/* card six on the left side review section */}
                <div className="w-full min-h-[661px] bg-white">
                  {/*card three heading */}
                  <h1 className=" px-4 py-4 font-medium font-gordita text-[20px] text-black">
                    Guest Reviews
                  </h1>
                  {/* reviw 1 */}
                  <div className="px-4 py-4">
                    <div className="  border-b-[1px] border-[#E2E2E2]">
                      <div className="flex flex-col">
                        <div className="  flex justify-between items-center">
                          <div className="flex gap-4">
                            <div className="w-[70px] h-[70px] rounded-md">
                              <img
                                src={rev1}
                                alt="Host"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className=" flex flex-col py-2">
                              <div className="font-medium font-gordita text-[15px] text-black">
                                Floyd Miles
                              </div>
                              <div className="font-normal font-gordita text-[15px] text-[#060C0F] ">
                                August 13, 2024
                              </div>
                            </div>
                          </div>
                          {/* ratings */}
                          <div>
                            <img
                              src={ratings}
                              alt="Host"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <div className=" py-4 ">
                          <p className="font-normal font-gordita text-[15px] text-[#223743] leading-[26px]">
                            It's really easy to use and it is exactly what I am
                            looking for. A lot of good looking templates & it's
                            highly customizable. Live support is helpful, solved
                            my issue in no time.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* reviw 2*/}
                  <div className="px-4 py-4">
                    <div className="  border-b-[1px] border-[#E2E2E2]">
                      <div className="flex flex-col">
                        <div className="  flex justify-between items-center">
                          <div className="flex gap-4">
                            <div className="w-[70px] h-[70px] rounded-md">
                              <img
                                src={rev2}
                                alt="Host"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className=" flex flex-col py-2">
                              <div className="font-medium font-gordita text-[15px] text-black">
                                Floyd Miles
                              </div>
                              <div className="font-normal font-gordita text-[15px] text-[#060C0F] ">
                                August 13, 2024
                              </div>
                            </div>
                          </div>
                          {/* ratings */}
                          <div>
                            <img
                              src={ratings}
                              alt="Host"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <div className=" py-4 ">
                          <p className="font-normal font-gordita text-[15px] text-[#223743] leading-[26px]">
                            It's really easy to use and it is exactly what I am
                            looking for. A lot of good looking templates & it's
                            highly customizable. Live support is helpful, solved
                            my issue in no time.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* reviw 3*/}
                  <div className="px-4 py-4">
                    <div className="  border-b-[1px] border-[#E2E2E2]">
                      <div className="flex flex-col">
                        <div className="  flex justify-between items-center">
                          <div className="flex gap-4">
                            <div className="w-[70px] h-[70px] rounded-md">
                              <img
                                src={rev3}
                                alt="Host"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className=" flex flex-col py-2">
                              <div className="font-medium font-gordita text-[15px] text-black">
                                Floyd Miles
                              </div>
                              <div className="font-normal font-gordita text-[15px] text-[#060C0F] ">
                                August 13, 2024
                              </div>
                            </div>
                          </div>
                          {/* ratings */}
                          <div>
                            <img
                              src={ratings}
                              alt="Host"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <div className=" py-4">
                          <p className="font-normal font-gordita text-[15px] text-[#223743] leading-[26px]">
                            It's really easy to use and it is exactly what I am
                            looking for. A lot of good looking templates & it's
                            highly customizable. Live support is helpful, solved
                            my issue in no time.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Takes 2 out of 6 columns */}
            <div className="col-span-2 ">
              {/* div for card one  */}
              <div className="flex flex-col gap-2">
                <div className="w-full min-h-[291px] mx-auto detailcarddgradient px-4 py-4 ">
                  <div className="w-full min-h-[246px] mx-auto bg-white">
                    <div className="px-6 py-6 flex flex-col gap-2  border border-b border-[#EAEAEA]">
                      <div className="flex items-center gap-5">
                        <CalyIcon />
                        <span className="font-normal font-gordita text-[16px] text-black">
                          {" "}
                          27 May 2025
                        </span>
                      </div>
                      <div>
                        <div className="flex items-center gap-5">
                          <TinyClock />
                          <span className="font-normal font-gordita text-[16px] text-black">
                            {" "}
                            Event Start 7:30 PM
                          </span>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-5">
                          <ChingIcon />
                          <span className="font-normal font-gordita text-[16px] text-black">
                            {" "}
                            Hindi, English, Tamil
                          </span>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-6">
                          <SandWatch />
                          <span className="font-normal font-gordita text-[16px] text-black">
                            {" "}
                            1 Day Only
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="px-4 py-4 ">
                      <div className="flex justify-between flex-wrap gap-4">
                        <div>
                          <span className="font-gordita font-bold text-[30px] gradient-textheadingtilted ">
                            ₹2764
                          </span>
                        </div>
                        <div className="">
                          <button className="backgroundgradient text-white rounded-full px-6 py-2 flex items-center gap-2 w-full justify-center">
                            <span className="font-medium font-gordita text-[16px] text-center">
                              Book Now
                            </span>
                            <UpmarkIcon />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* div for card two */}
                <div className="w-full h-[400px] mx-auto bg-white ">
                  <div className=" p-5 text-center">
                    <div>
                      <span className="font-gordita font-bold text-[32px] gradient-textheadingtilted">
                        {" "}
                        Meet Event Host
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2 pb-6">
                    {/* Circular Image */}
                    <div className="w-[120px] h-[120px] rounded-full  ">
                      <img
                        src={detailscard}
                        alt="Host"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Name */}
                    <div className="font-gordita font-medium text-[22px] text-black">
                      Arlene McCoy
                    </div>

                    {/* Surname */}
                    <div className="flex gap-1 items-center font-gordita font-normal text-[16px] text-black">
                    <StarSign/>
                    
                    <span>4.7</span>
                    </div>

                    {/* Button */}
                    <div className="px-4">
                      <Link to="/messages">
                      <button className="backgroundgradient text-white rounded-full px-6 py-4 flex items-center gap-2 w-full justify-center">
                        <span className="font-medium font-gordita text-[20px] text-center">
                          Message Host
                        </span>
                        <UpmarkIcon />
                      </button>
                      </Link>
                    </div>
                     <div className="px-4">
                      <div className="flex gap-2 items-center font-gordita font-normal text-[20px] text-black">
                      Call:<span>9988555665</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailspage;
