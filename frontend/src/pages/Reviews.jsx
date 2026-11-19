import React from "react";
import Sidebar from "../Components/Reusables/Sidebar";
import msg1 from "../assets/images/msg1.png";
import msg2 from "../assets/images/msg2.png";
import msg3 from "../assets/images/msg3.png";
import msg4 from "../assets/images/msg4.png";
import msg5 from "../assets/images/msg5.png";
import review from "../assets/images/review.png";
import { HutIcon ,Ratings } from "../Components/Iconsvg/Iconsvg";
const messages = [
  {
    name: "Jack Smith",
    eventname: "Skyper Pool Apartment",
    date:"August 13, 2024",
    time: "10 min ago",
    message:
      "The Host Was Very Pending. The Area Is Super Quiet And The Apartment Is Bigger Than It Looks. I Just Think To Be A Luxury Listed Accommodation There Was A Lack Of Detail In Cleanliness. You Can Tell The Cleanliness Was Very Shallow And There Was Dirt Left In The Kitchen And Bathrooms.",
    image: review,
  },
  {
    name: "Jack Smith",
    eventname: "Skyper Pool Apartment",
    time: "10 min ago",
     date:"August 13, 2024",
    message:
      "The Host Was Very Pending. The Area Is Super Quiet And The Apartment Is Bigger Than It Looks. I Just Think To Be A Luxury Listed Accommodation There Was A Lack Of Detail In Cleanliness. You Can Tell The Cleanliness Was Very Shallow And There Was Dirt Left In The Kitchen And Bathrooms.",
    image: review,
  },
  {
    name: "Jack Smith",
    eventname: "Skyper Pool Apartment",
    time: "10 min ago",
     date:"August 13, 2024",
    message:
      "The Host Was Very Pending. The Area Is Super Quiet And The Apartment Is Bigger Than It Looks. I Just Think To Be A Luxury Listed Accommodation There Was A Lack Of Detail In Cleanliness. You Can Tell The Cleanliness Was Very Shallow And There Was Dirt Left In The Kitchen And Bathrooms.",
    image: review,
  },
  {
    name: "Jack Smith",
    eventname: "Skyper Pool Apartment",
    time: "10 min ago",
     date:"August 13, 2024",
    message:
      "The Host Was Very Pending. The Area Is Super Quiet And The Apartment Is Bigger Than It Looks. I Just Think To Be A Luxury Listed Accommodation There Was A Lack Of Detail In Cleanliness. You Can Tell The Cleanliness Was Very Shallow And There Was Dirt Left In The Kitchen And Bathrooms.",
    image: review,
  },
  {
    name: "Jack Smith",
    eventname: "Skyper Pool Apartment",
    time: "10 min ago",
     date:"August 13, 2024",
    message:
      "The Host Was Very Pending. The Area Is Super Quiet And The Apartment Is Bigger Than It Looks. I Just Think To Be A Luxury Listed Accommodation There Was A Lack Of Detail In Cleanliness. You Can Tell The Cleanliness Was Very Shallow And There Was Dirt Left In The Kitchen And Bathrooms.",
    image: review,
  },
  {
    name: "Jack Smith",
    eventname: "Skyper Pool Apartment",
    time: "10 min ago",
     date:"August 13, 2024",
    message:
      "The Host Was Very Pending. The Area Is Super Quiet And The Apartment Is Bigger Than It Looks. I Just Think To Be A Luxury Listed Accommodation There Was A Lack Of Detail In Cleanliness. You Can Tell The Cleanliness Was Very Shallow And There Was Dirt Left In The Kitchen And Bathrooms.",
    image: review,
  },
  {
    name: "Jack Smith",
    eventname: "Skyper Pool Apartment",
    time: "10 min ago",
     date:"August 13, 2024",
    message:
      "The Host Was Very Pending. The Area Is Super Quiet And The Apartment Is Bigger Than It Looks. I Just Think To Be A Luxury Listed Accommodation There Was A Lack Of Detail In Cleanliness. You Can Tell The Cleanliness Was Very Shallow And There Was Dirt Left In The Kitchen And Bathrooms.",
    image: review,
  },
  {
    name: "Jack Smith",
    eventname: "Skyper Pool Apartment",
    time: "10 min ago",
     date:"August 13, 2024",
    message:
      "The Host Was Very Pending. The Area Is Super Quiet And The Apartment Is Bigger Than It Looks. I Just Think To Be A Luxury Listed Accommodation There Was A Lack Of Detail In Cleanliness. You Can Tell The Cleanliness Was Very Shallow And There Was Dirt Left In The Kitchen And Bathrooms.",
    image: review,
  },
  {
    name: "Jack Smith",
    eventname: "Skyper Pool Apartment",
    time: "10 min ago",
     date:"August 13, 2024",
    message:
      "The Host Was Very Pending. The Area Is Super Quiet And The Apartment Is Bigger Than It Looks. I Just Think To Be A Luxury Listed Accommodation There Was A Lack Of Detail In Cleanliness. You Can Tell The Cleanliness Was Very Shallow And There Was Dirt Left In The Kitchen And Bathrooms.",
    image: review,
  },
];

const Reviews = () => {
  return (
    <>
      <Sidebar>
        <div className="pt-2 pl-8">
          <div className="w-full h-screen reviewcardgradient  rounded-tl-2xl overflow-y-scroll  no-scrollbar">
            <div className="px-10 pt-10 flex flex-col gap-3">
              {messages.map((msg, index) => (
                <div className="w-full h-[217px] bg-white rounded-2xl">
                  <div className="p-8 flex gap-4">
                    
                    <img
                      src={msg.image}
                      alt={msg.name}
                      className="w-18 h-18 rounded-xl object-cover"
                    />
                      <div className="flex justify-between items-start w-full">
      {/* Left column: name / event / date */}
      <div className="flex flex-col">
        <div className="flex items-center gap-4">
          {/* Name with vertical separator */}
          <div className="flex items-center border-r-3 border-black pr-4">
            <span className="font-gordita font-medium text-[18px] text-black">
           {msg.name}
            </span>
          </div>

          {/* Event name with icon */}
          <div className="flex items-center gap-1">
            <HutIcon className="w-5 h-5 text-[#2674BA]" />
            <span className="font-gordita font-medium text-[18px] text-[#2674BA]">
              {msg.eventname}
            </span>
          </div>
        </div>

        {/* Date underneath */}
        <div className="mt-1 text-[15px] text-[#060C0F] font-gordita font-normal">
         {msg.date}
        </div>
      </div>

      {/* Right column: star rating */}
      <div className="flex items-center gap-1">
       <Ratings/>
      </div>
    </div>
                  </div>
                 <div className="px-8 font-gordita font-normal text-[18px] text-[#162838] leading-[25px]">
                  {msg.message}
                 </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Sidebar>
    </>
  );
};

export default Reviews;
