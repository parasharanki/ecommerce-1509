import React from 'react'
import Sidebar from '../Components/Reusables/Sidebar'
import { Link } from "react-router-dom";
import crad1 from "../assets/images/crad1.png";
import card2 from "../assets/images/card2.png";
import card3 from "../assets/images/card3.png";
import card4 from "../assets/images/card4.png";
import card5 from "../assets/images/card5.png";
import card6 from "../assets/images/card6.png";
import card7 from "../assets/images/card7.png";
import card8 from "../assets/images/card8.png";
import card9 from "../assets/images/card9.png";
import card10 from "../assets/images/card10.png";
import Card from '../Components/Reusables/Card'; 
import { HeartIconBlue } from '../Components/Iconsvg/Iconsvg';

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
    image:card8,
    title: "Skyper Pool Apartment",
    location: "Las Vegas, NV",
    cars: 2,
    beds: 4,
    baths: 4,
    persons: 4,
    price: 25000,
  },
  {
    image:card10,
    title: "Skyper Pool Apartment",
    location: "Las Vegas, NV",
    cars: 2,
    beds: 4,
    baths: 4,
    persons: 4,
    price: 25000,
  },
];


const Wishlist =() => {
  return (
    <>
    <Sidebar>
     <div className='p-8'>
           <div className=" w-full h-full ">
              <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {properties.map((prop, idx) => (
                 <Link to="/details">
                  <Card key={idx} {...prop}  boldtext={true} className="w-[257px] max-h-[265px] " dynamicIcon={
                      <HeartIconBlue className={`text-xl ${prop.liked ? 'text-red-500' : 'text-gray-400'}`} />
                    }  />
                  </Link>
                ))}
              </div>
          
        </div>
     </div>
    </Sidebar>
    </>
  )
}

export default Wishlist