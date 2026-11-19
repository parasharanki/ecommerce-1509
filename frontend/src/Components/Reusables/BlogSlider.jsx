import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import lady from "../../assets/images/lady.png";
const cards = [
  {
    id: 1,
    title: "Card 1",
    image: lady,
    description: "",
  },
  {
    id: 2,
    title: "Card 2",
    image: lady,
  },
  {
    id: 3,
    title: "Card 3",
    image: lady,
  },
  {
    id: 4,
    title: "Card 4",
    image: lady,
  },
  {
    id: 5,
    title: "Card 5",
    image: lady,
  },
  {
    id: 6,
    title: "Card 6",
    image: lady,
  },
  {
    id: 7,
    title: "Card 7",
    image: lady,
  },
  {
    id: 8,
    title: "Card 8",
    image: lady,
  },
  {
    id: 9,
    title: "Card 9",
    image: lady,
  },
    {
    id: 7,
    title: "Card 7",
    image: lady,
  },
  {
    id: 8,
    title: "Card 8",
    image: lady,
  },
  {
    id: 9,
    title: "Card 9",
    image: lady,
  },
];
const BlogSlider = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
     arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 640,
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
    <div className="white-dots-slider">
      <Slider {...settings}>
        {cards.map((card,index) => (
          
          <div key={card.id} className="px-2">
            <div className="rounded-2xl bg-white p-6 shadow-md min-h-[256px] flex items-center  ">
              {/* whole card structure part one */}
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  {/* side image placemnet */}
                  <div className="w-14 h-14 rounded-full overflow-hidden border border-gray-300">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-col">
                    <div className="font-gordita font-medium text-[20px] text-[#1A1A1A]">
                      Cameron Williamson
                    </div>
                    <div className="font-gordita font-normal text-[18px] text-[#1A1A1A]">
                      Ui Designer
                    </div>
                  </div>
                </div>
                {/* text description */}
                <div className="font-gordita font-regular text-[15px] text-[#1A1A1A] leading-[27.3px]">
                  Searches for multiplexes, property comparisons, and the loan
                  estimator. Works great. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dores.
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BlogSlider;
