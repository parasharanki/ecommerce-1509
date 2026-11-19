import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import { PreviousArrowIcon,ForwardArrowIcon } from "../Iconsvg/Iconsvg";
import slideone from "../../assets/images/slideone.png";

import slidetwo from "../../assets/images/slidetwo.png";
import slidethree from "../../assets/images/slidethree.png";
import slidefour from "../../assets/images/slidefour.png";
import slide5 from "../../assets/images/slide5.png";
import { Link } from "react-router-dom";

const PrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute left-[-70px] top-1/2 -translate-y-1/2 z-10 w-25 h-25  hidden xl:flex items-center justify-center cursor-pointer "
  >
    <svg
      className="w-full h-full object-contain"
      viewBox="0 0 134 134"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d)">
        <circle
          cx="20"
          cy="20"
          r="20"
          transform="matrix(-1 0 0 1 87 43)"
          fill="url(#paint0_linear)"
        />
      </g>
      <path
        d="M71 54.2125L69.7063 53L59 63L69.7063 73L71 71.7938L61.5938 63L71 54.2125Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_d"
          x="0"
          y="0"
          width="134"
          height="134"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="23.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.865385 0 0 0 0 0.865385 0 0 0 0 0.865385 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear"
          x1="43.4682"
          y1="2.03389"
          x2="-8.71941"
          y2="22.3746"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#46CFC3" />
          <stop offset="0.399061" stopColor="#2471B7" />
          <stop offset="0.638148" stopColor="#2674BA" />
          <stop offset="1" stopColor="#B0C031" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

const NextArrow = ({ onClick }) => (
   <div
    onClick={onClick}
    className="absolute right-[-80px] top-1/2 -translate-y-1/2 z-10 w-25 h-25  hidden xl:flex items-center justify-center cursor-pointer"
  >
    <svg
      className="w-full h-full object-contain"
      viewBox="0 0 134 134"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
    <g filter="url(#filter0_d_383_555)">
<circle cx="67" cy="63" r="20" fill="url(#paint0_linear_383_555)"/>
</g>
<path d="M63 54.2125L64.2937 53L75 63L64.2937 73L63 71.7938L72.4062 63L63 54.2125Z" fill="white"/>
<defs>
<filter id="filter0_d_383_555" x="0" y="0" width="134" height="134" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="23.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.865385 0 0 0 0 0.865385 0 0 0 0 0.865385 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_383_555"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_383_555" result="shape"/>
</filter>
<linearGradient id="paint0_linear_383_555" x1="90.4682" y1="45.0339" x2="38.2806" y2="65.3746" gradientUnits="userSpaceOnUse">
<stop stop-color="#46CFC3"/>
<stop offset="0.399061" stop-color="#2471B7"/>
<stop offset="0.638148" stop-color="#2674BA"/>
<stop offset="1" stop-color="#B0C031"/>
</linearGradient>
</defs>
    </svg>
  </div>
);

const categories = [
  { title: "Apartment", count: 5, image: slideone },
  { title: "Villa", count: 10, image: slidetwo },
  { title: "Farmhouse", count: 6, image: slidethree },
  { title: "Creative workspace", count: 12, image: slidefour },
  { title: "Rural staycations", count: 2, image: slide5 },
  { title: "Apartment", count: 8, image: slide5 },
  { title: "Villa", count: 4, image: slide5 },
  { title: "Farmhouse", count: 3, image: slide5},
  { title: "Creative workspace", count: 1, image: slide5},
  { title: "Rural staycations", count: 2, image: slide5 },
];

const HomeSlider = () => {
  const settings = {
    arrows: true,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 976,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className=" black-dots-slider relative w-full max-w-[1140px] mx-auto  py-10">
      <Slider {...settings}>
        
        {categories.map((cat, idx) => (
          <Link to="properties">
          <div key={idx} className="px-2">
            <div
              className="md:w-[230px]  lg:w-[230px] xl:w-[220px]  h-[330px] bg-cover bg-center relative overflow-hidden object-contain"
              style={{ backgroundImage: `url(${cat.image})` }}
            >
              <div className="" />
              <div className=" pt-5 text-center justify-center text-black font-gordita  z-10">
                <h3 className="font-medium text-[22px] ">{cat.title}</h3>
                <p className="font-normal text-[16px] ">{cat.count} Properties</p>
              </div>
            </div>
          </div>
          </Link>
        ))}
       
      </Slider>
    </div>
  );
};

export default HomeSlider;
