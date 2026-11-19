import { Dialog } from "@headlessui/react";
import React from "react";
import { CrossIcon,Cellphone,UpmarkIcon,GoogleIcon,AppleIcon } from "../Iconsvg/Iconsvg";
import loginbg from "../../assets/images/loginbg.png";

const DialogLogin = ({ isOpen, setIsOpen, onSendOtp }) => {
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
              backgroundImage: `url(${loginbg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="py-6 servicescardgradient text-center font-gordita font-medium text-[22px] text-black">
              Login Your Account 
            </div>
            <div className="py-6 text-center font-gordita font-medium text-[28px] text-black">
              Welcome to <span className="gradient-textheading font-bold">Nest Bubble</span>
            </div>
            <div className="px-6">
              <div className="font-gordita font-medium text-[16px] text-black py-2">
                Mobile Number
              </div>
              <div className="flex gap-2 items-center px-4 py-4 rounded-full border border-[#2674BA]/17 bg-white">
                <Cellphone />
                <input
                  type="text"
                  placeholder="Enter your mobile number"
                  className="focus:outline-none placeholder:font-inter placeholder:font-light placeholder:text-[14px] placeholder:text-black"
                />
              </div>
            </div>
            <div className="px-6 py-4">
              <button
                className="backgroundgradient text-white rounded-full px-6 py-3 flex items-center gap-2 w-full justify-center"
                onClick={onSendOtp}
              >
                <span className="font-medium font-gordita text-[20px] text-center">Send OTP</span>
                <UpmarkIcon />
              </button>
            </div>
            <div className="px-6 py-3 flex items-center w-full gap-4">
              <div className="flex-grow h-px bg-[#D9D9D9]"></div>
              <span className="font-gordita text-[18px] font-normal text-black whitespace-nowrap">or</span>
              <div className="flex-grow h-px bg-[#D9D9D9]"></div>
            </div>
            <div className="px-6 py-3 flex items-center w-full gap-4 justify-center">
              <GoogleIcon />
              <AppleIcon />
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};

export default DialogLogin;
