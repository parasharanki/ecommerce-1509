import React from "react";
import Header from "../Components/Reusables/Header";
import Footer from "../Components/Reusables/Footer";
import bglanding from "../assets/images/bglanding.png";
import { SearchIcon } from "../Components/Iconsvg/Iconsvg";
import { ManIcon } from "../Components/Iconsvg/Iconsvg";
import { CalenderIcon } from "../Components/Iconsvg/Iconsvg";
import { SearchwhiteIcon } from "../Components/Iconsvg/Iconsvg";
import HomeSlider from "../Components/Reusables/HomeSlider";
import { UpmarkIcon } from "../Components/Iconsvg/Iconsvg";
import Card from "../Components/Reusables/Card";
import BlogSlider from "../Components/Reusables/BlogSlider";
import bgsection5 from "../assets/images/bgsection5.png";
import crad1 from "../assets/images/crad1.png";
import card2 from "../assets/images/card2.png";
import card3 from "../assets/images/card3.png";
import card4 from "../assets/images/card4.png";
import card5 from "../assets/images/card5.png";
import card6 from "../assets/images/card6.png";
import { Link } from "react-router-dom";
import { HeartIcon } from "../Components/Iconsvg/Iconsvg";
import Datepicker from "../Components/Reusables/Datepicker";

const properties = [
  {
    image: crad1,
    title: "Skyper Pool Apartment",
    location: "974 Valencia St San Francisco, CA 94110",
    cars: 2,
    beds: 2,
    baths: 3,
    persons: 4,
    price: 10000,
    liked: true,
  },
  {
    image: card2,
    title: "Luxury Villa",
    location: "Las Vegas, NV",
    cars: 2,
    beds: 4,
    baths: 4,
    persons: 4,
    price: 25000,
  },
  {
    image: card3,
    title: "Skyper Pool Apartment",
    location: "974 Valencia St San Francisco, CA 94110",
    cars: 2,
    beds: 2,
    baths: 3,
    persons: 4,
    price: 10000,
    liked: true,
  },
  {
    image: card4,
    title: "Luxury Villa",
    location: "Las Vegas, NV",
    cars: 2,
    beds: 4,
    baths: 4,
    persons: 4,
    price: 25000,
  },
  {
    image: card5,
    title: "Skyper Pool Apartment",
    location: "974 Valencia St San Francisco, CA 94110",
    cars: 2,
    beds: 2,
    baths: 3,
    persons: 4,
    price: 10000,
    liked: true,
  },
  {
    image: card6,
    title: "Luxury Villa",
    location: "Las Vegas, NV",
    cars: 2,
    beds: 4,
    baths: 4,
    persons: 4,
    price: 25000,
  },
];

const Homepage = () => {
  return (
    <>
      <div>
        {/* section one with image as background */}
        <div className="relative w-full">
          <div
            className="w-full min-h-[80vh] md:min-h-[85vh] lg:min-h-[100vh]"
            style={{
              backgroundImage: `url(${bglanding})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/*  */}
            <div className="absolute inset-0 flex flex-col gap-4 justify-center items-center text-center max-w-screen-xl mx-auto w-full">
              <div className="">
                <p className="font-forte text-[32px] sm:text-[40px] md:text-[46px] lg:text-[51px] pt-20 font-normal">
                  <span className="gradient-textheading">
                    Find Your Perfect Home
                  </span>
                </p>
              </div>
              <div className="font-gordita font-medium text-[40px] sm:text-[45px] md:text-[54px]  lg:text-[60px]  text-black hidden sm:block">
                Browse,
                <span className="gradient-text  font-bold text-[40px] sm:text-[45px] md:text-[54px]  lg:text-[60px]  ">
                  Rent
                </span>
                , and{" "}
                <span className="gradient-text  font-bold text-[40px] sm:text-[45px] md:text-[54px]  lg:text-[60px]  ">
                  Move
                </span>{" "}
                In with Ease.
              </div>
              <div className="max-w-[1140px]  font-gordita  capitalize  font-regular  text-[20px]  text-black hidden lg:block">
                Explore a wide range of rental homes tailored to your lifestyle.
                From cozy apartments to spacious family houses, we’ve
                <br /> got you covered. Simple search, secure booking, and
                hassle-free moving all in one place
              </div>
             <div className="w-full pt-4 px-4">
  <div
    className="
      bg-white 
      p-4 
      w-full 
      max-w-[1140px] 
      mx-auto 
      shadow-2xl 
      rounded-2xl 
      grid 
      grid-cols-1 
      sm:grid-cols-2 
      lg:grid-cols-5 
      gap-6 
      lg:rounded-full 
      lg:gap-10 
      items-center
    "
  >
    {/* Where */}
    <div className="flex items-center gap-3 px-4">
      <span><SearchIcon /></span>
      <div className="text-left w-full">
        <div className="font-gordita font-medium text-[16px] text-black">Where</div>
        <input
          type="text"
          placeholder="Search Destinations"
          className="bg-transparent placeholder:text-[#1C2331] placeholder:font-gordita placeholder:font-normal text-[14px] text-[#1C2331] focus:outline-none w-full"
          onInput={(e) => {
            e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
          }}
        />
      </div>
    </div>

    {/* Check In */}
    <div className="flex items-center gap-3 border-t sm:border-t-0 lg:border-l border-[#B5B5B5] px-4">
      <div className="text-left w-full">
        <Datepicker
          placeholder="Add Dates"
          className="bg-transparent placeholder:text-[#1C2331] placeholder:font-gordita placeholder:font-normal text-[14px] text-[#1C2331] focus:outline-none w-full"
          icon={<CalenderIcon />}
          labelText={"Check In"}
        />
      </div>
    </div>

    {/* Check Out */}
    <div className="flex items-center gap-3 border-t sm:border-t-0 lg:border-l border-[#B5B5B5] px-4">
      <div className="text-left w-full">
        <Datepicker
          placeholder="Add Dates"
          className="bg-transparent placeholder:text-[#1C2331] placeholder:font-gordita placeholder:font-normal text-[14px] text-[#1C2331] focus:outline-none w-full"
          icon={<CalenderIcon />}
          labelText={"Check Out"}
        />
      </div>
    </div>

    {/* Who */}
    <div className="flex items-center gap-3 border-t sm:border-t-0 lg:border-l border-[#B5B5B5] px-4">
      <span><ManIcon /></span>
      <div className="text-left w-full">
        <div className="font-gordita font-medium text-[16px] text-black">Who</div>
        <input
          type="text"
          placeholder="Add Guests"
          className="bg-transparent placeholder:text-[#1C2331] placeholder:font-gordita placeholder:font-normal text-[14px] text-[#1C2331] focus:outline-none w-full"
          onInput={(e) => {
            e.target.value = e.target.value.replace(/[^0-9]/g, '');
          }}
        />
      </div>
    </div>

    {/* Search Button */}
    <div className="sm:col-span-2 lg:col-span-1 flex justify-center  lg:pt-0">
      <button
        type="button"
        className="w-full sm:w-full lg:w-[172px] backgroundgradient text-white rounded-full px-8 py-4 flex items-center justify-center gap-2 cursor-pointer"
      >
        <SearchwhiteIcon />
        <span className="font-medium font-gordita text-[22px]">Search</span>
      </button>
    </div>
  </div>
</div>

            </div>
            
          </div>
        </div>
        {/* section two slider section */}
        <div>
          <div className="pt-15 pb-5">
            <div className="text-center">
              <p className=" font-inter font-semibold text-[56px]  ">
                <span className="bluegradient">Pick Your Nest</span>
              </p>
            </div>
            <HomeSlider />
          </div>
        </div>
        {/* section three images card section */}
        <div className="w-full">
  {/* Header Section */}
  <div className="w-full max-w-[1140px] mx-auto py-10 px-4 xl:px-0">
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
      <div>
        <h1 className="font-gordita font-medium text-[32px] sm:text-[40px] lg:text-[52px] text-headingblack">
          Our Top Vacation Rentals
        </h1>
        <p className="font-gordita font-regular text-[18px] sm:text-[20px] lg:text-[22px] text-black">
          Explore Latest & Featured Properties For Rent.
        </p>
      </div>
      <button
        type="button"
        className="w-full sm:w-[207px] backgroundgradient rounded-full px-6 py-4 flex items-center justify-center sm:justify-start gap-2 cursor-pointer"
      >
        <span className="font-medium font-gordita text-[18px] sm:text-[20px] text-white">
          View More
        </span>
        <UpmarkIcon />
      </button>
    </div>
  </div>

  {/* Cards Grid */}
  <div className="w-full max-w-[1140px] mx-auto pb-18 px-4 xl:px-0">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 ">
      {properties.map((prop, idx) => (
        <Link to="/details" key={idx}>
          <Card
            {...prop}
            className="w-full max-w-[360px] mx-auto h-full"
            mediumtext={true}
            dynamicIcon={
              <HeartIcon
                className={`text-xl ${
                  prop.liked ? "text-red-500" : "text-gray-400"
                }`}
              />
            }
          />
        </Link>
      ))}
    </div>
  </div>
</div>

        {/* sectuion four the blog section */}
        <div className="blogcarddgradient">
          {/* white text heading plus people and rating in it */}
        <div className="w-full max-w-[1140px] mx-auto pt-10 px-4 sm:px-6">
  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
    {/* Heading */}
    <div className="pb-4 md:pb-0">
      <h2 className="font-gordita font-medium text-white text-[32px] sm:text-[42px] md:text-[56px] leading-tight">
        What Our Customers
        <br className="hidden sm:block" />
        Are Saying Us?
      </h2>
    </div>

    {/* Metrics */}
    <div className="flex gap-10 sm:gap-16">
      <div className="flex flex-col">
        <p className="font-gordita font-medium text-white text-[28px] sm:text-[36px]">
          10K+
        </p>
        <p className="font-gordita font-normal text-white text-[14px] sm:text-[15px]">
          Happy People
        </p>
      </div>
      <div className="flex flex-col">
        <p className="font-gordita font-medium text-white text-[28px] sm:text-[36px]">
          4.7
        </p>
        <p className="font-gordita font-normal text-white text-[14px] sm:text-[15px]">
          Overall Rating
        </p>
      </div>
    </div>
  </div>
</div>

          <div className=" w-full max-w-[1140px] mx-auto py-20 ">
            <BlogSlider />
          </div>
        </div>
        {/* section five contact section */}
        <div className="relative w-full">
          <div
            className="w-full min-h-[80vh] md:min-h-[85vh] lg:min-h-[80vh]"
            style={{
              backgroundImage: `url(${bgsection5})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 flex flex-col  py-20 items-center text-center max-w-screen-xl mx-auto w-full">
              <div className="font-gordita text-black font-medium text-[55px] sm:text-[66px] md:text-[75px]  lg:text-[80px] leading-none">
                Any Inquiry? Feel free <br />
                To contact Us.
              </div>

              <div className="pt-10">
                <button
                  type="button"
                  className="w-[242px] backgroundgradient text-white text-center rounded-full px-8 py-4 flex justify-center items-center gap-2 cursor-pointer whitespace-nowrap"
                >
                  <span className=" font-medium font-gordita text-[20px] ">
                    Send Message
                  </span>
                  <UpmarkIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
