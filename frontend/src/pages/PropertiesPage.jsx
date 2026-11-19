import React from 'react'
import crad1 from "../assets/images/crad1.png";
import card2 from "../assets/images/card2.png";
import card3 from "../assets/images/card3.png";
import card4 from "../assets/images/card4.png";
import card5 from "../assets/images/card5.png";
import card6 from "../assets/images/card6.png";
import Card from '../Components/Reusables/Card';
import { HeartIcon } from '../Components/Iconsvg/Iconsvg';
import { Link } from 'react-router-dom';

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
 
];

const PropertiesPage =() =>


  
  {
  return (
    <div className='w-full '>

      <div className=" w-full max-w-[1140px] mx-auto py-10 px-4 xl:px-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
                {properties.map((prop, idx) => (
                  <Link to="/details">
                  <Card key={idx} {...prop}  mediumtext={true} className="  "  />
                   </Link>
                ))}
              </div>
            </div>
    </div>
  )
}

export default PropertiesPage