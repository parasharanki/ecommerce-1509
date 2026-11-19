import React from "react";
import { Logo } from "../Iconsvg/Iconsvg";
import { FacebookIcon } from "../Iconsvg/Iconsvg";
import { InstaIcon } from "../Iconsvg/Iconsvg";
import { LinkedIcon } from "../Iconsvg/Iconsvg";
import { TwitterIcon } from "../Iconsvg/Iconsvg";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="pt-10 pb-15 max-w-[1140px]  mx-auto ">
        <div className="grid  sm:grid-cols-1 px-2 md:grid-cols-2    lg:grid-cols-3 pl-2  xl:grid-cols-4 gap-2">
          <div>
            <div>
              <Logo />
            </div>
            <div className="py-5 font-gordita">
              <p className="font-medium font-gordita text-[18px]">
                11910 Clyde Rapid Suite 210, Willyand, Virginia, United State
              </p>
            </div>
            <div className="py-2">
              <p className="font-regular font-gordita text-[18px]">Email:</p>
              <p className="font-regular font-gordita text-[26px]">
                Info@example.com
              </p>
            </div>
            <div className="flex pt-8  gap-4 items-center">
              <span className="font-gordita font-medium text-[18px]">
                Follow Us
              </span>
              <span>
                <Link to="/">
                <FacebookIcon />
                </Link >
              </span>
              <span>
                <Link to="/">
                <TwitterIcon />
                </Link>
              </span>
              <span>
                <Link to="/">
                <InstaIcon />
                </Link>
              </span>
              <span>
            <Link>
                <LinkedIcon to="/"/>
                </Link>
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="pt-10">
              <p className="font-medium font-gordita text-[22px]">Links</p>
            </div>
            <div>
              <ul className="flex flex-col gap-4">
                <Link to="/" className="font-normal font-gordita text-[18px] ">
                  Home
                </Link>
                <Link  to="/conciergeservices"  className="font-normal font-gordita text-[18px]">
                  Concierge Services
                </Link>
                <Link 
                 to="/event"
                className="font-normal font-gordita text-[18px]">
                  Events
                </Link>
                <Link  
                 to="/contactus"
                className="font-normal font-gordita text-[18px]">
                  Contact us
                </Link>
                <Link 
                to="/host-form"
                className="font-normal font-gordita text-[18px]">
                 Host Your Nest
                </Link>
                <Link 
                   to="/vendor-form" 
                 className="font-normal font-gordita  text-[18px]">
                 Become a Vendor
                </Link>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="pt-10">
              <p className="font-medium font-gordita text-[22px]">
                Properties Types
              </p>
            </div>
            <div>
              <ul className=" pr-1 flex flex-col gap-4">
                <Link 
                to="/properties"
                className="font-normal font-gordita text-[18px]">
                  Apartment
                </Link>
                <Link 
                  to="/properties"
                  className="font-normal font-gordita text-[18px]">Villas</Link>
                <Link 
                 to="/properties"
                className="font-normal font-gordita text-[18px]">
                  Farmhouse
                </Link>
                <Link
                 to="/properties"
                className="font-normal font-gordita text-[18px]">
                  Creative workspace
                </Link>
                <Link 
                 to="/properties"
                className="font-normal font-gordita text-[18px]">
                  Rural Staycations
                </Link>
                <Link 
                 to="/properties"
                className="font-normal font-gordita  text-[18px]">
                  Spritual Retreats
                </Link>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="pt-10">
              <p className="font-medium font-gordita text-[22px]">
                Newsletters
              </p>
            </div>
            <div>
              <div>
                <p className="font-normal capitalize font-gordita text-[18px]">
                  Join & get important new regularly
                </p>
              </div>
              <div className="pt-4">
                <p className="font-normal font-gordita text-[18px]">Contact</p>
                <p className="font-normal font-gordita text-[26px]">
                  +91 9876543210
                </p>
           
              </div>
            </div>
            <div className="pt-2 pb-4">
              <div className="flex items-center    bg-white">
                <div className="flex  border border-black rounded-full py-2  px-2 ">
                  <input
                    type="text"
                    placeholder="Your Email Address"
                    className="flex-grow bg-transparent focus:outline-none text-sm sm:text-base placeholder-black font-gordita font-normal text-[14px] px-2"
                  />
                  <button className="backgroundgradient  text-white text-sm sm:text-base font-medium px-4 py-1.5 rounded-full  transition cursor-pointer " 
                   
                   type="submit">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black justify-center py-3">
        <p className="flex font-gordita font-medium text-[16px] text-white justify-center">
          Copyright @2025 Nest Bubble
        </p>
      </div>
    </>
  );
};
export default Footer;
