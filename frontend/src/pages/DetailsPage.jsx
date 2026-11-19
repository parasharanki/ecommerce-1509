import React from "react";
import {
  DatechartIcon,
  PlusIcon,
  MinusIcon,
  UpmarkIcon,
  HouseIcon,
  CarCarrierIcon,
  HammerIcon,
  ScaleIcon,
  BedIcon,
  ShowerIcon,
  LinkIcon,
  CalenderIcon,
  Ambassador,
  Nanny,
  Tick,
  Upmarkblack,
  PlayIcon,
  Ratings,
  WhiteTick,
  CarIcon,
} from "../Components/Iconsvg/Iconsvg";
import bglanding from "../assets/images/bglanding.png";
import Booking from "../assets/images/Booking.png";
import dimg1 from "../assets/images/dimg1.png";
import dimg2 from "../assets/images/dimg2.png";
import dimg3 from "../assets/images/dimg3.png";
import dimg4 from "../assets/images/dimg4.png";
import rev1 from "../assets/images/rev1.png";
import ratings from "../assets/images/ratings.png";
import rev2 from "../assets/images/rev2.png";
import rev3 from "../assets/images/rev3.png";
import detailscard from "../assets/images/detailscard.png";
import locationimg from "../assets/images/locationimg.png";
import videoimage from "../assets/images/videoimage.png";
import { Link } from "react-router-dom";
import { Box, Typography, LinearProgress } from "@mui/material";
import { useState } from "react";
import Datepicker from "../Components/Reusables/Datepicker";
import Counter from "../Components/Reusables/Counter";
import { useLocation } from "react-router-dom";
import DialogFeedback from "../Components/Reusables/DialogFeedback";
import SubmitDialog from "../Components/Reusables/SubmitDialog";
const DetailsPage = ({oldbuttons,newbuttons}) => {
  // for the check box
  const [checkedOne, setCheckedOne] = useState(false);
  const [checkedTwo, setCheckedTwo] = useState(false);
  const [checkedThree, setCheckedThree] = useState(false);
  const [checkedFour, setCheckedFour] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [isSubmitDialogOpen, setIsSubmitDialogOpen] =useState(false)
  // for the progress bar
  const ratings = [
    { label: "Comfortable", value: 3.4 },
    { label: "Cleanliness", value: 4.8 },
    { label: "Facilities", value: 4.5 },
  ];
  const maxRating = 5;

  const StyledBar = ({ label, value }) => (
    <Box sx={{ mb: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}>
        <Typography
          variant="body2"
          color="white"
          className="font-gordita font-normal text-[14px] text-white "
        >
          {label}
        </Typography>
        <Typography variant="body2" color="white">
          {value.toFixed(1)}
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={(value / maxRating) * 100}
        sx={{
          height: 6,
          borderRadius: 5,
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          "& .MuiLinearProgress-bar": {
            backgroundColor: "#ffffff",
          },
        }}
      />
    </Box>
  );

  // for conditional rendering buttons
const location = useLocation();
const fromGuestTrip = location.state?.fromGuestTrip;
  return (
    <div className="bg-[#F6F6F6]">
      <div className="py-4 px-2 md:px-10">
        {/* section one images and description */}
     
        <div className="max-w-[1140px] mx-auto px-4 py-4 bg-white h-auto">
          {/* card structure text images description */}
          <div className="flex flex-col gap-4">
            {/* text & price div one*/}
            <div className="flex justify-between items-center">
              {/* text dark abd light vertical */}
              <div className="flex flex-col gap-2">
                <div className="font-gordita font-medium text-headingblack text-[20px] sm:text-[26] md:text-[30px]">
                  Skyper Pool Apartment
                </div>
                <div className="font-gordita font-normal text-[#223743]   text-[10px] sm:text-[12] md:text-[16px]">
                  974 Valencia St San Francisco, CA 94110
                </div>
              </div>
              {/* price money */}
              <div className="font-gordita font-bold gradient-numeric text-[20px] sm:text-[26px] md:text-[30px]">
                ₹24,764
                <span className="font-gordita font-normal text-black text-[10px] sm:text-[12px] md:text-[16px] leading-[10px]">
                  /for 5 Days
                </span>
              </div>
            </div>
            {/* images grdid structure */}
            <div className="max-w-[1110px] ">
              <div className="flex  gap-2 mx-7xl">
                {/* Left Image */}
                <div className="max-w-[486px] max-h-[489px]">
                  <img
                    src={dimg1}
                    alt="Left"
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>

                {/* Right Side */}
                <div className="grid grid-rows-2 gap-2 h-full">
                  {/* Top right image */}
                  <div className="max-w-[616px] max-h-[239px]">
                    <img
                      src={dimg2}
                      alt="Top Right"
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>

                  {/* Bottom right images (side by side) */}
                  <div className="grid grid-cols-2 gap-2 max-w-[616px] max-h-[239px]">
                    <img
                      src={dimg3}
                      alt="Bottom Left"
                      className="w-full h-full object-contain rounded-lg"
                    />
                    <img
                      src={dimg4}
                      alt="Bottom Right"
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* description */}
            <div className="max-w-[1110px]">
              <h1 className="pt-3 font-gordita font-medium text-[20px] text-black">
                Property Description
              </h1>
              <p className="pt-1 pb-4 font-gordita font-regular text-[15px] text-[#223743] leading-[28px] capitalize  line-clamp-4 md:line-clamp-none">
                This 3-bed with a loft, 2-bath home in the gated community of
                The Hideout has it all. From the open floor plan to the
                abundance of light from the windows, this home is perfect for
                entertaining. The living room and dining room have vaulted
                ceilings and a beautiful fireplace. You will love spending time
                on the deck taking in the beautiful views. In the kitchen,
                you'll find stainless steel appliances and a tile backsplash, as
                well as a breakfast bar. Placeholder content for this accordion,
                which is intended to demonstrate the class. This is the first
                item's accordion body you get groundbreaking performance and
                amazing battery life. Add to that a stunning Liquid Retina XDR
                display.
              </p>
            </div>
          </div>
        </div>
        {/* this is the section whicjh is below the md screens /responsive addition one*/}
<div className=" flex flex-col sm:flex-row  max-w-[1140px] pt-4 gap-2  md:hidden ">
 <div className="w-full h-[350px]  mx-auto detailsgradientRatings  ">
                  <div className="px-5 py-8">
                    <h1 className="font-gordita font-bold text-[24px] text-white">
                      Rating and reviews
                    </h1>
                    <div className="flex items-center gap-2">
                      <div className="font-gordita font-bold text-[50px] text-white">
                        4.0
                      </div>
                      <div className="flex flex-col">
                        <div>
                          <Ratings />
                        </div>
                        <div className="font-gordita font-normal text-[18px] text-white">
                          Based on 100 reviewers
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 pb-8">
                      {" "}
                      <Box
                        sx={{ width: "100%", maxWidth: 350, color: "white" }}
                      >
                        {ratings.map((item, i) => (
                          <StyledBar
                            key={i}
                            label={item.label}
                            value={item.value}
                          />
                        ))}
                      </Box>
                    </div>
                  </div>
                </div>
                <div className="w-full h-[350px] mx-auto bg-white ">
                  <div className=" p-1 text-center">
                    <div>
                      <span className="font-gordita font-bold text-[28px] md:text-[32px] gradient-textheadingtilted">
                        {" "}
                        Meet Your Host
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-3 pb-6">
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
                    <div className="font-gordita font-normal text-[16px] text-black">
                     Host
                    </div>

                    {/* Button */}
                    <div className="px-4">
                      <button className="backgroundgradient text-white rounded-full px-6 py-2 md:py-4 flex items-center gap-2 w-full justify-center">
                        <span className="font-medium font-gordita text-[16px] md:[20px] text-center">
                          Message Host
                        </span>
                        <UpmarkIcon />
                      </button>
                    </div>
                  </div>
                </div>
</div>
 {/* this is the section whicjh is below the md screens /responsive addition two*/}
<div className=" flex max-w-[1140px] pt-4 gap-2  md:hidden ">
   <div className=" w-full min-h-[885px]  mx-auto detailcarddgradient  ">
                  {/* div for making the background opaque */}
                  <div className=" ">
                    {/* heading */}
                    <div className="flex flex-col gap-2">
                      <div className="py-2 text-center">
                        <span className=" font-gordita font-bold text-[40px] gradient-numericdetails">
                          ₹29,564
                        </span>
                      </div>

                      {/* Strip 1 */}
                      <div className="px-6">
                        <Datepicker
                          variant="bar"
                          icon={<DatechartIcon />}
                          placeholder="Select Date"
                          checkinLabel="CHECK IN"
                        />
                      </div>
                      {/* strip 2 */}
                      <div className="px-6">
                        <Datepicker
                          variant="bar"
                          icon={<DatechartIcon />}
                          placeholder="Select Date"
                           checkinLabel="CHECK OUT"
                        />
                      </div>
                      {/* strip 3 */}
                      <div className="px-6">
                        <div className="w-full min-h-[68px] bg-white mx-auto px-4 py-4">
                          <div className="flex flex-wrap justify-between items-center">
                            <div className="flex flex-col gap-1 text-left">
                              <div className="font-gordita font-medium text-[16px] text-black">
                                Adults
                              </div>
                              <div className="font-gordita font-regular text-[12px] text-black">
                                Age 13+
                              </div>
                            </div>
                            <div>
                           <Counter initial={1} min={1} max={10} />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* strip 4 */}
                      <div className="px-6">
                        <div className="w-full min-h-[68px] bg-white mx-auto px-4 py-4">
                          <div className="flex flex-wrap justify-between items-center">
                            <div className="flex flex-col gap-1 text-left">
                              <div className="font-gordita font-medium text-[16px] text-black">
                                Children
                              </div>
                              <div className="font-gordita font-regular text-[12px] text-black">
                                Ages 2-12
                              </div>
                            </div>
                            <div>
                                <Counter initial={1} min={1} max={10} />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* strip 5 */}
                      <div className="px-6">
                        <div className="w-full min-h-[68px] bg-white mx-auto px-4 py-4">
                          <div className="flex flex-wrap justify-between items-center">
                            <div className="flex flex-col gap-1 text-left">
                              <div className="font-gordita font-medium text-[16px] text-black">
                                Infants
                              </div>
                              <div className="font-gordita font-regular text-[12px] text-black">
                                Under 2
                              </div>
                            </div>
                            <div>
                              <Counter initial={1} min={1} max={10} />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* strip 6 content div */}
                      <div className="px-6">
                        <div className="w-full min-h-[303px] bg-white mx-auto px-4 py-4">
                          <div className="flex justify-between border-b-[1px] border-[#E2E2E2] py-2">
                            <div className="font-gordita font-medium text-[16px] text-black">
                              Villa
                            </div>
                            <div className="font-gordita font-regular text-[14px] text-black">
                              5 Days
                            </div>
                            <div className="font-gordita font-medium text-[16px] text-black">
                              ₹24,764
                            </div>
                          </div>
                          <div className="py-2">
                            <div className="border-b-[1px] border-[#E2E2E2] py-2">
                              <h1 className="font-gordita font-medium text-[18px] text-black">
                                Extra Features
                              </h1>
                              <div className="flex justify-between items-center py-2">
                                <div className="flex flex-col">
                                  <div className="font-gordita font-regular text-[16px] text-black">
                                    Self-Drive Car:
                                  </div>
                                  <div className="font-gordita font-regular text-[14px] text-[#223743]">
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
                                  <div className="font-gordita font-regular text-[16px] text-black">
                                    Maid/Housekeeping:
                                  </div>
                                  <div className="font-gordita font-regular text-[14px] text-[#223743]">
                                    3 Days
                                  </div>
                                </div>
                                <div className="font-gordita font-medium text-[18px] text-black">
                                  ₹1500
                                </div>
                              </div>
                            </div>
                          </div>
                        
                          <div className="py-2">
                            <div className="flex justify-between items-center">
                              <div className="font-gordita font-regular text-[14px] text-black">
                                Total:
                              </div>
                              <div className="font-gordita font-medium text-[16px] text-black">
                                ₹29,564
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* button */}
                  
                     {!fromGuestTrip && (
  <div className="px-6 py-6">
    <div className="w-full mx-auto">
      <Link to="/payment">
        <button className="backgroundgradient text-white rounded-full px-6 py-4 flex items-center gap-2 w-full justify-center">
          <span className="font-medium font-gordita text-[20px] text-center">
            Reserve
          </span>
          <UpmarkIcon />
        </button>
      </Link>
    </div>
  </div>
)}
                    {fromGuestTrip && (
  <> 
  <div className="pb-6">
    <div className="px-6 pt-2">
      <button className="backgroundgradient text-white rounded-full px-6 py-3 flex items-center gap-2 w-full justify-center" onClick={() => { setIsFeedbackOpen(true); }}>
        <span className="font-medium font-gordita text-[20px] text-center">
         Reserve Again
        </span>
        <UpmarkIcon />
      </button>
    </div>

    <div className="px-6 pt-2">
      <button className="bg-black text-white rounded-full px-6 py-3 flex items-center gap-2 w-full justify-center">
        <span className="font-medium font-gordita text-[20px] text-center">
         Send Feedback
        </span>
        <UpmarkIcon />
      </button>
    </div>
    </div>
  </>
)}


                      {/* newbuttons for guest side page */}
                       {(newbuttons &&
                      <div className="px-6 py-4">
                        <div className="w-full mx-auto">
                          <Link to="/payment">
                            <button className="backgroundgradient text-white rounded-full px-6 py-3 flex items-center gap-2 w-full justify-center">
                              <span className="font-medium font-gordita text-[20px] text-center">
                                Reserve Again
                              </span>
                              <UpmarkIcon />
                            </button>
                          </Link>
                        </div>
                      </div>
                      )}
                    </div>
                  </div>
                </div>
           
</div>
        {/* second section of the page */}
        <div className="pt-4 pb-12">
          <div className="grid grid-cols-6 gap-4 max-w-[1140px] mx-auto">
            {/* Left Section - Takes 4 out of 6 columns */}
            <div className="col-span-6 md:col-span-4 overflow-y-auto md:overflow-y-scroll no-scrollbar h-[1719px]">
              <div className="flex flex-col gap-3">
                {/* card one of left section */}
                <div className="w-full min-h-[273px] bg-white">
                  {/*card one heading */}
                  <h1 className=" px-4 py-4 font-medium font-gordita text-[20px] text-black">
                    Overview
                  </h1>
                  <div className=" px-4 py-2 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10">
                    {/* ID */}
                    <div className="flex items-center gap-3 ">
                      <div className="w-[65px] h-[65px] border border-[#0E1C25]/23 rounded-lg flex items-center justify-center">
                        <HouseIcon />
                      </div>

                      <div>
                        <div className="font-gordita font-normal text-[16px] text-[#223743]">
                          ID:
                        </div>
                        <div className="font-gordita font-medium text-[16px] text-black">
                          22896
                        </div>
                      </div>
                    </div>

                    {/* Type */}
                    <div className="flex items-center gap-3 ">
                      <div className="w-[65px] h-[65px] border border-[#0E1C25]/23 rounded-lg flex items-center justify-center">
                        <LinkIcon />
                      </div>
                      <div>
                        <div className="font-gordita font-normal text-[16px] text-[#223743]">
                          Type:
                        </div>
                        <div className="font-gordita font-medium text-[16px] text-black">
                          Villa
                        </div>
                      </div>
                    </div>

                    {/* Garages */}
                    <div className="flex items-center gap-3 ">
                      <div className="w-[65px] h-[65px] border border-[#0E1C25]/23 rounded-lg flex items-center justify-center flex-1">
                        <CarCarrierIcon />
                      </div>
                      <div className="flex-1">
                        <div className="font-gordita font-normal text-[16px] text-[#223743]">
                          Garages:
                        </div>
                        <div className="font-gordita font-medium text-[16px] text-black">
                          1
                        </div>
                      </div>
                    </div>

                    {/* Bedrooms */}
                    <div className="flex items-center gap-3 ">
                      <div className="w-[65px] h-[65px] border border-[#0E1C25]/23 rounded-lg flex items-center justify-center flex-1">
                        <BedIcon />
                      </div>
                      <div className="flex-1">
                        <div className="font-gordita font-normal text-[16px] text-[#223743]">
                          Bedrooms:
                        </div>
                        <div className="font-gordita font-medium text-[16px] text-black">
                          1
                        </div>
                      </div>
                    </div>

                    {/* Bathrooms */}
                    <div className="flex items-center gap-3 ">
                      <div className="w-[65px] h-[65px] border border-[#0E1C25]/23 rounded-lg flex items-center justify-center">
                        <ShowerIcon />
                      </div>
                      <div>
                        <div className="font-gordita font-normal text-[16px] text-[#223743]">
                          Bathrooms:
                        </div>
                        <div className="font-gordita font-medium text-[16px] text-black">
                          2 Rooms
                        </div>
                      </div>
                    </div>

                    {/* Land Size */}
                    <div className="flex items-center gap-3">
                      <div className="w-[65px] h-[65px] border border-[#0E1C25]/23 rounded-lg flex items-center justify-center">
                        <ScaleIcon />
                      </div>
                      <div>
                        <div className="font-gordita font-normal text-[16px] text-[#223743]">
                          Land Size:
                        </div>
                        <div className="font-gordita font-medium text-[16px] text-black">
                          2000 Sqft
                        </div>
                      </div>
                    </div>

                    {/* Year Built */}
                    <div className="flex items-center gap-3 ">
                      <div className="w-[65px] h-[65px] border border-[#0E1C25]/23 rounded-lg flex items-center justify-center">
                        <HammerIcon />
                      </div>
                      <div>
                        <div className="font-gordita font-normal text-[16px] text-[#223743]">
                          Year Built:
                        </div>
                        <div className="font-gordita font-medium text-[16px] text-black">
                          2023
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* card two on left section */}
                <div className="w-full min-h-[470px] bg-white">
                  <div className="px-4">
                    {/*card one heading */}
                    <h1 className="   py-4 font-medium font-gordita text-[20px] text-black">
                      Want To Add Extra Features?
                    </h1>

                    <div className="flex flex-col gap-2">
                      {/* bar 1 */}
                      <div className="border border-[#0E1C25]/23 rounded-lg px-4 py-4 max-w-[730px] w-full">
                        <div className="flex items-center justify-between gap-15 flex-wrap">
                          {/* Left Section: Icon + Text */}
                          <div className="flex gap-3 flex-[2] min-w-0">
                            <div className="w-14 h-14 flex items-center justify-center rounded-xl border border-[#0E1C25]/23">
                              <HouseIcon />
                            </div>
                            <div className="truncate">
                              <div className="font-gordita text-[16px] text-[#223743] truncate">
                                Reservation:
                              </div>
                              <div className="font-gordita font-medium text-[16px] text-black truncate">
                                Club House Reservation
                              </div>
                            </div>
                          </div>

                          {/* Middle Section: Date Picker */}
                          <div className="flex-[1.5]">
                            <Datepicker
                              variant="boxed"
                              icon={<DatechartIcon />}
                              placeholder="Select Date"
                            />
                          </div>

                          {/* Right Section: Tick Button */}
                          <div className="flex justify-end flex-[0.5]">
                            <button
                              type="button"
                              onClick={() => setCheckedOne(!checkedOne)}
                              className={`w-8 h-8 rounded-md border  
          ${
            checkedOne
              ? "backgroundgradient text-white"
              : "border-black/15 bg-[#EDEDED] hover:bg-gray-100"
          }
        `}
                              aria-pressed={checkedOne}
                            >
                              {checkedOne && (
                                <div className="flex justify-center">
                                  <WhiteTick />
                                </div>
                              )}
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* bar 2 */}
                      <div className="border border-[#0E1C25]/23 rounded-lg px-4 py-4 max-w-[730px] w-full">
                        <div className="flex items-center justify-between gap-15 flex-wrap">
                          {/* Left Section: Icon + Text */}
                          <div className="flex gap-3 flex-[2] min-w-0">
                            <div className="w-14 h-14 flex items-center justify-center rounded-xl border border-[#0E1C25]/23">
                              <Ambassador />
                            </div>
                            <div className="truncate">
                              <div className="font-gordita text-[16px] text-[#223743] truncate">
                                Car:
                              </div>
                              <div className="font-gordita font-medium text-[16px] text-black truncate">
                                Self-Drive Car
                              </div>
                            </div>
                          </div>

                          {/* Middle Section: Date Picker */}
                          <div className="flex-[1.5]">
                            <Datepicker
                              variant="boxed"
                              icon={<DatechartIcon />}
                              placeholder="Select Date"
                            />
                          </div>

                          {/* Right Section: Tick Button */}
                          <div className="flex justify-end flex-[0.5]">
                            <button
                              type="button"
                              onClick={() => setCheckedTwo(!checkedTwo)}
                              className={`w-8 h-8 rounded-md border  
          ${
            checkedTwo
              ? "backgroundgradient text-white"
              : "border-black/15 bg-[#EDEDED] hover:bg-gray-100"
          }
        `}
                              aria-pressed={checkedTwo}
                            >
                              {checkedTwo && (
                                <div className="flex justify-center">
                                  <WhiteTick />
                                </div>
                              )}
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* bar 3 */}
                      <div className="border border-[#0E1C25]/23 rounded-lg px-4 py-4 max-w-[730px] w-full">
                        <div className="flex items-center justify-between gap-15 flex-wrap">
                          {/* Left Section: Icon + Text */}
                          <div className="flex gap-3 flex-[2] min-w-0">
                            <div className="w-14 h-14 flex items-center justify-center rounded-xl border border-[#0E1C25]/23">
                              <Ambassador />
                            </div>
                            <div className="truncate">
                              <div className="font-gordita text-[16px] text-[#223743] truncate">
                                Car:
                              </div>
                              <div className="font-gordita font-medium text-[16px] text-black truncate">
                                Car With Driver Rental
                              </div>
                            </div>
                          </div>

                          {/* Middle Section: Date Picker */}
                          <div className="flex-[1.5]">
                            <Datepicker
                              variant="boxed"
                              icon={<DatechartIcon />}
                              placeholder="Select Date"
                            />
                          </div>

                          {/* Right Section: Tick Button */}
                          <div className="flex justify-end flex-[0.5]">
                            <button
                              type="button"
                              onClick={() => setCheckedThree(!checkedThree)}
                              className={`w-8 h-8 rounded-md border  
          ${
            checkedThree
              ? "backgroundgradient text-white"
              : "border-black/15 bg-[#EDEDED] hover:bg-gray-100"
          }
        `}
                              aria-pressed={checkedThree}
                            >
                              {checkedThree && (
                                <div className="flex justify-center">
                                  <WhiteTick />
                                </div>
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                      {/* bar 4 */}
                      <div className="border border-[#0E1C25]/23 rounded-lg px-4 py-4 max-w-[730px] w-full">
                        <div className="flex items-center justify-between gap-15 flex-wrap">
                          {/* Left Section: Icon + Text */}
                          <div className="flex items-center gap-3 flex-[2] min-w-0">
                            <div className="w-14 h-14 flex items-center justify-center rounded-lg border border-[#0E1C25]/23">
                              <Nanny />
                            </div>
                            <div className="truncate">
                              <div className="font-gordita font-medium text-[16px] text-black truncate ">
                                Maid/Housekeeping
                              </div>
                            </div>
                          </div>

                          {/* Middle Section: Date Picker */}
                          <div className="flex-[1.5]">
                            <Datepicker
                              variant="boxed"
                              icon={<DatechartIcon />}
                              placeholder="Select Date"
                            />
                          </div>

                          {/* Right Section: Tick Button */}
                          <div className="flex justify-end flex-[0.5]">
                            <button
                              type="button"
                              onClick={() => setCheckedFour(!checkedFour)}
                              className={`w-8 h-8 rounded-md border   
          ${
            checkedFour
              ? "backgroundgradient text-white"
              : "border-black/15 bg-[#EDEDED] hover:bg-gray-100"
          }
        `}
                              aria-pressed={checkedFour}
                            >
                              {checkedFour && (
                                <div className="flex justify-center">
                                  <WhiteTick />
                                </div>
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* card three on the left section */}
                <div className="w-full min-h-[246px] bg-white">
                  {/*card three heading */}
                  <h1 className=" px-4 py-4 font-medium font-gordita text-[20px] text-black">
                    Features & Amenities
                  </h1>
                  <div className=" px-4 py-2 grid grid-cols-2  md:grid-cols-3 gap-4">
                    <div className="flex gap-2 items-center">
                      <div>
                        <Tick />
                      </div>
                      <div className="font-gordita font-normal text-[16px] text-black">
                        Air Conditioning
                      </div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <div>
                        <Tick />
                      </div>
                      <div className="font-gordita font-normal text-[16px] text-black">
                        Lawn
                      </div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <div>
                        <Tick />
                      </div>
                      <div className="font-gordita font-normal text-[16px] text-black">
                        Swimming Pool
                      </div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <div>
                        <Tick />
                      </div>
                      <div className="font-gordita font-normal text-[16px] text-black">
                        Barbeque
                      </div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <div>
                        <Tick />
                      </div>
                      <div className="font-gordita font-normal text-[16px] text-black">
                        Microwave
                      </div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <div>
                        <Tick />
                      </div>
                      <div className="font-gordita font-normal text-[16px] text-black">
                        TV Cable
                      </div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <div>
                        <Tick />
                      </div>
                      <div className="font-gordita font-normal text-[16px] text-black">
                        Dryer
                      </div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <div>
                        <Tick />
                      </div>
                      <div className="font-gordita font-normal text-[16px] text-black">
                        Outdoor
                      </div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <div>
                        <Tick />
                      </div>
                      <div className="font-gordita font-normal text-[16px] text-black">
                        Washer
                      </div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <div>
                        <Tick />
                      </div>
                      <div className="font-gordita font-normal text-[16px] text-black">
                        Gym
                      </div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <div>
                        <Tick />
                      </div>
                      <div className="font-gordita font-normal text-[16px] text-black">
                        Refrigerator
                      </div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <div>
                        <Tick />
                      </div>
                      <div className="font-gordita font-normal text-[16px] text-black">
                        Wifi
                      </div>
                    </div>
                  </div>
                </div>
                {/* card four on the left section */}
                <div className="w-full min-h-[257px] bg-white">
                  {/*card three heading */}
                  <h1 className=" px-4 py-4 font-medium font-gordita text-[20px] text-black">
                    Video
                  </h1>
                  <div className=" relative px-4 pb-4">
                    <img
                      src={videoimage}
                      alt="Host"
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute inset-0 flex justify-center items-center">
                      <PlayIcon />
                    </div>
                  </div>
                </div>
                {/* card five on the left section loaction acrd */}
                <div className="w-full min-h-[344px] bg-white">
                  {/*card three heading */}
                  <h1 className=" px-4 py-4 font-medium font-gordita text-[20px] text-black">
                    Location Map
                  </h1>
                  <div className="px-4 py-4">
                    <img
                      src={locationimg}
                      alt="location"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                {/* card five on the left booking section */}
                <div
                  className=" relative w-full min-h-[220px] sm:min-h-[230px] md:min-h-[280px] h-full "
                  style={{
                    backgroundImage: `url(${Booking})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                  }}
                >
                  {/*card five heading */}
                  <div className="absolute inset-0     mx-auto w-full">
                    <div className="px-4 py-12 md:py-6 flex flex-col ">
                      <div className="font-gordita font-medium text-[18px] sm:text-[20px] md:text-[24px] lg:text-[30px] xl:text-[34px] text-[#EF9C17] hidden sm:block">
                        Need An Airport Pick Up
                      </div>
                      <div className="font-gordita font-medium text-[18px] sm:text-[20px] md:text-[24px] lg:text-[30px] xl:text-[34px] text-[#EF9C17] hidden sm:block">
                        And drop
                      </div>
                      <div className="font-gordita font-normal text-[14px] sm:text-[18px] md:text-[20px] lg:text-[24px] text-[#1F1608] hidden sm:block">
                        Book Your Taxi in Seconds!
                      </div>
                      <div className="pt-8 sm:pt-2">
                        <Link to="/booking">
                          <button className="bg-[#FFA81C] text-black rounded-full  px-4 md:px-6 py-2 md:py-4 flex items-center gap-2 justify-center">
                            <span className="font-medium font-gordita text-[20px] text-center">
                              Book Taxi Now
                            </span>
                            <Upmarkblack />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* card six on the left section the blog and reviews section */}
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
                        <div className="  flex justify-between">
                          <div className="flex gap-4">
                            <div className="w-[70px] h-[70px] rounded-md">
                              <img
                                src={rev1}
                                alt="ratings"
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
                          <div className="pt-1">
                            <Ratings />
                          </div>
                        </div>
                        <div className=" pt-4 pb-10">
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
                        <div className="  flex justify-between ">
                          <div className="flex gap-4">
                            <div className="w-[70px] h-[70px] rounded-md">
                              <img
                                src={rev2}
                                alt="ratings"
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
                          <div className="pt-1">
                            <Ratings />
                          </div>
                        </div>
                        <div className=" pt-4 pb-10">
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
                        <div className="  flex justify-between">
                          <div className="flex gap-4">
                            <div className="w-[70px] h-[70px] rounded-md">
                              <img
                                src={rev3}
                                alt="ratings"
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
                          <div className="pt-1">
                            <Ratings />
                          </div>
                        </div>
                        <div className=" pt-4 pb-10">
                          <p className="font-normal font-gordita text-[15px] text-[#223743] leading-[28px] capitalize">
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
            <div className="hidden md:block md:col-span-2">
              {/* div for all cards  */}
              <div className="flex flex-col gap-5">
                 {/* div for card one  */}
                <div className=" w-full min-h-[885px]  mx-auto detailcarddgradient  ">
                  {/* div for making the background opaque */}
                  <div className=" ">
                    {/* heading */}
                    <div className="flex flex-col gap-2">
                      <div className="py-2 text-center">
                        <span className=" font-gordita font-bold text-[40px] gradient-numericdetails">
                          ₹29,564
                        </span>
                      </div>

                      {/* Strip 1 */}
                      <div className="px-6">
                        <Datepicker
                          variant="bar"
                          icon={<DatechartIcon />}
                          placeholder="Select Date"
                          checkinLabel="CHECK IN"
                        />
                      </div>
                      {/* strip 2 */}
                      <div className="px-6">
                        <Datepicker
                          variant="bar"
                          icon={<DatechartIcon />}
                          placeholder="Select Date"
                           checkinLabel="CHECK OUT"
                        />
                      </div>
                      {/* strip 3 */}
                      <div className="px-6">
                        <div className="w-full min-h-[68px] bg-white mx-auto px-4 py-4">
                          <div className="flex flex-wrap justify-between items-center">
                            <div className="flex flex-col gap-1 text-left">
                              <div className="font-gordita font-medium text-[16px] text-black">
                                Adults
                              </div>
                              <div className="font-gordita font-regular text-[12px] text-black">
                                Age 13+
                              </div>
                            </div>
                            <div>
                           <Counter initial={1} min={1} max={10} />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* strip 4 */}
                      <div className="px-6">
                        <div className="w-full min-h-[68px] bg-white mx-auto px-4 py-4">
                          <div className="flex flex-wrap justify-between items-center">
                            <div className="flex flex-col gap-1 text-left">
                              <div className="font-gordita font-medium text-[16px] text-black">
                                Children
                              </div>
                              <div className="font-gordita font-regular text-[12px] text-black">
                                Ages 2-12
                              </div>
                            </div>
                            <div>
                                <Counter initial={1} min={1} max={10} />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* strip 5 */}
                      <div className="px-6">
                        <div className="w-full min-h-[68px] bg-white mx-auto px-4 py-4">
                          <div className="flex flex-wrap justify-between items-center">
                            <div className="flex flex-col gap-1 text-left">
                              <div className="font-gordita font-medium text-[16px] text-black">
                                Infants
                              </div>
                              <div className="font-gordita font-regular text-[12px] text-black">
                                Under 2
                              </div>
                            </div>
                            <div>
                              <Counter initial={1} min={1} max={10} />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* strip 6 content div */}
                      <div className="px-6">
                        <div className="w-full min-h-[303px] bg-white mx-auto px-4 py-4">
                          <div className="flex justify-between border-b-[1px] border-[#E2E2E2] py-2">
                            <div className="font-gordita font-medium text-[16px] text-black">
                              Villa
                            </div>
                            <div className="font-gordita font-regular text-[14px] text-black">
                              5 Days
                            </div>
                            <div className="font-gordita font-medium text-[16px] text-black">
                              ₹24,764
                            </div>
                          </div>
                          <div className="py-2">
                            <div className="border-b-[1px] border-[#E2E2E2] py-2">
                              <h1 className="font-gordita font-medium text-[18px] text-black">
                                Extra Features
                              </h1>
                              <div className="flex justify-between items-center py-2">
                                <div className="flex flex-col">
                                  <div className="font-gordita font-regular text-[16px] text-black">
                                    Self-Drive Car:
                                  </div>
                                  <div className="font-gordita font-regular text-[14px] text-[#223743]">
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
                                  <div className="font-gordita font-regular text-[16px] text-black">
                                    Maid/Housekeeping:
                                  </div>
                                  <div className="font-gordita font-regular text-[14px] text-[#223743]">
                                    3 Days
                                  </div>
                                </div>
                                <div className="font-gordita font-medium text-[18px] text-black">
                                  ₹1500
                                </div>
                              </div>
                            </div>
                          </div>
                        
                          <div className="py-2">
                            <div className="flex justify-between items-center">
                              <div className="font-gordita font-regular text-[14px] text-black">
                                Total:
                              </div>
                              <div className="font-gordita font-medium text-[16px] text-black">
                                ₹29,564
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* button */}
                  
                     {!fromGuestTrip && (
  <div className="px-6 py-6">
    <div className="w-full mx-auto">
      <Link to="/payment">
        <button className="backgroundgradient text-white rounded-full px-6 py-4 flex items-center gap-2 w-full justify-center">
          <span className="font-medium font-gordita text-[20px] text-center">
            Reserve
          </span>
          <UpmarkIcon />
        </button>
      </Link>
    </div>
  </div>
)}
                    {fromGuestTrip && (
  <> 
  <div className="pb-6">
    <div className="px-6 pt-2">
      <button className="backgroundgradient text-white rounded-full px-6 py-3 flex items-center gap-2 w-full justify-center" onClick={() => { setIsFeedbackOpen(true); }}>
        <span className="font-medium font-gordita text-[20px] text-center">
         Reserve Again
        </span>
        <UpmarkIcon />
      </button>
    </div>

    <div className="px-6 pt-2">
      <button className="bg-black text-white rounded-full px-6 py-3 flex items-center gap-2 w-full justify-center">
        <span className="font-medium font-gordita text-[20px] text-center">
         Send Feedback
        </span>
        <UpmarkIcon />
      </button>
    </div>
    </div>
  </>
)}


                      {/* newbuttons for guest side page */}
                       {(newbuttons &&
                      <div className="px-6 py-4">
                        <div className="w-full mx-auto">
                          <Link to="/payment">
                            <button className="backgroundgradient text-white rounded-full px-6 py-3 flex items-center gap-2 w-full justify-center">
                              <span className="font-medium font-gordita text-[20px] text-center">
                                Reserve Again
                              </span>
                              <UpmarkIcon />
                            </button>
                          </Link>
                        </div>
                      </div>
                      )}
                    </div>
                  </div>
                </div>
                {/* div for card two */}
                <div className="w-full h-[321px]  mx-auto detailsgradientRatings  ">
                  <div className="px-5  py-2  lg:py-8">
                    <h1 className="font-gordita font-bold text-[20px] lg:text-[24px] text-white">
                      Rating and reviews
                    </h1>
                    <div className="flex items-center gap-0 lg:gap-2">
                      <div className="font-gordita font-bold text-[30px] lg:text-[50px] text-white">
                        4.0
                      </div>
                      <div className="flex flex-col">
                        <div>
                          <Ratings />
                        </div>
                        <div className="font-gordita font-normal text-[12px] lg:text-[18px] text-white">
                          Based on 100 reviewers
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 pb-8">
                      {" "}
                      <Box
                        sx={{ width: "100%", maxWidth: 350, color: "white" }}
                      >
                        {ratings.map((item, i) => (
                          <StyledBar
                            key={i}
                            label={item.label}
                            value={item.value}
                          />
                        ))}
                      </Box>
                    </div>
                  </div>
                </div>
                {/* div for card three */}
                <div className="w-full h-[406px] mx-auto bg-white ">
                  <div className="p-2  lg:p-5 text-center">
                    <div>
                      <span className="font-gordita font-bold text-[32px] gradient-textheadingtilted">
                        {" "}
                        Meet Your Host
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center  gap-2 lg:gap-4 pb-6">
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
                    <div className="font-gordita font-normal text-[16px] text-black">
                     Host
                    </div>

                    {/* Button */}
                    <div className="px-4">
                      <button className="backgroundgradient text-white rounded-full px-6  py-2 lg:py-4 flex items-center gap-2 w-full justify-center">
                        <span className="font-medium font-gordita text-[16px] lg:text-[20px] text-center">
                          Message Host
                        </span>
                        <UpmarkIcon />
                      </button>
                    </div>
                  </div>
                </div>
                 <DialogFeedback isOpen={isFeedbackOpen} setIsOpen={setIsFeedbackOpen}  onSubmitDialog={() => {
    setIsFeedbackOpen(false);        
    setIsSubmitDialogOpen(true);     
  }}/>
                  <SubmitDialog 
  isOpen={isSubmitDialogOpen} 
  setIsOpen={setIsSubmitDialogOpen}
/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
