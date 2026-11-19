import { Dialog } from "@headlessui/react";
import React from "react";
import {
  CrossIcon,
  Cellphone,
  UpmarkIcon,
  GoogleIcon,
  AppleIcon,
  Feedback,
} from "../Iconsvg/Iconsvg";
import loginbg from "../../assets/images/loginbg.png";
import bggradient from "../../assets/images/bggradient.png";
const DialogFeedback = ({ isOpen, setIsOpen, onSubmitDialog }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
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
            className="bg-white rounded-xl w-[524px] h-[746px] shadow-lg"
            style={{
              backgroundImage: `url(${bggradient})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex flex-col justify-center ">
              <div className="flex justify-center"> 
                <Feedback />
              </div>
            
              <div className="text-black font-medium font-gordita text-[36px] mt-4 flex justify-center">
                Give Us Your Feedback
              </div>
              <div className="text-black font-regular font-gordita text-[24px] mt-4 flex justify-center">
                What Was Experience While Using Vila?
              </div>
              <div className="px-6">
                  <div className="text-black font-medium font-gordita text-[16px] mt-4 flex justify-center rounded-xl px-8 py-6 servicescardgradient border-2 border-dashed border-[#2573BA]">
                It's really easy to use and it is exactly what I am looking for. A lot of good looking templates & it's highly customizable. Live support is helpful, solved my issue in no time.😊
              </div>
              </div>
          
              <div className="px-6 py-4">
                <button
                  className="backgroundgradient text-white rounded-full px-6 py-3 flex items-center gap-2 w-full justify-center"
                  onClick={onSubmitDialog}
                >
                  <span className="font-medium font-gordita text-[20px] text-center">
                    Next
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

export default DialogFeedback;
