import React from "react";
import { useState } from "react";
import {
  Logo,
  ProfileIcon,
  ZigzagIcon,
  ZigzagTwo,
  ZigzagThree,
  ZigzagFour,

} from "../Iconsvg/Iconsvg";
import { Link, useLocation } from "react-router-dom";
import { CrossIcon } from "../Iconsvg/Iconsvg";
import { Popover } from "@headlessui/react";
import { Dialog } from "@headlessui/react";
import loginbg from "../../assets/images/loginbg.png";
import otpbg from "../../assets/images/otpbg.png";
import DialogLogin from "./DialogLogin";
import OtpDialog from "./OtpDialog";
const Header = () => {
  
  
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isOpenOtp, setIsOpenOtp] =useState(false)
 const [menuOpen, setMenuOpen] = useState(false); 

  // for the  otp dialog box
    const handleOpenDialogOtp = () => {
   setIsOpenOtp(true);
  };
   const handleOtp = () => {
    console.log("Send OTP clicked!");
    setIsLoginOpen(false);
   setIsSignupOpen(false);  
  setIsOpenOtp(true);     
  };
// headet toggle option

const toggleSideMenu = () => {
    setIsMobileHeaderOpen(!IsMobileHeaderOpen);
  };
  const location = useLocation();

  const transparentRoutes = ["/", "/conciergeservices", "/contactus", "/event"];
  const isTransparent = transparentRoutes.includes(location.pathname);

  const navLinks = [
    { name: "Home", path: "/" , icon: <ZigzagIcon />},
    { name: "ConciergeService", path: "/conciergeservices", icon: <ZigzagTwo /> },
    { name: "Event", path: "/event",icon: <ZigzagThree /> },
    { name: "Contact Us", path: "/contactus", icon: <ZigzagFour />},
  ];

  return (
    <header
      className={`w-full pb-4 z-10 ${
        isTransparent
          ? "bg-transparent absolute border-b-black-13"
          : " shadow-xl"
      } transition-all duration-300 top-0 `}
    >
      <div className="w-full px-2 xl:px-0">
      <div className="max-w-[1140px] w-full mx-auto flex justify-between items-center">
        <div>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="" >
          <ul className=" hidden md:flex gap-10 items-center text-[18px]">
            {navLinks.map((link, idx) => {
              const isActive = location.pathname === link.path;
              return (
                <li key={idx} className="relative">
                  <Link to={link.path}>
                    <p
                      className={`${
                        isActive ? "gradient-text" : "text-black"
                      } font-medium font-gordita`}
                    >
                      {link.name}
                    </p>
                    {isActive && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1">
                        {link.icon}
                      </div>
                    )}
                  </Link>
                </li>
              );
            })}
            <li>
              {/* <Popover className="relative">
                <Popover.Button className="p-0 m-0 border-none bg-transparent shadow-none focus:outline-none focus:ring-0">
                  <ProfileIcon />
                </Popover.Button>
                <Popover.Panel className="absolute z-10">
                  <div className=" bg-white w-[180px] h-[120px] px-3 py-2 ">
                    <div className=" grid grid-cols-1 gap-2 font-gordita font-normal text-[16px] text-black">
                      <div>
                        <button  onClick={() => setIsLoginOpen(true)}>
                          Signup
                        </button>
                      </div>
                      <div>
                        <button onClick={() =>  setIsSignupOpen(true)}>
                          Login
                        </button>
                      </div>
                      <hr className="text-[#D9D9D9] -mx-3" />
                      <Link to="/host-form">Host Your Nest</Link>
                    </div>
                  </div>
                </Popover.Panel>
              </Popover> */}
              <Popover className="relative">
              <Popover.Button className="p-0 m-0 border-none bg-transparent shadow-none focus:outline-none focus:ring-0">
                <ProfileIcon />
              </Popover.Button>
              <Popover.Panel className="absolute z-10 right-0">
                <div className="bg-white w-[180px] h-[120px] px-3 py-2">
                  <div className="grid grid-cols-1 gap-2 font-gordita font-normal text-[16px] text-black">
                    <button onClick={() => setIsLoginOpen(true)}>Signup</button>
                    <button onClick={() => setIsSignupOpen(true)}>Login</button>
                    <hr className="text-[#D9D9D9] -mx-3" />
                    <Link to="/host-form">Host Your Nest</Link>
                  </div>
                </div>
              </Popover.Panel>
            </Popover>
            </li>
          </ul>
         <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none z-99">
            {menuOpen ? (
              <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
            ) : (
               <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
            )} 
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-[250px] bg-white shadow-md transform transition-transform duration-300 z-30 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="py-8 px-16 flex justify-end">
            <button onClick={() => setMenuOpen(false)}>
               <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6L6 18"></path>
              <path d="M6 6L18 18"></path>
            </svg>
            </button>
          </div>
          <ul className="flex flex-col gap-6 p-4 text-lg">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <Link
                  to={link.path}
                  className={`font-medium ${location.pathname === link.path ? "gradient-text" : "text-black"}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <hr />
            <li>
              <button onClick={() => { setIsLoginOpen(true); setMenuOpen(false); }}>Signup</button>
            </li>
            <li>
              <button onClick={() => { setIsSignupOpen(true); setMenuOpen(false); }}>Login</button>
            </li>
            <li>
              <Link to="/host-form" onClick={() => setMenuOpen(false)}>Host Your Nest</Link>
            </li>
          </ul>
        </div>
        </div>
        {/* login dialog */}
      
       <DialogLogin isOpen={isLoginOpen} setIsOpen={setIsLoginOpen} onSendOtp={handleOtp} />
      <DialogLogin isOpen={isSignupOpen} setIsOpen={setIsSignupOpen} onSendOtp={handleOtp} />
        {/* otpdialog */}
        <OtpDialog 
  isOpen={isOpenOtp} 
  setIsOpen={setIsOpenOtp}
/>
          
      </div>
      </div>
    </header>
  );
};

export default Header;
