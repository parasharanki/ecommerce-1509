import React from "react";
import {
  BackIcon,
  BoldDropdownIcon,
  UploadIcon,
  WhiteTick,
  UpmarkIcon,
} from "../Components/Iconsvg/Iconsvg";
import { useState } from "react";
import { Link } from "react-router-dom";



const HostForm = () => {
  const [checkedOne, setCheckedOne] = useState(false);
 
 

  return (
    <>
      <div className="w-full vendorcardgradient">
        <div className="border-b border-[#DBDBDB]">
          <div className="max-w-[1140px] mx-auto  py-10  ">
            <div className="flex justify-between items-center ">
              <div>
               <Link to="/">
                <BackIcon />
                </Link>
              </div>
              <div className="font-gordita font-bold text-[50px] text-black">
                Become a Host
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="max-w-[1140px] mx-auto  py-10  ">
          <div className="grid grid-cols-2 px-2 gap-4">
            {/* 1st field */}
            <div className="flex flex-col">
              <label
                htmlFor="firstName"
                className="text-[16px] font-medium text-black font-gordita mb-1"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="px-3 py-5 bg-white rounded-full placeholder:font-gordita placeholder:text-[16px] placeholder:text-black placeholder:font-normal "
                placeholder=" Jack"
              />
            </div>
            {/* 2nd field */}
            <div className="flex flex-col">
              <label
                htmlFor="lastName"
                className="text-[16px] font-medium text-black font-gordita mb-1"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="px-3 py-5 bg-white rounded-full placeholder:font-gordita placeholder:text-[16px] placeholder:text-black placeholder:font-normal "
                placeholder=" Jack"
              />
            </div>
            {/* 3rd field */}
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-[16px] font-medium text-black font-gordita mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="px-3 py-5 bg-white rounded-full placeholder:font-gordita placeholder:text-[16px] placeholder:text-black placeholder:font-normal "
                placeholder=" jacksmith12345@gmail.com"
              />
            </div>

            {/* 4th Field */}
            <div className="flex flex-col">
              <label
                htmlFor="number"
                className="text-[16px] font-medium text-black font-gordita mb-1"
              >
                Mobile Number
              </label>
              <input
                type="number"
                id="number"
                name="number"
                className="px-3 py-5  bg-white  rounded-full placeholder:font-gordita placeholder:text-[16px] placeholder:text-black placeholder:font-normal "
                placeholder="+1 9876543210"
              />
            </div>
            {/* 5th field */}
            <div className="flex flex-col">
              <label
                htmlFor="address"
                className="text-[16px] font-medium text-black font-gordita mb-1"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                className="px-3 py-5 bg-white  rounded-full  placeholder:font-gordita placeholder:text-[16px] placeholder:text-black placeholder:font-normal "
                placeholder="974 Valencia St San Francisco"
              />
            </div>

            {/*6th Field */}
            <div className="flex flex-col">
              <label
                htmlFor="city"
                className="text-[16px] font-medium text-black font-gordita mb-1"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                className="px-3 py-5 bg-white  rounded-full  placeholder:font-gordita placeholder:text-[16px] placeholder:text-black placeholder:font-normal "
                placeholder="Los Angeles"
              />
            </div>
            {/* 7th field */}
            <div className="flex flex-col">
              <label
                htmlFor="state"
                className="text-[16px] font-medium text-black font-gordita mb-1"
              >
                State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                className="px-3 py-5 bg-white rounded-full placeholder:font-gordita placeholder:text-[16px] placeholder:text-black placeholder:font-normal "
                placeholder="California"
              />
            </div>
            {/* 8th field */}
            <div className="flex flex-col">
              <label
                htmlFor="pin"
                className="text-[16px] font-medium text-black font-gordita mb-1"
              >
                Postal Code
              </label>
              <input
                type="number"
                id="pin"
                name="pin"
                className="px-3 py-5 bg-white rounded-full placeholder:font-gordita placeholder:text-[16px] placeholder:text-black placeholder:font-normal "
                placeholder="302004"
              />
            </div>
          </div>
          <h3 className="px-2 py-4 font-gordita font-bold text-[24px] text-black">
            Personals Details
          </h3>
          <div className=" grid grid-cols-2 px-2 gap-4">
            <div className="flex flex-col">
              <label
                htmlFor="idType"
                className="text-[16px] font-medium text-black font-gordita mb-1"
              >
                Select ID
              </label>
              <div className="flex items-center bg-white rounded-full  overflow-hidden w-full max-w-[600px]">
  {/* Select Field */}
  <div className="relative w-[25%] border-r border-gray-300">
    <select
      className="appearance-none w-full h-full px-4 py-5 text-[16px] font-gordita text-black bg-white outline-none"
    >
      <option>Aadhar</option>
      <option>Pan</option>
      <option>Driving License</option>
      <option>Voter Id</option>
    </select>
    <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
      <BoldDropdownIcon />
    </div>
  </div>

  {/* Input Field */}
  <input
    type="text"
    id="number"
    name="number"
    placeholder="Enter Number"
    className="w-[75%] px-4 py-5 text-[16px] font-gordita text-black bg-white outline-none placeholder:font-gordita placeholder:text-[16px] placeholder:text-black placeholder:font-normal "
  />
</div>

            </div>

            <div className="flex flex-col">
              <label
                htmlFor="pan"
                className="text-[16px] font-medium text-black font-gordita mb-1"
              >
                Pan
              </label>
              <input
                type="number"
                id="pan"
                name="pan"
                className="px-3 py-5 bg-white rounded-full placeholder:font-gordita placeholder:text-[16px] placeholder:text-black placeholder:font-normal "
                placeholder="Enter Number"
              />
            </div>
          </div>

          {/* uploading section */}
          <div className=" grid grid-cols-2 px-2 gap-6">
            {/* one  */}
            <div className="py-6 grid grid-cols-2 gap-2">
             <div className=" rounded-md">
             
              <label className="w-full h-40 bg-white border-2 border-dashed border-[#2674BA] rounded-md flex flex-col gap-2 justify-center items-center text-center cursor-pointer hover:bg-blue-50 transition">
                <input type="file" className="hidden" />
                <UploadIcon />
                <span className="font-medium font-gordita text-black text-[14px]">
                 Upload Aadhar Card Front Photo
                </span>
                <span className="font-normal font-gordita text-[#2674BA] text-[14px]">
                  Drag And Drop
                </span>
              </label>
            </div>

            <div className=" rounded-md">
              
              <label className="w-full h-40 bg-white border-2 border-dashed border-[#2674BA] rounded-md flex flex-col gap-2 justify-center items-center text-center cursor-pointer hover:bg-blue-50 transition">
                <input type="file" className="hidden" />
                <UploadIcon />
                <span className="font-medium font-gordita text-black text-[14px]">
                 Upload Aadhar Card Back Photo
                </span>
                <span className="font-normal font-gordita text-[#2674BA] text-[14px]">
                  Drag And Drop
                </span>
              </label>
            </div>
</div>
            {/* three*/}
            <div className="py-6">
            <div className="rounded-md">
             
              <label className="w-full h-40 bg-white border-2 border-dashed border-[#2674BA] rounded-md flex flex-col gap-2 justify-center items-center text-center cursor-pointer hover:bg-blue-50 transition">
                <input type="file" className="hidden" />
                <UploadIcon />
                <span className="font-medium font-gordita text-black text-[14px]">
                Upload Pan Card Photo
                </span>
                <span className="font-normal font-gordita text-[#2674BA] text-[14px]">
                  Drag And Drop
                </span>
              </label>
            </div>
            </div>
          </div>
          {/* upload section two */}

          <div className="px-2 py-6 flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <button
                type="button"
                onClick={() => setCheckedOne(!checkedOne)}
                className={`w-7 h-7 rounded-md border transition-colors duration-200 
          ${
            checkedOne
              ? "backgroundgradient  text-white"
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
              <div className="font-gordita font-normal text-black text-[18px]">
                I Read and Agree to
                <span className="font-gordita font-medium text-[#2675B9] text-[18px]">
                  {" "}
                  Terms and Conditions
                </span>
              </div>
            </div>

            <div className="py-6">
              <button className="backgroundgradient text-white rounded-full px-6 py-3 flex items-center gap-2 w-40 justify-center">
                <span className="font-medium font-gordita text-[20px] text-center">
                  Submit
                </span>
                <UpmarkIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HostForm;
