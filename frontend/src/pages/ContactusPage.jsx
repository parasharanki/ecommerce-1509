import React from "react";
import { useState } from "react";
import Header from "../Components/Reusables/Header";
import { UpmarkIcon, BoldDropdownIcon ,CallIcon,EmaildashIcon,LocationdashIcon,SubtractIcon,AdditionIcon} from "../Components/Iconsvg/Iconsvg";

// faq n description
const faqs = [
  {
    question: "What methods of payments are supported?",
    answer:
      " Have questions about our services or platform? Our FAQ section covers everything you need to know-quick answers, helpful tips, and detailed guidance to make your experience seamless and informed.",
  },
  {
    question: "Can I cancel at anytime?",
     answer:
      " Have questions about our services or platform? Our FAQ section covers everything you need to know-quick answers, helpful tips, and detailed guidance to make your experience seamless and informed.",
  },
  {
    question: "How do I get a receipt for my purchase?",
     answer:
      " Have questions about our services or platform? Our FAQ section covers everything you need to know-quick answers, helpful tips, and detailed guidance to make your experience seamless and informed.",
  },
  {
    question: "Which Document do You need?",
     answer:
      " Have questions about our services or platform? Our FAQ section covers everything you need to know-quick answers, helpful tips, and detailed guidance to make your experience seamless and informed.",
  },
  {
    question: "How do I get access to a theme I purchased?",
     answer:
      " Have questions about our services or platform? Our FAQ section covers everything you need to know-quick answers, helpful tips, and detailed guidance to make your experience seamless and informed.",
  },
]

const ContactusPage = () => {
   const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };
  return (
    <div className="">
      <div className=" w-full">
        <div className="relative w-full min-h-[308px] servicescardgradient">
         
          <div className="absolute inset-0 flex flex-col gap-6 justify-center items-center text-center max-w-screen-xl mx-auto w-full">
            <div className="">
              <p className="font-gordita font-bold text-[54px] sm:text-[58px] md:text-[60px]  lg:text-[66px] pt-20 ">
                <span className="gradient-textheading">Contact Us</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full ">
        <div className="w-full max-w-[1140px] mx-auto  py-10  bg-white h-auto">
         <div className="flex flex-col lg:flex-row justify-between gap-10 px-2 md:px-2 xl:px-0">
  {/* Contact Form */}
  <div className="w-full lg:w-[563px] h-auto lg:h-[543px] backgroundgradient rounded-2xl py-5 px-6 sm:px-8">
    <h1 className="font-gordita font-bold text-[32px] sm:text-[36px] md:text-[44px] text-white">
      Get In Touch
    </h1>
    <p className="font-gordita font-normal text-[16px] sm:text-[18px] text-white">
      Lorem Ipsum is simply dummy text of the printing
    </p>

    <form className="py-6">
      <div className="flex flex-col">
        {/* Name & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="Name"
            className="px-4 py-4 rounded-full border border-black bg-white placeholder:font-inter placeholder:font-light placeholder:text-[16px] placeholder:text-black focus:outline-none focus:ring-0"
          />
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-4 rounded-full border border-black bg-white placeholder:font-inter placeholder:font-light placeholder:text-[16px] placeholder:text-black focus:outline-none focus:ring-0"
          />
        </div>

        {/* Phone & Event */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="Phone Number"
            className="px-4 py-4 rounded-full border border-black bg-white placeholder:font-inter placeholder:font-light placeholder:text-[16px] placeholder:text-black focus:outline-none focus:ring-0"
          />
          <div className="relative w-full">
            <select className="appearance-none w-full px-4 py-4 pr-10 rounded-full border border-black bg-white text-black font-inter text-[16px] font-light">
              <option>Event</option>
              <option>Birthday</option>
              <option>Wedding</option>
              <option>Corporate</option>
            </select>
            <div className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2">
              <BoldDropdownIcon />
            </div>
          </div>
        </div>

        {/* Message */}
        <textarea
          placeholder="Message"
          className="w-full px-4 py-2 rounded-xl border border-black mb-6 h-32 bg-white placeholder:font-inter placeholder:font-light placeholder:text-[16px] placeholder:text-black focus:outline-none focus:ring-0"
        ></textarea>

        {/* Submit Button */}
        <div className="w-full">
          <button className="bg-black text-white rounded-full px-6 py-3 flex items-center gap-2 w-full justify-center">
            <span className="font-medium font-gordita text-[18px] sm:text-[20px] text-center">
              Submit
            </span>
          </button>
        </div>
      </div>
    </form>
  </div>

  {/* Contact Info */}
  <div className="w-full lg:max-w-[555px] h-auto lg:min-h-[543px] px-4 sm:px-5">
    <div className="pl-0 md:pl-10">
      <h1 className="pt-5 font-gordita font-bold text-[32px] sm:text-[36px] md:text-[44px] text-black">
        Contact Us
      </h1>
      <p className="font-gordita font-normal text-[16px] sm:text-[18px] text-black">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
      </p>

     <div className="flex flex-col gap-6 py-8 sm:py-12">
  {/* Call */}
  <div className="flex gap-4 sm:gap-5 items-start sm:items-center">
    <div className="flex-shrink-0">
      <CallIcon />
    </div>
    <div className="flex flex-col gap-1">
      <div className="font-gordita font-medium text-[24px] sm:text-[30px] text-black">
        Call
      </div>
      <div className="font-gordita font-normal text-[18px] sm:text-[22px] text-black">
        +91 9876543210
      </div>
    </div>
  </div>

  {/* Address */}
  <div className="flex gap-4 sm:gap-5 items-start sm:items-center">
    <div className="flex-shrink-0">
      <LocationdashIcon />
    </div>
    <div className="flex flex-col gap-1">
      <div className="font-gordita font-medium text-[24px] sm:text-[30px] text-black">
        Address
      </div>
      <div className="font-gordita font-normal text-[18px] sm:text-[22px] text-black break-words">
        2972 Westheimer Rd. Santa Ana, Illinois 85486
      </div>
    </div>
  </div>

  {/* Email */}
  <div className="flex gap-4 sm:gap-5 items-start sm:items-center">
    <div className="flex-shrink-0">
      <EmaildashIcon />
    </div>
    <div className="flex flex-col gap-1">
      <div className="font-gordita font-medium text-[24px] sm:text-[30px] text-black">
        Email
      </div>
      <div className="font-gordita font-normal text-[18px] sm:text-[22px] text-black">
        hello@example.com
      </div>
    </div>
  </div>
</div>

    </div>
  </div>
</div>

        </div>
       <div className="w-full bg-[#F3F3F3]">
  <div className="w-full max-w-[1140px] mx-auto py-10 h-auto px-2 lg:px-2 xl:px-0">
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Heading & Description */}
      <div className="w-full lg:w-1/2">
        <h1 className="font-gordita font-bold text-[32px] sm:text-[40px] lg:text-[50px] text-black leading-tight">
          Frequently Asked Questions
        </h1>
        <p className="mt-4 font-gordita font-normal text-[16px] sm:text-[18px] text-black leading-[28px] sm:leading-[32px]">
          Have questions about our services or platform? Our FAQ section covers
          everything you need to know — quick answers, helpful tips, and detailed
          guidance to make your experience seamless and informed.
        </p>
      </div>

      {/* FAQ Accordion */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {faqs.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <div
              key={index}
              className={`w-full ${
                isActive ? "min-h-[146px]" : "min-h-[66px]"
              } bg-white border border-black transition-all duration-300`}
            >
              <div className="flex flex-col gap-2">
                <div className="flex justify-between pt-5 px-5 items-center">
                  <p className="font-gordita font-medium text-[16px] sm:text-[18px] text-black">
                    {item.question}
                  </p>
                  <button onClick={() => toggle(index)}>
                    {isActive ? <SubtractIcon /> : <AdditionIcon />}
                  </button>
                </div>
                {isActive && item.answer && (
                  <div className="px-5 pb-4">
                    <p className="font-gordita font-normal text-[14px] text-black">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default ContactusPage;
