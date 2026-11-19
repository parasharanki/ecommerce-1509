import React from "react";
import { useState } from "react";
import Header from "../Components/Reusables/Header";
import ServicesCard from "../Components/Reusables/ServicesCard";
import { Dialog } from "@headlessui/react";
import { CrossIcon } from "../Components/Iconsvg/Iconsvg";
import newbg from "../assets/images/newbg.jpg";
import {
  CalenderIcon,
  BlueColourIcon,
  UpmarkIcon,
  BoldDropdownIcon
} from "../Components/Iconsvg/Iconsvg";

import conimg1 from "../assets/images/conimg1.png";
import conimg2 from "../assets/images/conimg2.png";
import conimg3 from "../assets/images/conimg3.png";
import conimg4 from "../assets/images/conimg4.png";
import conimg5 from "../assets/images/conimg5.png";
import conimg6 from "../assets/images/conimg6.png";

const ConciergeServicesPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleOpenDialog = (service) => {
    setSelectedService(service);
    setIsOpen(true);
  };
  const servicesArray = [
    {
      image: conimg1,
      title: "Book a party organizer",
      description:
        "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
    },
    {
      image:conimg2,
      title: "Book a Chef",
      description:
        "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
    },
    {
      image: conimg3,
      title: "Book a special delivery",
      description:
        "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
    },

    {
      image: conimg4,
      title: "Spa Services",
      description:
        "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
    },
    {
      image: conimg5,
      title: "Meal Delivery",
      description:
        "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
    },
    {
      image: conimg6,
      title: "Wellness Therapy",
      description:
        "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
    },
  ];
  // form data collection
  const [form, setForm] = useState({
    bookingId: "",
    name: "",
    email: "",
    phone: "",
    eventType: "",
    guests: "",
    date: "",
    message: "",
    services: [],
  });
   
  const services = [
    "Chef/Catering",
    "Decoration/Party Accessories",
    "Bartender",
    "DJ",
  ];
  const toggleService = (service) => {
    setForm((prev) => {
      const exists = prev.services.includes(service);
      return {
        ...prev,
        services: exists
          ? prev.services.filter((s) => s !== service)
          : [...prev.services, service],
      };
    });
  };

  return (
    <div className="bg-[#F6F6F6]">
      <div className=" w-full">
        <div className="relative w-full min-h-[308px] coinservicesgradient">
         
          <div className="absolute inset-0 flex flex-col gap-6 justify-center items-center text-center max-w-screen-xl mx-auto w-full">
            <div className="">
              <p className="font-gordita font-bold text-[54px] sm:text-[56px] md:text-[60px]  lg:text-[66px] pt-20 ">
                <span className="gradient-textheadingTwo">Concierge Services</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto px-10 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  py-18">
          {servicesArray.map((service, idx) => (
            <ServicesCard
              key={idx}
              {...service}
              className="w-[366px]"
              onClick={() => handleOpenDialog(service)}
            />
          ))}
        </div>
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="relative z-50"
        >
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/80" aria-hidden="true" />

          <div className="fixed inset-0 flex items-center justify-center p-4 ">
            {/* Dialog Panel */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-end">
                <button
                  onClick={() => setIsOpen(false)}
                  className="mt-6 w-8 h-8 rounded-full blogcarddgradient text-white border border-white flex items-center justify-center"
                >
                  <CrossIcon />
                </button>
              </div>
              <div>
                <Dialog.Panel
                  className="bg-white rounded-xl p-6  shadow-lg"
                  style={{
                    backgroundImage: `url(${newbg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <Dialog.Title className=" text-center font-gordita font-bold text-[44px] text-black">
                    {selectedService?.title}
                  </Dialog.Title>
                  <Dialog.Description className="text-center font-gordita font-normal text-[18px] text-black mt-2">
                    {/* Add any extra info or forms here */}
                    {selectedService?.description}
                  </Dialog.Description>
                  <div className="py-4">
                    <form>
                      <input
                        type="text"
                        placeholder="Enter Your Booking ID"
                        className="w-full px-4 py-4 rounded-full border border-black mb-4 bg-white placeholder:font-inter placeholder:font-light placeholder:text-[16px] placeholder:text-black"
                      />
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <input
                          type="text"
                          placeholder="Name"
                          className="px-4 py-4 rounded-full border border-black bg-white
                        placeholder:font-inter placeholder:font-light placeholder:text-[16px] placeholder:text-black
                        "
                        />
                        <input
                          type="email"
                          placeholder="Email"
                          className="px-4 py-4 rounded-full border border-black bg-white
                        placeholder:font-inter placeholder:font-light placeholder:text-[16px] placeholder:text-black
                        "
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <input
                          type="tel"
                          placeholder="Phone Number"
                          className="px-4 py-4 rounded-full border border-black bg-white
                        placeholder:font-inter placeholder:font-light placeholder:text-[16px] placeholder:text-black
                        "
                        />
                        <div className="relative w-full">
    <select
      className="appearance-none w-full px-4 py-4 pr-10 rounded-full border border-black bg-white
        placeholder:font-inter placeholder:font-light placeholder:text-[16px] placeholder:text-black"
    >
      <option>Type Of Event</option>
      <option>Birthday</option>
      <option>Wedding</option>
      <option>Corporate</option>
    </select>

    {/* Custom Dropdown Icon */}
    <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
      <BoldDropdownIcon />
    </div>
    </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <input
                          type="number"
                          placeholder="Number of Guests"
                          className="px-4 py-4 rounded-full border border-black bg-white placeholder:font-inter placeholder:font-light placeholder:text-[16px] placeholder:text-black"
                        />
                        <div className="relative">
                          <div className="flex justify-between w-full px-4 py-4 rounded-full border border-black  bg-white">
                            <input
                              type="Date"
                              placeholder="Select Date"
                              className="  placeholder:font-inter placeholder:font-light placeholder:text-[16px] placeholder:text-black"
                            />
                            <BlueColourIcon />
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        {services.map((service, i) => (
                          <label
                            key={i}
                            className="flex items-center gap-2 text-black font-gordita font-medium text-[18px]"
                          >
                            <input
                              type="radio"
                              value={service}
                              onChange={() => toggleService(service)}
                              className="w-10 h-10 text-[#2573BA] text-blogcarddgradient"
                            />
                            {service}
                          </label>
                        ))}
                      </div>
                      <textarea
                        placeholder="Message"
                        className="w-full px-4 py-2 rounded-xl border border-black mb-6 h-40 bg-white placeholder:font-inter placeholder:font-light placeholder:text-[16px] placeholder:text-black"
                      ></textarea>
                      <div className="w-full mx-auto">
                        <button type="submit" className="backgroundgradient text-white rounded-full px-6 py-3 flex items-center gap-2 w-full justify-center cursor-pointer">
                          <span className="font-medium font-gordita text-[20px] text-center">
                            Submit
                          </span>
                          <UpmarkIcon />
                        </button>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </div>
              landin
            </div>
          </div>
        </Dialog>
      </div>
    </div>
  );
};

export default ConciergeServicesPage;
