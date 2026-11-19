import React from "react";
import {
  BackIcon,
  BoldDropdownIcon,
  UploadIcon,
  WhiteTick,
  UpmarkIcon,
} from "../Components/Iconsvg/Iconsvg";
import { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

const MAX = 50000;
const MIN = 5000;
const marks = [
  {
    value: MIN,
    label: "",
  },
  {
    value: MAX,
    label: "",
  },
];

const VendorForm = () => {
  const [checkedOne, setCheckedOne] = useState(false);
  const [checkedTwo, setCheckedTwo] = useState(false);
  const [checkedThree, setCheckedThree] = useState(false);
  const [checkedFour, setCheckedFour] = useState(false);
  const [val, setVal] = useState(MIN);
  const handleChange = (_, newValue) => {
    setVal(newValue);
  };

  return (
    <>
      <div className="w-full vendorcardgradient">
        <div className="border-b border-[#DBDBDB]">
          <div className="max-w-[1140px] mx-auto  py-10  ">
            <div className="flex justify-between items-center ">
              <div>
                <BackIcon />
              </div>
              <div className="font-gordita font-bold text-[50px] text-black">
                Become a Vendor
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="max-w-[1140px] mx-auto  py-10  ">
          <div className="grid grid-cols-2 px-2 gap-4">
            <div className="flex flex-col">
              <label
                htmlFor="vendortype"
                className="text-[16px] font-medium text-black font-gordita mb-1"
              >
                Vendor Type
              </label>
              <div className="relative w-full">
                <select
                  className="appearance-none w-full px-4 py-5 pr-10 rounded-full  bg-white 
        placeholder:font-inter placeholder:font-light placeholder:text-[16px] placeholder:text-black"
                >
                  <option>Individual</option>
                  <option>Vendor 2</option>
                  <option>Vendor 3</option>
                  <option>Vendor 4</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                  <BoldDropdownIcon />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 px-2 gap-4">
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
                placeholder=" first name"
              />
            </div>

            {/* Second Field */}
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
                className="px-3 py-5  bg-white  rounded-full placeholder:font-gordita placeholder:text-[16px] placeholder:text-black placeholder:font-normal "
                placeholder=" last name"
              />
            </div>
            {/* third field */}
            <div className="flex flex-col">
              <label
                htmlFor="number"
                className="text-[16px] font-medium text-black font-gordita mb-1"
              >
                Mobile Number{" "}
                <span className="text-[16px] font-normal text-black font-gordita ">
                  (Optional)
                </span>
              </label>
              <input
                type="text"
                id="number"
                name="mobilenumber"
                className="px-3 py-5 bg-white  rounded-full  placeholder:font-gordita placeholder:text-[16px] placeholder:text-black placeholder:font-normal "
                placeholder=" first name"
              />
            </div>

            {/*fourth Field */}
            <div className="flex flex-col">
              <label
                htmlFor="number"
                className="text-[16px] font-medium text-black font-gordita mb-1"
              >
                Alternate Mobile Number
                <span className="text-[16px] font-normal text-black font-gordita ">
                  (Optional)
                </span>
              </label>
              <input
                type="text"
                id="altnumber"
                name="altmobilenumber"
                className="px-3 py-5  bg-white rounded-full  placeholder:font-gordita placeholder:text-[16px] placeholder:text-black placeholder:font-normal "
                placeholder=" last name"
              />
            </div>
            {/* fifth field */}
            <div className="flex flex-col">
              <label
                htmlFor="experience"
                className="text-[16px] font-medium text-black font-gordita mb-1"
              >
                Years Of Experience
              </label>
              <div className="relative w-full">
                <select
                  className="appearance-none w-full px-4 py-5 pr-10 rounded-full  bg-white
        placeholder:font-inter placeholder:font-light placeholder:text-[16px] placeholder:text-black"
                >
                  <option>10 Years</option>
                  <option>20 Years</option>
                  <option>30 Years</option>
                  <option>40 Years</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                  <BoldDropdownIcon />
                </div>
              </div>
            </div>
            {/* sixth field */}
            <div className="flex flex-col">
              <label
                htmlFor="language"
                className="text-[16px] font-medium text-black font-gordita mb-1"
              >
                Languages Spoken
              </label>
              <div className="relative w-full">
                <select
                  className="appearance-none w-full px-4 py-5 pr-10 rounded-full  bg-white
        placeholder:font-inter placeholder:font-light placeholder:text-[16px] placeholder:text-black"
                >
                  <option>English</option>
                  <option>Hindi</option>
                  <option>Tamil</option>
                  <option>Gujrati</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                  <BoldDropdownIcon />
                </div>
              </div>
            </div>
            {/* 7th field */}
            <div className="flex flex-col">
              <label
                htmlFor="working hours and days"
                className="text-[16px] font-medium text-black font-gordita mb-1"
              >
                Working Days and Hours
              </label>
              <input
                type="number"
                id="workinghours"
                name="workinghours"
                className="px-3 py-5  bg-white rounded-full  placeholder:font-gordita placeholder:text-[16px] placeholder:text-black placeholder:font-normal "
                placeholder=" 5 days"
              />
            </div>
            {/* 8th field */}
            <div className="flex flex-col">
              <label
                htmlFor="dob"
                className="text-[16px] font-medium text-black font-gordita mb-1"
              >
                Date of Birth
              </label>
              <input
                type="date"
                id="date"
                name="dob"
                className="px-3 py-5  bg-white  rounded-full  placeholder:font-gordita placeholder:text-[16px] placeholder:text-black placeholder:font-normal "
                placeholder=" 5 days"
              />
            </div>
            {/* 9th field */}
            <div className="flex flex-col">
              <label
                htmlFor="gender"
                className="text-[16px] font-medium text-black font-gordita mb-1"
              >
                Gender
              </label>
              <div className="relative w-full">
                <select
                  className="appearance-none w-full px-4 py-5 pr-10 rounded-full  bg-white 
        placeholder:font-inter placeholder:font-light placeholder:text-[16px] placeholder:text-black"
                >
                  <option>Male</option>
                  <option>Female</option>
                  <option>Transgender</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                  <BoldDropdownIcon />
                </div>
              </div>
            </div>
            {/* 10th field */}
            <div className="flex flex-col">
              <label
                htmlFor="address"
                className="text-[16px] font-medium text-black font-gordita mb-1"
              >
                Residential Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                className="px-3 py-5 bg-white  rounded-full  placeholder:font-gordita placeholder:text-[16px] placeholder:text-black placeholder:font-normal "
                placeholder=" first name"
              />
            </div>
            {/* 11th field */}
            <div className="flex flex-col">
              <label
                htmlFor="city"
                className="text-[16px] font-medium text-black font-gordita mb-1"
              >
                City / District
              </label>
              <input
                type="text"
                id="city"
                name="city"
                className="px-3 py-5 bg-white  rounded-full placeholder:font-gordita placeholder:text-[16px] placeholder:text-black placeholder:font-normal "
                placeholder=" first name"
              />
            </div>

            {/* 12th Field */}
            <div className="flex flex-col">
              <label
                htmlFor="state"
                className="text-[16px] font-medium text-black font-gordita mb-1"
              >
                State
              </label>
              <input
                type="text"
                id="lstate"
                name="state"
                className="px-3 py-5  bg-white  rounded-full placeholder:font-gordita placeholder:text-[16px] placeholder:text-black placeholder:font-normal "
                placeholder=" last name"
              />
            </div>
            {/* 13th field */}
            <div className="flex flex-col">
              <label
                htmlFor="pin"
                className="text-[16px] font-medium text-black font-gordita mb-1"
              >
                PIN Code
              </label>
              <input
                type="number"
                id="pin"
                name="pin"
                className="px-3 py-5  bg-white  rounded-full placeholder:font-gordita placeholder:text-[16px] placeholder:text-black placeholder:font-normal "
                placeholder=" last name"
              />
            </div>
            {/* 14th field */}
            <div className="flex flex-col">
              <label
                htmlFor="servicepin"
                className="text-[16px] font-medium text-black font-gordita mb-1"
              >
                Serviceable Locations / Pin Codes
              </label>
              <div className="relative w-full">
                <select
                  className="appearance-none w-full px-4 py-5 pr-10 rounded-full  bg-white
        placeholder:font-inter placeholder:font-light placeholder:text-[16px] placeholder:text-black"
                >
                  <option>974 Valencia St San Francisco</option>
                  <option>974 Valencia St San Francisco</option>
                  <option>974 Valencia St San Francisco</option>
                  <option>974 Valencia St San Francisco</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                  <BoldDropdownIcon />
                </div>
              </div>
            </div>
            {/* 15th field */}
            <div className="flex flex-col">
              <label
                htmlFor="modesofcontact"
                className="text-[16px] font-medium text-black font-gordita mb-1"
              >
                Preferred Mode of Communication
              </label>
              <div className="relative w-full">
                <select
                  className="appearance-none w-full px-4 py-5 pr-10 rounded-full  bg-white
        placeholder:font-inter placeholder:font-light placeholder:text-[16px] placeholder:text-black"
                >
                  <option>Whatsapp</option>
                  <option>Call</option>
                  <option>Email</option>
                  <option>Insta</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                  <BoldDropdownIcon />
                </div>
              </div>
            </div>
          </div>

          <div className=" grid grid-cols-2 px-2 gap-4">
            <div className="flex flex-col">
              <h3 className="py-4 font-gordita font-bold text-[24px] text-black">
                Service Categories
              </h3>
              <label
                htmlFor="servicecategory"
                className="text-[16px] font-medium text-black font-gordita mb-1"
              >
                Select Your Service Categories
              </label>
              <div className="relative w-full">
                <select
                  className="appearance-none w-full px-4 py-5 pr-10 rounded-full  bg-white
        placeholder:font-inter placeholder:font-light placeholder:text-[16px] placeholder:text-black"
                >
                  <option>Party Organizer</option>
                  <option>Event 1</option>
                  <option>Event 2</option>
                  <option>Event 3</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                  <BoldDropdownIcon />
                </div>
              </div>
            </div>
          </div>

          <h3 className="px-2 py-4 font-gordita font-bold text-[24px] text-black">
            Banking & Payment Details
          </h3>
          <div className=" grid grid-cols-2 px-2 gap-4">
            <div className="flex flex-col">
              <label
                htmlFor="bankName"
                className="text-[16px] font-medium text-black font-gordita mb-1"
              >
                Bank Account Holder Name
              </label>
              <input
                type="text"
                id="bankName"
                name="bankName"
                className="px-3 py-5 bg-white  rounded-full  placeholder:font-gordita placeholder:text-[16px] placeholder:text-black placeholder:font-normal "
                placeholder=" SGV Designer"
              />
            </div>

            {/* Second Field */}
            <div className="flex flex-col">
              <label
                htmlFor="accountNumber"
                className="text-[16px] font-medium text-black font-gordita mb-1"
              >
                Account Number
              </label>
              <input
                type="number"
                id="accountNumber"
                name="accountNumber"
                className="px-3 py-5  bg-white  rounded-full  placeholder:font-gordita placeholder:text-[16px] placeholder:text-black placeholder:font-normal "
                placeholder="99875214569852"
              />
            </div>
            {/* third field */}
            <div className="flex flex-col">
              <label
                htmlFor="ifsccode"
                className="text-[16px] font-medium text-black font-gordita mb-1"
              >
                IFSC Code{" "}
              </label>
              <input
                type="number"
                id="number"
                name="ifsccode"
                className="px-3 py-5 bg-white  rounded-full  placeholder:font-gordita placeholder:text-[16px] placeholder:text-black placeholder:font-normal "
                placeholder="SGV0000852"
              />
            </div>

            {/*fourth Field */}
            <div className="flex flex-col">
              <label
                htmlFor="upiId"
                className="text-[16px] font-medium text-black font-gordita mb-1"
              >
                UPI ID (Optional)
                <span className="text-[16px] font-normal text-black font-gordita ">
                  (Optional)
                </span>
              </label>
              <input
                type="number"
                id="upiId"
                name="upiId"
                className="px-3 py-5  bg-white  rounded-full  placeholder:font-gordita placeholder:text-[16px] placeholder:text-black placeholder:font-normal "
                placeholder=" YBL@258"
              />
            </div>
            {/* fifth field */}
            <div className="flex flex-col">
              <label
                htmlFor="paymentMethod"
                className="text-[16px] font-medium text-black font-gordita mb-1"
              >
                Preferred Payment Mode
              </label>
              <div className="relative w-full">
                <select
                  className="appearance-none w-full px-4 py-5 pr-10 rounded-full  bg-white
        placeholder:font-inter placeholder:font-light placeholder:text-[16px] placeholder:text-black"
                >
                  <option>Bank transfer</option>
                  <option>Cash</option>
                  <option>Upi</option>
                  <option>Paytm</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                  <BoldDropdownIcon />
                </div>
              </div>
            </div>
          </div>
          {/* uploading section */}
          <div className=" grid grid-cols-2 px-2 gap-6">
            {/* one  */}
            <div className=" rounded-md">
              <h2 className="py-6 font-bold font-gordita text-black text-[24px] mb-2">
                Upload Profile Photo
              </h2>
              <label className="w-full h-40 bg-white border-2 border-dashed border-[#2674BA] rounded-md flex flex-col gap-2 justify-center items-center text-center cursor-pointer hover:bg-blue-50 transition">
                <input type="file" className="hidden" />
                <UploadIcon />
                <span className="font-medium font-gordita text-black text-[14px]">
                  Upload Profile Photo
                </span>
                <span className="font-normal font-gordita text-[#2674BA] text-[14px]">
                  Drag And Drop
                </span>
              </label>
            </div>

            {/* two */}
            <div className="rounded-md">
              <h2 className="py-6 font-bold font-gordita text-black text-[24px] mb-2">
                Upload Business Photo
              </h2>
              <label className="w-full h-40 bg-white border-2 border-dashed border-[#2674BA] rounded-md flex flex-col gap-2 justify-center items-center text-center cursor-pointer hover:bg-blue-50 transition">
                <input type="file" className="hidden" />
                <UploadIcon />
                <span className="font-medium font-gordita text-black text-[14px]">
                  Upload Business Photo
                </span>
                <span className="font-normal font-gordita text-[#2674BA] text-[14px]">
                  Drag And Drop
                </span>
              </label>
            </div>
          </div>
          {/* upload section two */}
          <h3 className="px-2 py-6 font-bold font-gordita text-black text-[24px] mb-2">
            Upload Document{" "}
          </h3>
          <div className=" grid grid-cols-3 px-2 gap-6">
            {/* one */}
            <div className="rounded-md">
              <label className="w-full h-40 bg-white border-2 border-dashed border-[#2674BA] rounded-md flex flex-col gap-2 justify-center items-center text-center cursor-pointer hover:bg-blue-50 transition">
                <input type="file" className="hidden" />
                <UploadIcon />
                <span className="font-medium font-gordita text-black text-[14px]">
                  Upload Aadhar Card Front & Back photo
                </span>
                <span className="font-normal font-gordita text-[#2674BA] text-[14px]">
                  Drag And Drop
                </span>
              </label>
            </div>
            {/* two */}
            <div className="rounded-md">
              <label className="w-full h-40 bg-white border-2 border-dashed border-[#2674BA] rounded-md flex flex-col gap-2 justify-center items-center text-center cursor-pointer hover:bg-blue-50 transition">
                <input type="file" className="hidden" />
                <UploadIcon />
                <span className="font-medium font-gordita text-black text-[14px]">
                  PAN Card
                </span>
                <span className="font-normal font-gordita text-[#2674BA] text-[14px]">
                  Drag And Drop
                </span>
              </label>
            </div>
            {/* three */}
            <div className="rounded-md">
              <label className="w-full h-40 bg-white border-2 border-dashed border-[#2674BA] rounded-md flex flex-col gap-2 justify-center items-center text-center cursor-pointer hover:bg-blue-50 transition">
                <input type="file" className="hidden" />
                <UploadIcon />
                <span className="font-medium font-gordita text-black text-[14px]">
                  GSTIN{" "}
                  <span className="font-normal font-gordita text-black text-[14px]">
                    (If Applicable)
                  </span>
                </span>
                <span className="font-normal font-gordita text-[#2674BA] text-[14px]">
                  Drag And Drop
                </span>
              </label>
            </div>
            {/* four */}
            <div className="rounded-md">
              <label className="w-full h-40 bg-white border-2 border-dashed border-[#2674BA] rounded-md flex flex-col gap-2 justify-center items-center text-center cursor-pointer hover:bg-blue-50 transition">
                <input type="file" className="hidden" />
                <UploadIcon />
                <span className="font-medium font-gordita text-black text-[14px]">
                  FSSAI Certificate
                </span>
                <span className="font-normal font-gordita text-[#2674BA] text-[14px]">
                  Drag And Drop
                </span>
              </label>
            </div>
            {/* five */}
            <div className="rounded-md">
              <label className="w-full h-40 bg-white border-2 border-dashed border-[#2674BA] rounded-md flex flex-col gap-2 justify-center items-center text-center cursor-pointer hover:bg-blue-50 transition">
                <input type="file" className="hidden" />
                <UploadIcon />
                <span className="font-medium font-gordita text-black text-[14px]">
                  Professional Certificates
                  <span className="font-normal font-gordita text-black text-[14px]">
                    (If Any)
                  </span>
                </span>
                <span className="font-normal font-gordita text-[#2674BA] text-[14px]">
                  Drag And Drop
                </span>
              </label>
            </div>
            {/* six */}
            <div className="rounded-md">
              <label className="w-full h-40 bg-white border-2 border-dashed border-[#2674BA] rounded-md flex flex-col gap-2 justify-center items-center text-center cursor-pointer hover:bg-blue-50 transition">
                <input type="file" className="hidden" />
                <UploadIcon />
                <span className="font-medium font-gordita text-black text-[14px]">
                  Portfolio / Sample Work Files
                </span>
                <span className="font-normal font-gordita text-[#2674BA] text-[14px]">
                  Drag And Drop
                </span>
              </label>
            </div>
          </div>
          <h3 className="px-2 py-8 font-bold font-gordita text-black text-[24px] mb-2">
            Pricing & Policy{" "}
          </h3>
          <div className=" grid grid-cols-2 px-2 gap-6">
            {/* one */}
            <div className="flex flex-col">
              <label
                htmlFor="priceStructure"
                className="text-[16px] font-medium text-black font-gordita mb-1"
              >
                Pricing Structure
              </label>
              <div className="relative w-full">
                <select
                  className="appearance-none w-full px-4 py-5 pr-10 rounded-full  bg-white
        placeholder:font-inter placeholder:font-light placeholder:text-[16px] placeholder:text-black"
                >
                  <option>Hourly</option>
                  <option>Daily</option>
                  <option>Weekly</option>
                  <option>Monthly</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                  <BoldDropdownIcon />
                </div>
              </div>
            </div>
            {/* two */}
            <div className="flex flex-col">
              <label
                htmlFor="price"
                className="text-[16px] font-medium text-black font-gordita mb-1"
              >
              Price Range
              </label>
              <Box sx={{ width: '98%' ,mr:4 }}>
                <Slider
                  marks={marks}
                  step={10}
                  value={val}
                  valueLabelDisplay="auto"
                  min={MIN}
                  max={MAX}
                  onChange={handleChange}
                />
                <Box sx={{ display: "flex", justifyContent: "space-between", mt:-1}}>
                  <Typography
                    variant="body2"
                    onClick={() => setVal(MIN)}
                    sx={{ cursor: "pointer" }}
                  >
                    {MIN}
                  </Typography>
                  <Typography
                    variant="body2"
                    onClick={() => setVal(MAX)}
                    sx={{ cursor: "pointer" }}
                  >
                    {MAX} 
                  </Typography>
                </Box>
              </Box>
            </div>
            {/* three */}
            <div className="flex flex-col">
              <label
                htmlFor="offertype"
                className="text-[16px] font-medium text-black font-gordita mb-1"
              >
                Do you offer Packages?
              </label>
              <div className="relative w-full">
                <select
                  className="appearance-none w-full px-4 py-5 pr-10 rounded-full  bg-white
        placeholder:font-inter placeholder:font-light placeholder:text-[16px] placeholder:text-black"
                >
                  <option>WELCOME 10</option>
                  <option>WELCOME 20</option>
                  <option>WELCOME 30</option>
                  <option>WELCOME 40</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                  <BoldDropdownIcon />
                </div>
              </div>
            </div>
            {/* four */}
            <div className="flex flex-col">
              <label
                htmlFor="refundtype"
                className="text-[16px] font-medium text-black font-gordita mb-1"
              >
                Cancellation & Refund Policy
              </label>
              <div className="relative w-full">
                <select
                  className="appearance-none w-full px-4 py-5 pr-10 rounded-full  bg-white
        placeholder:font-inter placeholder:font-light placeholder:text-[16px] placeholder:text-black"
                >
                  <option>Hourly</option>
                  <option>Daily</option>
                  <option>Weekly</option>
                  <option>Monthly</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                  <BoldDropdownIcon />
                </div>
              </div>
            </div>
          </div>
          <div className="py-6 grid grid-cols-1 px-2">
            <div className="flex flex-col">
              <h3 className="py-4 font-gordita text-black text-16 font-medium">
                Additional Notes
              </h3>
              <textarea
                placeholder="additional notes"
                className="w-full px-4 py-2 rounded-md mb-6 h-25 bg-white placeholder:font-inter placeholder:font-light placeholder:text-[16px] placeholder:text-black"
              ></textarea>
            </div>
          </div>
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
              <div className="font-gordita font-medium text-black text-[20px]">
                I agree to the  
                <span className="font-gordita font-medium text-[#2675B9] text-[20px] underline"> terms and conditions</span>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <button
                type="button"
                onClick={() => setCheckedTwo(!checkedTwo)}
                className={`w-7 h-7 rounded-md border transition-colors duration-200 
          ${
            checkedTwo
              ? "backgroundgradient  text-white"
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
              <div className="font-gordita font-medium text-black text-[20px]">
                I confirm the authenticity of provided documents
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <button
                type="button"
                onClick={() => setCheckedThree(!checkedThree)}
                className={`w-7 h-7 rounded-md border transition-colors duration-200 
          ${
            checkedThree
              ? "backgroundgradient  text-white"
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
              <div className="font-gordita font-medium text-black text-[20px]">
                I allow platform to conduct background verification
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <button
                type="button"
                onClick={() => setCheckedFour(!checkedFour)}
                className={`w-7 h-7 rounded-md border transition-colors duration-200 
          ${
            checkedFour
              ? "backgroundgradient  text-white"
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
              <div className="font-gordita font-medium text-black text-[20px]">
                I agree to abide by local laws and service regulations
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

export default VendorForm;
