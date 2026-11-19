import React from "react";
import { useState } from "react";
import Header from "../Components/Reusables/Header";
import {
  BlackcalIcon,
  BorderSearchIcon,
  UpmarkIcon,
  FilterIcon,
  BlueColourIcon,
  ZoomIcon,
  BoldDropdownIcon,
  CalenderIcon,
  CalyIcon,
  BabyClockIcon,
  CentralIcon,
  CentralIconTwo,
  CrossIcon,
  DatechartIcon
} from "../Components/Iconsvg/Iconsvg";
import EventCard from "../Components/Reusables/EventCard";
import { Dialog } from "@headlessui/react";

import newbg from "../assets/images/newbg.jpg";
import event1 from "../assets/images/event1.png";
import event2 from "../assets/images/event2.png";
import event3 from "../assets/images/event3.png";
import event4 from "../assets/images/event4.png";
import event5 from "../assets/images/event5.png";
import event6 from "../assets/images/event6.png";
import { Link } from "react-router-dom";
import Datepicker from "../Components/Reusables/Datepicker";  

const EventPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  // to make the bitton clickable and dialog open
  const handleOpenDialog = (service) => {
    setSelectedService(service);
    setIsOpen(true);
  };
  const servicesArray = [
    {
      image: event1,
      title: "SGV Conferences Events",
      description:
        "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
    },
    {
      image: event2,
      title: "Product Launce Seminars",
      description:
        "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
    },
    {
      image: event3,
      title: "Weddings",
      description:
        "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
    },

    {
      image: event4,
      title: "Social Events",
      description:
        "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
    },
    {
      image: event5,
      title: "Corporate Events",
      description:
        "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
    },
    {
      image: event6,
      title: "Theater Performances",
      description:
        "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
    },
  ];
  const [form, setForm] = useState({
    bookingId: "",
    name: "",
    email: "",
    phone: "",
    eventType: "",
    guests: "",
    date: "",
    message: "",
    // services: [],
  });

  const services = [
    "Chef/Catering",
    "Decoration/Party Accessories",
    "Bartender",
    "DJ",
  ];
  // const toggleService = (service) => {
  //   setForm((prev) => {
  //     const exists = prev.services.includes(service);
  //     return {
  //       ...prev,
  //       services: exists
  //         ? prev.services.filter((s) => s !== service)
  //         : [...prev.services, service],
  //     };
  //   });
  // };
  return (
    <div className="bg-[#F6F6F6]">
      <div className=" w-full">
        <div className="relative w-full min-h-[308px] coinservicesgradient">
        
          <div className="absolute inset-0 flex flex-col gap-6 justify-center items-center text-center max-w-screen-xl mx-auto w-full">
            <div className="">
              <p className="font-gordita font-bold text-[58px] sm:text-[62px] md:text-[66px]  lg:text-[70px]  pt-20 leading-[42px]">
                <span className="gradient-forevent ">Events</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1140px] mx-auto  py-10  ">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 px-4 xl:px-0">
          <div className="flex gap-4">
            <div>
              <span className="font-gordita font-medium text-black text-[26px]">
                Select Event Date
              </span>
            </div>
            <div>
              <BlackcalIcon />
            </div>
            <div>
              <BorderSearchIcon />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-full mx-auto">
              <button className="backgroundgradient text-white rounded-full px-6 py-2 flex items-center gap-2 w-full justify-center">
                <span
                  className="font-medium font-gordita text-[18px] text-center"
                  onClick={() => handleOpenDialog()}
                >
                  Create New Events
                </span>
                <UpmarkIcon />
              </button>
            </div>
            <div className="flex gap-2 items-center">
              <FilterIcon />
              <span className="font-gordita font-normal text-[18px] text-black">
                Filter
              </span>
            </div>
          </div>
        </div>
        <div className=" px-4 xl:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
          {servicesArray.map((service, idx) => (
            <EventCard key={idx} {...service} className="w-[366px] min-h-[514px]  h-full" showinfo={true} showmemberlist={false} showbookingbtn={true} date={true} rating={true}/>
          ))}
        </div>
        </div>
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="relative z-50"
        >
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/80 py-15" aria-hidden="true" />

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
                  className="bg-white rounded-xl p-6   shadow-lg"
                  style={{
                    backgroundImage: `url(${newbg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <Dialog.Title className=" text-center font-gordita font-bold text-[40px] text-black">
                    Create New Event
                  </Dialog.Title>

                  <div className="py-4">
                    <form>
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="w-[171px] h-[141px] border border-black bg-white rounded-2xl flex items-center justify-center">
                          <CentralIcon />
                        </div>
                        <div className="w-[171px] h-[141px] border border-black bg-white rounded-2xl flex items-center justify-center">
                          <CentralIcon />
                        </div>
                        <div className="w-[171px] h-[141px] border border-black bg-white rounded-2xl flex items-center justify-center">
                          <CentralIconTwo />
                        </div>
                      </div>
                      <input
                        type="text"
                        placeholder="Event Name"
                        className="w-full px-4 py-4 rounded-full border border-black mb-4 bg-white focus:outline-none focus:ring-0 placeholder:font-inter placeholder:font-light placeholder:text-[16px] placeholder:text-black"
                      />
                      <div className="flex justify-between w-full px-4 py-4 rounded-full border border-black mb-4 bg-white">
                        <div>
                          <input
                            type="text"
                            placeholder="Location"
                            className="focus:outline-none focus:ring-0 placeholder:font-inter placeholder:font-light placeholder:text-[16px] placeholder:text-black"
                          />
                        </div>

                        <ZoomIcon />
                      </div>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="flex justify-between items-center px-4 py-4 rounded-full border border-black bg-white">
                          <div>
                            <input
                              type="text"
                              placeholder="Public Event"
                              className="focus:outline-none focus:ring-0
                                       placeholder:font-inter placeholder:font-light placeholder:text-[16px] placeholder:text-black
                                       "
                            />
                          </div>
                          <BoldDropdownIcon />
                        </div>
                        <div className="flex justify-between items-center px-4 py-4 rounded-full border border-black bg-white">
                      
                             <Datepicker
                      variant="form"
                                                   icon={<DatechartIcon />}
                                                   placeholder="Select Date"
                     
                     />
                          </div>
                       
                      
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="flex justify-between items-center px-4 py-4 rounded-full border border-black bg-white">
                          <div>
                            <input
                              type="text"
                              placeholder="Start Time"
                              className="focus:outline-none focus:ring-0
                                       placeholder:font-inter placeholder:font-light placeholder:text-[16px] placeholder:text-black
                                       "
                            />
                          </div>
                          <BabyClockIcon />
                        </div>
                        <div className="flex justify-between items-center px-4 py-4 rounded-full border border-black bg-white">
                          <div>
                            <input
                              type="date"
                              placeholder="End Time"
                              className="focus:outline-none focus:ring-0
                                       placeholder:font-inter placeholder:font-light placeholder:text-[16px] placeholder:text-black
                                       "
                            />
                   
                          </div>
                          <BabyClockIcon />
                        </div>
                      </div>
                      <input
                        type="text"
                        placeholder="Enter Event Price"
                        className="w-full px-4 py-4 rounded-full border border-black mb-4 bg-white
                        focus:outline-none focus:ring-0 placeholder:font-inter placeholder:font-light placeholder:text-[16px] placeholder:text-black"
                      />
                      <textarea
                        placeholder="Message"
                        className="w-full px-4 py-2 rounded-xl border border-black mb-6 h-25 bg-white
                        focus:outline-none focus:ring-0  placeholder:font-inter placeholder:font-light placeholder:text-[16px] placeholder:text-black"
                      ></textarea>

                      <div className="w-full mx-auto">
                        <button className="backgroundgradient text-white rounded-full px-6 py-3 flex items-center gap-2 w-full justify-center">
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
            
            </div>
          </div>
        </Dialog>
      </div>
    </div>
  );
};

export default EventPage;
