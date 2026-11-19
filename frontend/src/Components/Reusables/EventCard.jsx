import React from "react";
import { ButtonClick, LocationIcon, UpmarkIcon,MemberIcon,ArrowIconBlue ,CalenderIcon,DatechartIcon } from "../Iconsvg/Iconsvg";
import { Link } from "react-router-dom";
import Datepicker from "./Datepicker";
import { StarSign } from "../Iconsvg/Iconsvg";
const EventCard = ({ image, title, description,rating, onClick ,showinfo ,showmemberlist ,date, showdetailsbtn, showbookingbtn,guestsidebtn}) => {
  return (
    <div className=" relative bg-white rounded-2xl shadow-xl pt-4 px-4 flex flex-col items-start text-left w-full  mx-auto ">
     {rating &&(
      <div className="absolute top-5 left-8 bg-white shadow-md  px-3 py-1 text-center">
    <div className="flex gap-2 items-center">

<StarSign/>
<div  className="font-gordita font-medium text-[15px] text-black ">
  4.7
</div>
      </div>
    </div>

     )}
     
     
      {date && (
    <div className="absolute top-5 right-8 bg-white shadow-md  px-3 py-1 text-center">
     <Datepicker
                          variant="strip"
                          icon={<DatechartIcon />}
                          placeholder="Select Date"
                        />
    </div>
  )}
      <img
        src={image}
        alt={title}
        className="rounded-xl w-full h-60 object-cover mb-4"
      />
      <h3 className="font-gordita font-bold text-[24px] text-black text-left truncate">
        {title}
      </h3>
   
      <div className="flex items-center gap-2 ">
        <span>
          <LocationIcon />
        </span>
        <span>974 Valencia St San Francisco, CA 94110</span>
      </div>
      {showinfo &&(
<>

       <div className="flex items-center gap-1 ">
        <span>Duration:</span>
        <span>2 days</span>
      </div>
      <div className="flex items-center  gap-1">
        <span>Event Category:</span>
        <span>Officerly Event</span>
      </div>
      <div className="flex items-center gap-1">
        <span>Language:</span>
        <span>Hindi, English, Tamil</span>
      </div>
      <div className="flex items-center">
        <span className="font-gordita font-bold text-[22px] gradient-eventcard">
          ₹3,000
        </span>
      </div>
</>
  
      )}
     
     {showmemberlist &&(
<>

      <div className=" py-2 flex gap-2 items-center">
      <MemberIcon/>
      <Link to="/member-list">
      <div className="font-gordita font-medium text-[16px] text-[#2674BA]"> Show Member List</div>
      </Link>
<ArrowIconBlue/>
      </div>
</>
  
      )}
     
      {/*  Button */}
      {showbookingbtn && (

        <div className="w-full mx-auto mb-4 mt-4">
  <Link to="/event-details">
        <button
          className="backgroundgradient text-white rounded-full px-6 py-2 flex items-center gap-2 w-full justify-center"
          onClick={onClick}
        >
          <span className="font-medium font-gordita text-[18px] text-center">
            Book Event
          </span>
          <UpmarkIcon />
        </button>
        </Link>
      </div>
      )}

      {/* button guest side */}
       {showdetailsbtn && (

        <div className="w-full mx-auto mb-4 mt-4">
  <Link to="/event-details">
        <button
          className="backgroundgradient text-white rounded-full px-6 py-4 flex items-center gap-2 w-full justify-center"
          onClick={onClick}
        >
          <span className="font-medium font-gordita text-[18px] text-center">
          View Details
          </span>
          <UpmarkIcon />
        </button>
        </Link>
      </div>
      )}
        {/*  Button guset side */}
        {guestsidebtn && (
  <div className="flex flex-col xxl:flex-row w-full gap-4 mb-4 mt-4">
    <div className="flex-1 w-full">
      <Link to="/event-details">
        <button
          className="backgroundgradient text-white rounded-full px-6 py-4 flex items-center gap-2 w-full justify-center"
          onClick={onClick}
        >
          <span className="font-medium font-gordita text-[18px] text-center whitespace-nowrap">
            View Details
          </span>
        </button>
      </Link>
    </div>
    <div className="flex-1 w-full">
      <button
        className="bg-black text-white rounded-full px-6 py-4 flex items-center gap-2 w-full justify-center"
        onClick={onClick}
      >
        <span className="font-medium font-gordita text-[18px] text-center whitespace-nowrap">
          Sent Invite
        </span>
      </button>
    </div>
  </div>
)}

    </div>
  );
};

export default EventCard;
