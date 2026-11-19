import React from "react";
import Sidebar from "../Components/Reusables/Sidebar";
import topbg from "../assets/images/topbg.png";
import topnew from "../assets/images/topnew.png";
import acntimg from "../assets/images/acntimg.png";
import { Pen,UpmarkIcon } from "../Components/Iconsvg/Iconsvg";

const MyAccount = () => {
  return (
    <>
      <Sidebar>
        <div className="pt-2 pl-8">
          <div className="w-full h-screen rounded-tl-4xl  overflow-y-scroll  no-scrollbar accountgradient">
            <div class="flex flex-col">
              <img
                src={topnew}
                alt="User Cover"
                className="w-full h-full object-cover"
              />

              <div class="sm:w-[90%] w-[90%] mx-auto flex justify-between">
                <div className="flex">
                  <img
                    src={acntimg}
                    alt="User Profile"
                    class="rounded-md xxl:w-[100px] lg:h-[100px]  w-[100px] h-[100px] relative xxl:bottom-[2rem] "
                  />

                  <div className="flex flex-col">
                    <h1 className="w-full text-left   pl-6 text-black   font-gordita font-bold text-[24px]">
                      Jack Smith
                    </h1>
                    <p className="w-full text-left   pl-6 text-black   font-gordita font-regular text-[18px]">
                      jacksmith12345@gmail.com
                    </p>
                  </div>
                </div>
                <div className="pt-4">
                  <button className="backgroundgradient text-white rounded-full px-10 py-2 flex items-center gap-2  justify-center cursor-pointer ">
                    <Pen />
                    <span className="font-medium font-gordita text-[20px] text-center">
                      Edit
                    </span>
                  </button>
                </div>
              </div>

            <div className="w-[90%] mx-auto flex flex-col gap-4 items-center">
  <div className="w-full my-auto py-6 flex flex-col justify-center gap-2">
    <div className="w-full flex sm:flex-row flex-col gap-6 justify-center">
      {/* Left Column */}
      <div className="w-full flex flex-col gap-y-6">
        <div className="flex flex-col">
          <label className="text-black font-gordita font-medium text-[16px] mb-1">
            First Name
          </label>
          <input
            type="text"
            className="px-3 py-5 bg-white rounded-full placeholder:font-gordita placeholder:text-[16px] placeholder:text-black placeholder:font-normal"
            placeholder="Jack"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-[16px] font-medium text-black font-gordita mb-1">
            Email Address
          </label>
          <input
            type="text"
            className="px-3 py-5 bg-white rounded-full placeholder:font-gordita placeholder:text-[16px] placeholder:text-black placeholder:font-normal"
            placeholder="Email Address"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-[16px] font-medium text-black font-gordita mb-1">
            Address
          </label>
          <input
            type="text"
            className="px-3 py-5 bg-white rounded-full placeholder:font-gordita placeholder:text-[16px] placeholder:text-black placeholder:font-normal"
            placeholder="974 Valencia St San Francisco"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-[16px] font-medium text-black font-gordita mb-1">
            State
          </label>
          <input
            type="text"
            className="px-3 py-5 bg-white rounded-full placeholder:font-gordita placeholder:text-[16px] placeholder:text-black placeholder:font-normal"
            placeholder="California"
          />
        </div>
      </div>

      {/* Right Column */}
      <div className="w-full flex flex-col gap-y-6">
        <div className="flex flex-col">
          <label className="text-black font-gordita font-medium text-[16px] mb-1">
            Last Name
          </label>
          <input
            type="text"
            className="px-3 py-5 bg-white rounded-full placeholder:font-gordita placeholder:text-[16px] placeholder:text-black placeholder:font-normal"
            placeholder="Smith"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-black font-gordita font-medium text-[16px] mb-1">
            Mobile Number
          </label>
          <input
            type="text"
            className="px-3 py-5 bg-white rounded-full placeholder:font-gordita placeholder:text-[16px] placeholder:text-black placeholder:font-normal"
            placeholder="+1 9876543210"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-black font-gordita font-medium text-[16px] mb-1">
            City
          </label>
          <input
            type="text"
            className="px-3 py-5 bg-white rounded-full placeholder:font-gordita placeholder:text-[16px] placeholder:text-black placeholder:font-normal"
            placeholder="Los Angeles"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-black font-gordita font-medium text-[16px] mb-1">
            Postal Code
          </label>
          <input
            type="text"
            className="px-3 py-5 bg-white rounded-full placeholder:font-gordita placeholder:text-[16px] placeholder:text-black placeholder:font-normal"
            placeholder="302004"
          />
        </div>
      </div>
    </div>
     <div className="pt-8 flex justify-left">
                  <button className="backgroundgradient text-white rounded-full px-10 py-3 flex items-center gap-2  justify-center cursor-pointer ">
                    
                    <span className="font-medium font-gordita text-[20px] text-center">
                     Save
                    </span>
                    <UpmarkIcon/>
                  </button>
                </div>
  </div>

   
  </div>
 

            </div>
          </div>
        </div>
      </Sidebar>
    </>
  );
};

export default MyAccount;

//           <div className="w-full h-screen ">
//   {/* Top image (30% height) */}

//   <div
//     className="w-full h-[30vh]"
//     style={{
//        backgroundImage: `url(${topnew})`,
//        backgroundSize: "contain",
//        backgroundRepeat: "no-repeat",
//         backgroundPosition: "top",
//     }}
//   >
//      <div className="w-full flex justify-center z-10 py-50 px-6">
//     <div className="bg-transparent  rounded-xl   max-w-screen p-6">
//       <h2 className="text-2xl font-bold text-black">Junction Content</h2>
//       <p className="text-gray-600 mt-2">
//         This overlaps the top image and bottom gradient smoothly. This overlaps the top image and bottom gradient smoothly. This overlaps the top image and bottom gradient smoothly. This overlaps the top image and bottom gradient smoothly.
//       </p>
//     </div>
//   </div>
//   </div>

//   {/* Bottom gradient fills remaining height */}
//   <div className="w-full h-[70vh] vendorcardgradient">
//     {/* Extra content if needed */}
//   </div>
// </div>
