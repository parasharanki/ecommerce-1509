import React from "react";
import Sidebar from "../Components/Reusables/Sidebar";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";
import {
  FilterIcon,
  WhiteDropIcon,
  UpwordIcon,
  DownwardIcon,
  BoldDownIcon,
  TaxiIcon,
  UpmarkIcon,
    CrossIcon,
    CentralIcon,
    CentralIconTwo,
    ZoomIcon,
    BoldDropdownIcon,
    CalyIcon,
    BabyClockIcon
} from "../Components/Iconsvg/Iconsvg";
import event1 from "../assets/images/event1.png";
import event2 from "../assets/images/event2.png";
import event3 from "../assets/images/event3.png";
import event4 from "../assets/images/event4.png";
import event5 from "../assets/images/event5.png";
import event6 from "../assets/images/event6.png";
import EventCard from "../Components/Reusables/EventCard";
import { Dialog } from "@headlessui/react";
import newbg from "../assets/images/newbg.jpg";
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
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`services-tabpanel-${index}`}
      aria-labelledby={`services-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `services-tab-${index}`,
    "aria-controls": `services-tabpanel-${index}`,
  };
}

const EventBooking = () => {
const [openIndex, setOpenIndex] = useState(null);
   const [isOpen, setIsOpen] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
// for diaolog box
     const handleOpenDialog = (service) => {
    setSelectedService(service);
    setIsOpen(true);
  };
  // for the tab handling
  const [value, setValue] = useState(0);
  const handleChange = (_evt, newVal) => {
    setValue(newVal);
  };

  return (
    <>
      <Sidebar>
        <div className="pt-8 pl-8">
          <div className="w-full h-screen vendorcardgradient rounded-tl-2xl   ">
            <div className="p-10">
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  {/* Tabs Section */}
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="booking tabs"
                    variant="scrollable"
                    scrollButtons="auto"
                    sx={{ flex: 1 }}
                  >
                    <Tab
                      label="Hosted Events"
                      {...a11yProps(0)}
                      sx={{ textTransform: "none" }}
                    />
                    <Tab
                      label="Attended Events"
                      {...a11yProps(1)}
                      sx={{ textTransform: "none" }}
                    />
                    
                  </Tabs>

                     {value === 0 && (
  <button
    className="backgroundgradient text-white rounded-full px-8 py-3 flex items-center gap-2 justify-center cursor-pointer"
       onClick={() => handleOpenDialog()}
  >
    <span className="font-medium font-gordita text-[18px] text-center">
      Create New Events
    </span>
    <UpmarkIcon />
  </button>
)}

                  {/* Filter Button */}
                  <button className="flex gap-2 items-center px-3 py-1 ">
                    <FilterIcon />
                    <span className="font-gordita font-normal text-[18px] text-black">
                      Filter
                    </span>
                  </button>
                </Box>
              </Box>

          <CustomTabPanel value={value} index={0} className="h-full pt-5  overflow-hidden">
     <div  className="max-h-[calc(100vh-120px)] overflow-y-scroll no-scrollbar">

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
          {servicesArray.map((service, idx) => (
            <EventCard key={idx} {...service}  showinfo={false} guestsidebtn={true} showbookingbtn={false} showmemberlist={true}  date={true} className="w-[366px] min-h-[514px]  h-full"  />
          ))}
        </div>
            </div>
</CustomTabPanel>

              <CustomTabPanel value={value} index={1}>
                <div  className="max-h-[calc(100vh-120px)] overflow-y-scroll no-scrollbar">

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
          {servicesArray.map((service, idx) => (
            <EventCard key={idx} {...service}  showinfo={false} showdetailsbtn={true} showbookingbtn={false} showmemberlist={true}   date={true} className="w-[366px] min-h-[514px]  h-full"  />
          ))}
        </div>
            </div>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}></CustomTabPanel>
              <CustomTabPanel value={value} index={3}>
                {/* Events Booking content */}
              </CustomTabPanel>
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
                                  className="w-full px-4 py-4 rounded-full border border-black mb-4 bg-white placeholder:font-inter placeholder:font-light placeholder:text-[16px] placeholder:text-black"
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
                                    <div>
                                      <input
                                        type="text"
                                        placeholder="Select Date"
                                        className="focus:outline-none focus:ring-0
                                                 placeholder:font-inter placeholder:font-light placeholder:text-[16px] placeholder:text-black
                                                 "
                                      />
                                    </div>
                                    <CalyIcon />
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
                                      <inputgi
                                        type="text"
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
                                  className="w-full px-4 py-4 rounded-full border border-black mb-4 bg-white placeholder:font-inter placeholder:font-light placeholder:text-[16px] placeholder:text-black"
                                />
                                <textarea
                                  placeholder="Message"
                                  className="w-full px-4 py-2 rounded-xl border border-black mb-6 h-25 bg-white placeholder:font-inter placeholder:font-light placeholder:text-[16px] placeholder:text-black"
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
      </Sidebar>
    </>
  );
};

export default EventBooking;
