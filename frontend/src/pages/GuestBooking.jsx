import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Sidebar from "../Components/Reusables/Sidebar";
import { TabIconOne, TabIconTwo ,FilterIcon} from "../Components/Iconsvg/Iconsvg";
import { Link } from "react-router-dom";
import crad1 from "../assets/images/crad1.png";
import card2 from "../assets/images/card2.png";
import card3 from "../assets/images/card3.png";
import card4 from "../assets/images/card4.png";
import card5 from "../assets/images/card5.png";
import card6 from "../assets/images/card6.png";
import Card from '../Components/Reusables/Card';


const properties = [
  {
    image: crad1,
    title: "Skyper Pool Apartment",
    location: "974 Valencia St San Francisco, CA 94110",
    cars: 2,
    beds: 2,
    baths: 3,
    persons: 4,
    price: 10000,
    liked: true,
  },
  {
    image: card2,
    title: "Skyper Pool Apartment",
    location: "Las Vegas, NV",
    cars: 2,
    beds: 4,
    baths: 4,
    persons: 4,
    price: 25000,
  },
  {
    image: card3,
    title: "Skyper Pool Apartment",
    location: "974 Valencia St San Francisco, CA 94110",
    cars: 2,
    beds: 2,
    baths: 3,
    persons: 4,
    price: 10000,
    liked: true,
  },
  {
    image: card4,
    title: "Skyper Pool Apartment",
    location: "Las Vegas, NV",
    cars: 2,
    beds: 4,
    baths: 4,
    persons: 4,
    price: 25000,
  },
  {
    image: card5,
    title: "Skyper Pool Apartment",
    location: "974 Valencia St San Francisco, CA 94110",
    cars: 2,
    beds: 2,
    baths: 3,
    persons: 4,
    price: 10000,
    liked: true,
  },
  {
    image:card6,
    title: "Skyper Pool Apartment",
    location: "Las Vegas, NV",
    cars: 2,
    beds: 4,
    baths: 4,
    persons: 4,
    price: 25000,
  },
  {
    image:card6,
    title: "Skyper Pool Apartment",
    location: "Las Vegas, NV",
    cars: 2,
    beds: 4,
    baths: 4,
    persons: 4,
    price: 25000,
  },
  {
    image:card6,
    title: "Skyper Pool Apartment",
    location: "Las Vegas, NV",
    cars: 2,
    beds: 4,
    baths: 4,
    persons: 4,
    price: 25000,
  },
];

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`booking-tabpanel-${index}`}
      aria-labelledby={`booking-tab-${index}`}
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
    id: `booking-tab-${index}`,
    "aria-controls": `booking-tabpanel-${index}`,
  };
}

const GuestBooking = () => {
  const [value, setValue] = useState(0);
  const handleChange = (_evt, newVal) => {
    setValue(newVal);
  };

  return (
    
    <Sidebar>
      {/* three cards */}
  <div className="p-8">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="h-[122px] rounded-lg vendorcardgradient flex items-center px-4 sm:px-6">
          <div className="flex items-center gap-4 w-full">
            <TabIconOne />
            <div className="flex flex-col justify-center w-full">
              <p className="font-gordita font-normal text-black text-[24px] leading-tight">
                Total Bookings
              </p>
              <p className="font-gordita font-bold text-black text-[30px] leading-tight">
                1002+
              </p>
            </div>
          </div>
        </div>
        <div className="h-[122px] rounded-lg bgmiddlecrad flex items-center px-4 sm:px-6">
          <div className="flex items-center gap-4 w-full">
            <TabIconTwo />
            <div className="flex flex-col justify-center w-full">
              <p className="font-gordita font-normal text-white text-[24px] leading-tight">
                Upcoming Bookings
              </p>
              <p className="font-gordita font-bold text-white text-[30px] leading-tight">
                04
              </p>
            </div>
          </div>
        </div>
        <div className="h-[122px] rounded-lg vendorcardgradient flex items-center px-4 sm:px-6">
          <div className="flex items-center gap-4 w-full">
            <TabIconOne />
            <div className="flex flex-col justify-center w-full">
              <p className="font-gordita font-normal text-black text-[24px] leading-tight">
                Cancel Bookings
              </p>
              <p className="font-gordita font-bold text-black text-[30px] leading-tight">
                11
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* tabs section */}
      <div className="mt-8">
<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
    {/* Tabs Section */}
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="booking tabs"
      variant="scrollable"
      scrollButtons="auto"
      sx={{ flex: 1 }}
    >
      <Tab label="Upcoming" {...a11yProps(0)} sx={{ textTransform: "none" }} />
      <Tab label="Completed" {...a11yProps(1)} sx={{ textTransform: "none" }} />
      <Tab label="Cancel" {...a11yProps(2)} sx={{ textTransform: "none" }} />
    </Tabs>

    {/* Filter Button */}
    <button className="flex gap-2 items-center px-3 py-1 ">
      <FilterIcon />
      <span className="font-gordita font-normal text-[18px] text-black">Filter</span>
    </button>
  </Box>
</Box>


        <CustomTabPanel value={value} index={0} className="h-full pt-8">
       
          <div className=" w-full h-full ">
              <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {properties.map((prop, idx) => (
                 
                 <Link to="/details"   state={{ fromGuestTrip: true }}>
                  <Card key={idx} {...prop}  boldtext={true}/>
                 </Link>
                ))}
              </div>
          
        </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1} className="h-full pt-8">
        <div className=" w-full h-full ">
              <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {properties.map((prop, idx) => (
                 <Link to="/details">
                  <Card key={idx} {...prop}  dynamicIcon={<span className="inline-flex items-center rounded-full bg-white px-4 py-2 text-[16px] font-gordita font-medium text-[#41BE13]   ">Completed</span>} />
                  </Link>
                ))}
              </div>
          
        </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2} className="h-full pt-8">
           <div className=" w-full h-full ">
              <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {properties.map((prop, idx) => (
                   <Link to="/details">
                  <Card key={idx} {...prop}  dynamicIcon={<span className="inline-flex items-center rounded-full bg-white px-4 py-2 text-[16px] font-gordita font-medium  text-[#F44336] "> Canceled</span>}/>
                 </Link>
                ))}
              </div>
          
        </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          {/* Events Booking content */}
        </CustomTabPanel>
      </div>
      </div>
    </Sidebar>
  );
};

export default GuestBooking;
