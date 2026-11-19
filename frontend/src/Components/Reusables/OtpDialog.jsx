import { Dialog } from "@headlessui/react";
import React from "react";
import { CrossIcon,Cellphone,UpmarkIcon,GoogleIcon,AppleIcon } from "../Iconsvg/Iconsvg";
import otpbg from "../../assets/images/otpbg.png";
import { Link } from "react-router-dom";

const OtpDialog = ({ isOpen, setIsOpen, onSendOtp }) => {
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
            className="bg-white rounded w-[420px] h-[589px] shadow-lg"
            style={{
              backgroundImage: `url(${otpbg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="py-6 servicescardgradient text-center font-gordita font-medium text-[22px] text-black">
             Confirm Your Number
            </div>
          <div className="pt-6   text-center font-gordita font-normal text-[18px] text-black">
            Enter the code we've sent via to
            </div>
             <div className="py-2 text-center font-gordita font-bold text-[22px] text-black">
           +919460545541
            </div>
             <div className=" px-6 py-6 flex  justify-center gap-3">
             <input className="w-12 h-12 rounded-full border border-[#2674BA]/17 bg-white">
             </input>
              <input className="w-12 h-12 rounded-full border border-[#2674BA]/17 bg-white">
             </input>
              <input className="w-12 h-12  rounded-full border border-[#2674BA]/17 bg-white">
             </input>
              <input className="w-12 h-12 rounded-full border border-[#2674BA]/17 bg-white">
             </input>
              <input className="w-12 h-12 rounded-full border border-[#2674BA]/17 bg-white">
             </input>
              <input className="w-12 h-12 rounded-full border border-[#2674BA]/17 bg-white">
             </input>
            </div>
              <div className="py-6 text-center font-normal font-gordita text-[16px] text-black">
           Resend
            </div>
           
            <div className="px-6 py-4">
              <Link to="/guest-trip-booking">
              <button
                className="backgroundgradient text-white rounded-full px-6 py-3 flex items-center gap-2 w-full justify-center"
              >
                <span className="font-medium font-gordita text-[20px] text-center">Continue</span>
                <UpmarkIcon />
              </button>
              </Link>
            </div>
            
           
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};

export default OtpDialog;
