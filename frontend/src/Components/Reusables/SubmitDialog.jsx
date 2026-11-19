import { Dialog } from "@headlessui/react";
import React from "react";
import { CrossIcon,Cellphone,UpmarkIcon,GoogleIcon,AppleIcon,BulbIcon } from "../Iconsvg/Iconsvg";
import otpbg from "../../assets/images/otpbg.png";
import { Link } from "react-router-dom";
import bggradient from "../../assets/images/bggradient.png";

const SubmitDialog = ({ isOpen, setIsOpen, onSubmitDialog }) => {
  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/80 py-15" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div className="flex flex-col gap-2">
          <div className="flex justify-end">
            <button
              onClick={() => setIsOpen(false)}
              className="mt-6 w-8 h-8 rounded-full blogcarddgradient text-white border border-white flex items-center justify-center"
            >
              <CrossIcon />
            </button>
          </div>

          <Dialog.Panel
            className="bg-white rounded-xl  w-[524px] h-[746px] shadow-lg"
            style={{
              backgroundImage: `url(${bggradient})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
     
            
            <div className="flex flex-col justify-center ">
                         <div className="flex justify-center"> 
                           <BulbIcon />
                         </div>
                       
                     <div className="text-center text-black font-medium font-gordita text-[36px] mt-4 flex justify-center">
                Which Services Would You
                Like To See In Future?
              </div>
             <div className="px-6 py-4">
                           <button
                             className="rounded-full w-full  py-2 servicescardgradient border-2 border-dashed border-[#2573BA]"
                             
                           >
                             <span className="font-gordita font-regular text-black text-[18px]">
                             Host Store
                             </span>
                            
                           </button>
                         </div>
                         <div className="px-6 py-4">
                           <button
                             className="backgroundgradient text-white rounded-full px-6 py-3 flex items-center gap-2 w-full justify-center"
                             
                           >
                             <span className="font-medium font-gordita text-[20px] text-center">
                              Submit
                             </span>
                             <UpmarkIcon />
                           </button>
                         </div>
                       </div>
             
           
       
           
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};

export default SubmitDialog;
