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
} from "../Components/Iconsvg/Iconsvg";
import srv1 from "../assets/images/srv1.png";
import srv2 from "../assets/images/srv2.png";
import srv3 from "../assets/images/srv3.png";
import taxiimg from "../assets/images/taxiimg.png";

const services = [
  {
    servicename: "Taxi Ride",
    date: "05 May 2025 09:40 PM",
    status: "Completed",
pickup:"Seventh Ave, 20th Floor, New York, NY 10018",
drop:"Seventh Ave, 20th Floor, New York, NY 10018",
    image: taxiimg,
    id: "#123456",
    name: "Jack Smith",
    email: "jackSmith1234@gmail.com",
    phoneNumber: "+91 9876543210",
   
    guest: "05",
  },
  {
    servicename: "Taxi Ride",
    date: " 05 May 2025 09:40 PM",
    status: "Completed",
    pickup:"Seventh Ave, 20th Floor, New York, NY 10018",
drop:"Seventh Ave, 20th Floor, New York, NY 10018",
    image: taxiimg,
    id: "#123456",
    name: "Jack Smith",
    email: "jackSmith1234@gmail.com",
    phoneNumber: "+91 9876543210",
   
    guest: "05",
  },
  {
    servicename: "Taxi Ride",
    date: "05 May 2025 09:40 PM",
    status: "Completed",
    pickup:"Seventh Ave, 20th Floor, New York, NY 10018",
drop:"Seventh Ave, 20th Floor, New York, NY 10018",
    image: taxiimg,
    id: "#123456",
    name: "Jack Smith",
    email: "jackSmith1234@gmail.com",
    phoneNumber: "+91 9876543210",
   
    guest: "05",
  },
  {
    servicename: "Taxi Ride",
    date: "05 May 2025 09:40 PM",
    status: "Cancel",
    pickup:"Seventh Ave, 20th Floor, New York, NY 10018",
drop:"Seventh Ave, 20th Floor, New York, NY 10018",
    image: taxiimg,
    id: "#123456",
    name: "Jack Smith",
    email: "jackSmith1234@gmail.com",
    phoneNumber: "+91 9876543210",
   
    guest: "05",
  },
  //  {
  //   servicename: "Party Organizer",
  //   date: "10 min ago",
  //   status: "completed",
  //   message:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
  //   image: srv3,
  //   id: "#123456",
  //   name: "Jack Smith",
  //   email: "jackSmith1234@gmail.com",
  //   phoneNumber: "+91 9876543210",
  //   eventType: "Birthday Party",
  //   guest: "05",
  // },
  //  {
  //   servicename: "Party Organizer",
  //   date: "10 min ago",
  //   status: "completed",
  //   message:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
  //   image: srv3,
  //   id: "#123456",
  //   name: "Jack Smith",
  //   email: "jackSmith1234@gmail.com",
  //   phoneNumber: "+91 9876543210",
  //   eventType: "Birthday Party",
  //   guest: "05",
  // },
  //  {
  //   servicename: "Party Organizer",
  //   date: "10 min ago",
  //   status: "completed",
  //   message:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
  //   image: srv3,
  //   id: "#123456",
  //   name: "Jack Smith",
  //   email: "jackSmith1234@gmail.com",
  //   phoneNumber: "+91 9876543210",
  //   eventType: "Birthday Party",
  //   guest: "05",
  // },
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

const TaxiBooking = () => {
const [openIndex, setOpenIndex] = useState(null);
  
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
                      label="Upcoming"
                      {...a11yProps(0)}
                      sx={{ textTransform: "none" }}
                    />
                    <Tab
                      label="Completed"
                      {...a11yProps(1)}
                      sx={{ textTransform: "none" }}
                    />
                    <Tab
                      label="Cancel"
                      {...a11yProps(2)}
                      sx={{ textTransform: "none" }}
                    />
                  </Tabs>

                  {/* Filter Button */}
                  <button className="flex gap-2 items-center px-3 py-1 ">
                    <FilterIcon />
                    <span className="font-gordita font-normal text-[18px] text-black">
                      Filter
                    </span>
                  </button>
                </Box>
              </Box>

          <CustomTabPanel value={value} index={0} className="h-screen pt-5  ">
  <div className="flex flex-col gap-3 h-full overflow-y-scroll  no-scrollbar">
    {services.map((srv, index) => {
      const isOpen = openIndex === index;  

      return (
        <div
          key={index}
          className="relative w-full min-h-[116px] bg-white rounded-2xl p-4  transition-all duration-300"
        >
          <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 w-full">
            <div className="flex gap-8">
              <div className="w-[94px] h-[94px] rounded-xl vendorcardgradient flex justify-center items-center">
                  <TaxiIcon/>
              </div>
              <div className="flex flex-col gap-1">
                <div className="font-gordita font-medium text-[26px] text-black">
                  {srv.servicename}
                </div>
                <div className="font-gordita font-normal text-[18px] text-[#1D2E3A]">
                  Date: {srv.date}
                </div>
              </div>
            </div>

            <div className="flex flex-col ">
              <div className="font-gordita font-medium text-[22px] text-black">
                Status
              </div>
              <div className={`font-gordita font-normal text-[20px] ${
      srv.status === 'upcoming'
        ? 'text-[#DBB829]'
        : srv.status === 'Completed'
        ? 'text-[#41BE13]'
        : srv.status === 'Cancel'
        ? 'text-[#DB5300]'
        : 'text-black'
    }`}>
                {srv.status}
              </div>
            </div>

            <div className="flex items-center">
              <button
                className="backgroundgradient text-white rounded-full px-8 py-2 flex items-center gap-2 w-full justify-center"
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
              >
                <span className="font-medium font-gordita text-[18px] text-center">
                Driver Details
                </span>
                {isOpen ? (
                  <UpwordIcon className="text-[#2674BA]" />
                ) : (
                  <BoldDownIcon className="text-white" />
                )}
              </button>
            </div>
          </div>

          {isOpen && (
            <div className="mt-4 bg-white flex flex-col gap-3 transition-all duration-300">
              <div className="grid grid-cols-3 gap-2">
              
                  <div className="flex items-center gap-1">
                    <div className="font-gordita font-medium text-[18px] text-black">
                    Ride ID:
                    </div>
                    <div className="font-gordita font-normal text-[18px] text-[#1D2E3A]">
                      {srv.id}
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="font-gordita font-medium text-[18px] text-black">
                      Name:
                    </div>
                    <div className="font-gordita font-normal text-[18px] text-[#1D2E3A]">
                      {srv.name}
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="font-gordita font-medium text-[18px] text-black">
                      Email:
                    </div>
                    <div className="font-gordita font-normal text-[18px] text-[#1D2E3A]">
                      {srv.email}
                    </div>
                  </div>
               

                
                  <div className="flex items-center gap-1">
                    <div className="font-gordita font-medium text-[18px] text-black">
                      Phone Number:
                    </div>
                    <div className="font-gordita font-normal text-[18px] text-[#1D2E3A]">
                      {srv.phoneNumber}
                    </div>
                  </div>
            
                  <div className="flex items-center gap-1">
                    <div className="font-gordita font-medium text-[18px] text-black">
                      Number Of Passengers:
                    </div>
                    <div className="font-gordita font-normal text-[18px] text-[#1D2E3A]">
                      {srv.guest}
                    </div>
                  </div>
                

                
              </div>
              <div className="flex gap-1">
                  <div className="font-gordita font-medium text-[18px] text-black">
                  Pickup Location:
                  </div>
                  <div className="font-gordita font-normal text-[18px] text-[#1D2E3A]">
                    {srv.pickup}
                  </div>
                </div>
                 <div className="flex gap-1">
                  <div className="font-gordita font-medium text-[18px] text-black">
                    Drop Location:
                  </div>
                  <div className="font-gordita font-normal text-[18px] text-[#1D2E3A]">
                    {srv.drop}
                  </div>
                </div>
            </div>
          )}
        </div>
      );
    })}
  </div>
</CustomTabPanel>

              <CustomTabPanel value={value} index={1}></CustomTabPanel>
              <CustomTabPanel value={value} index={2}></CustomTabPanel>
              <CustomTabPanel value={value} index={3}>
                {/* Events Booking content */}
              </CustomTabPanel>
            </div>
          </div>
        </div>
      </Sidebar>
    </>
  );
};

export default TaxiBooking;
