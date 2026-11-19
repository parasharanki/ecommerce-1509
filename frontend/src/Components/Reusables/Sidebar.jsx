import { useState } from "react";
import React from "react";
import Helpcenter from "../../assets/images/Helpcenter.png";
import Newwave from "../../assets/images/Newwave.png";

import guestprf from "../../assets/images/guestprf.png";
import caller from "../../assets/images/caller.png";
import {
  RingIcon,
  LOGO,
  HutIcon,
  MsgIcon,
  MenIcon,
  StarIcon,
  Logout,
  MsgIconColour,
  WhiteDropIcon,
  BlueUpIcon,
  WhiteHut,
  SearchIcon,
  BoldDropdownIcon,
  Caller,
  ComputerGirl,
  UpmarkIcon,
  ThinArrow
} from "../Iconsvg/Iconsvg";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import LogoutDialog from "./LogoutDialog";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
 const [logoutOpen, setLogoutOpen] = useState(false);
 const navigate = useNavigate();
//  landle dialog


const handleLogout = () => {
    setLogoutOpen(false);
    
    navigate("/");
  };


  const location = useLocation();
  const showBorder = ["/guest-trip-booking", "/wishlist", ].includes(location.pathname);
  return (
    <>
      <div className="flex min-h-screen">
        {/* sidebar */}
        <div className="w-[248px] min-h-screen flex relative sidebargradient  ">
          {/* Top Section */}

          <div className=" w-[240px]   text-white p-4 flex-col justify-between">
            <div>
              <Link to="/">
              <div className=" pb-6 flex justify-center border-b border-white/26 -mx-4">
                <LOGO />
              </div>
</Link>
              {/* Menu */}
              <ul className=" py-6 space-y-2 text-sm font-medium">
                {/*My Bookings Dropdown*/}
                <li
                  className={`${
                    isDropdownOpen ? "bg-white" : "bg-transparent"
                  } rounded-xl`}
                >
                  <button
                    onClick={() => setDropdownOpen(!isDropdownOpen)}
                    className="w-full flex gap-2 items-center px-4 py-2"
                  >
                    <span
                      className={`flex items-center gap-2 font-gordita text-[16px] font-normal ${
                        isDropdownOpen ? "text-[#2674BA]" : "text-white"
                      }`}
                    >
                      {isDropdownOpen ? <HutIcon /> : <WhiteHut />}
                      My Bookings
                    </span>
                    {isDropdownOpen ? (
                      <BlueUpIcon className=" text-[#2674BA]" />
                    ) : (
                      <WhiteDropIcon className=" text-white" />
                    )}
                  </button>

                  {isDropdownOpen && (
                    <ul className="mt-2  space-y-2 bg-[#428ACA] px-4 py-4 rounded-xl">
                      <li >
                        <NavLink to="/guest-trip-booking" className={({ isActive }) =>
        `font-gordita text-[15px] text-white font-normal ${
          isActive ? 'underline' : ''
        }`
      } >Trip Booking</NavLink>
                      </li>
                      <li >
                        <NavLink to="/service-booking" className={({ isActive }) =>
        `font-gordita text-[15px] text-white font-normal ${
          isActive ? 'underline' : ''
        }`
      }>Service Booking</NavLink>
                      </li>
                      <li >
                        <NavLink to="/taxi-booking" className={({ isActive }) =>
        `font-gordita text-[15px] text-white font-normal ${
          isActive ? 'underline' : ''
        }`
      }>Taxi Booking</NavLink>
                      </li>
                      <li >
                        <NavLink to="/event-booking" className={({ isActive }) =>
        `font-gordita text-[15px] text-white font-normal ${
          isActive ? 'underline' : ''
        }`
      }>Events Booking</NavLink>
                      </li>
                    </ul>
                  )}
                </li>

                {/* Other Items */}
                <li className="flex items-center gap-3  font-gordita text-[16px] text-white font-normal">
                  <NavLink
                    to="/notification"
                    className={({ isActive }) =>
                      `group flex items-center gap-3 px-4 py-2 rounded-md w-full font-gordita text-[16px] transition-all
    ${
      isActive
        ? "bg-white text-[#2674BA]"
        : "text-white hover:bg-white hover:text-[#2674BA]"
    }`
                    }
                  >
                    <RingIcon />
                    Notification
                  </NavLink>
                </li>
                <li className="flex items-center gap-3   font-gordita text-[16px] text-white font-normal">
                  <NavLink
                    to="/messages"
                    className={({ isActive }) =>
                      `group flex items-center gap-3 px-4 py-2 rounded-md w-full font-gordita text-[16px] transition-all
    ${
      isActive
        ? "bg-white text-[#2674BA]"
        : "text-white hover:bg-white hover:text-[#2674BA]"
    }`
                    }
                  >
                    <MsgIcon />
                    Messages
                  </NavLink>
                </li>
                <li className="flex items-center gap-3  font-gordita text-[16px] text-white font-normal">
                  <NavLink
                    to="/wishlist"
                    className={({ isActive }) =>
                      `group flex items-center gap-3 px-4 py-2 rounded-md w-full font-gordita text-[16px] transition-all
    ${
      isActive
        ? "bg-white text-[#2674BA]"
        : "text-white hover:bg-white hover:text-[#2674BA]"
    }`
                    }
                  >
                    <MsgIcon />
                    Wishlist
                  </NavLink>
                </li>
                <li className="flex items-center gap-3  font-gordita text-[16px] text-white font-normal ">
                  <NavLink
                    to="/my-account"
                    className={({ isActive }) =>
                      `group flex items-center gap-3 px-4 py-2 rounded-md w-full font-gordita text-[16px] transition-all
    ${
      isActive
        ? "bg-white text-[#2674BA]"
        : "text-white hover:bg-white hover:text-[#2674BA]"
    }`
                    }
                  >
                    <MenIcon />
                    My Account
                  </NavLink>
                </li>
                <li className="flex items-center gap-3 font-gordita text-[16px] text-white font-normal">
                  <NavLink
                    to="/reviews"
                    className={({ isActive }) =>
                      `group flex items-center gap-3 px-4 py-2 rounded-md  w-full font-gordita text-[16px] transition-all
    ${
      isActive
        ? "bg-white text-[#2674BA]"
        : "text-white hover:bg-white hover:text-[#2674BA]"
    }`
                    }
                  >
                    <StarIcon />
                    My Reviews & Ratings
                  </NavLink>
                </li>
                <li className="flex items-center gap-3 font-gordita text-[16px] text-white font-normal">
  <button
    onClick={() => setLogoutOpen(true)}
    className="group flex items-center gap-3 px-4 py-2 rounded-md w-full font-gordita text-[16px] transition-all text-white hover:bg-white hover:text-[#2674BA]"
  >
    <Logout />
    Logout
  </button>
</li>

              </ul>
              <LogoutDialog
  isOpen={logoutOpen}
  setIsOpen={setLogoutOpen}
  onConfirm={handleLogout}
/>
            </div>

            {/* Help Center */}
              <div className="pt-10 flex justify-center">
      <div className="w-[172px] h-[169px] relative rounded-xl bg-white/10 backdrop-blur-sm   flex flex-col items-center justify-between px-4 pt-4 pb-10">
        
        {/* Icon */}
        <img src={caller} alt="Help Icon" className="w-[70px] h-[70px]" />

        {/* Title */}
        <p className="text-white text-center font-medium text-[16px]">Help Center</p>

        {/* Bottom arrow button */}
        <div className="absolute bottom-[-16px] left-1/2 transform -translate-x-1/2 w-10 h-10 flex items-center justify-center bg-black rounded-full">
          <ThinArrow/>
        </div>
      </div>
    </div>
          </div>
          <div className="w-5 h-full bg-white rounded-l-2xl z-50" />
        </div>

        {/* Header div */}
        <div className="flex-1 flex flex-col">
          <div className="w-full h-[100px]  ">
            <div className="px-8 py-8  ">
              {/* name n wave */}
              <div
                className={`flex items-center justify-between gap-5  pb-4 ${
                  showBorder ? "border-b border-[#DFDFDF]" : ""
                }`}
              >
                <div className="flex gap-2 items-center">
                  <h2 className="font-gordita font-bold text-black text-[26px]">
                    Hello Jack Smith
                  </h2>
                  <div>
                    <img
                      src={Newwave}
                      alt="wave"
                      className="object-fit rounded-lg"
                    />
                  </div>
                </div>
                {/* input field */}

                <div className="max-w-[498px] rounded-full vendorcardgradient pl-4 pr-2 py-2 flex justify-between ">
                  <div className="flex items-center gap-4">
                    <SearchIcon />
                    <input
                      type="text"
                      placeholder="Search Property"
                      className=" focus:outline-none focus:ring-0 placeholder:font-gordita placeholder:font-normal placeholder:text-[16px] placeholder:text-[#1C2331] 
                        "
                    />
                  </div>
                  <button className="backgroundgradient text-white rounded-full px-10 py-1 flex items-center gap-2  justify-center cursor-pointer">
                    <span className="font-medium font-gordita text-[18px] text-center">
                      Search
                    </span>
                  </button>
                </div>
                {/* third selector */}
                <div className="flex gap-5">
                  <div className="">
                    <img
                      src={guestprf}
                      alt="guest"
                      className="object-contain rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col ">
                    <h3 className="font-gordita font-bold text-black text-[18px]">
                      Jack Smith
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="font-gordita font-normal text-black text-[18px]">
                        Guest
                      </span>
                      <BoldDropdownIcon />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
