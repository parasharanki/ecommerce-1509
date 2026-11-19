import { Dialog } from "@headlessui/react";
import React from "react";
import { CrossIcon,LogoutIcon } from "../Iconsvg/Iconsvg";
import loginbg from "../../assets/images/loginbg.png";
import bggradient from "../../assets/images/bggradient.png";
const LogoutDialog = ({ isOpen, setIsOpen, onConfirm }) => {
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
            className="bg-white rounded-xl w-[420px] h-[589px] shadow-lg"
            style={{
              backgroundImage: `url(${bggradient})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
                <div className="flex flex-col justify-center ">
                   <div className="flex justify-center"> 
            <LogoutIcon/>
            </div>
             <div className="text-black font-bold font-gordita text-[36px] mt-4 flex justify-center">
               Logout
              </div>
              <div className="text-[#1A1A1A] font-regular font-gordita text-[20px] mt-4 flex justify-center">
               Are You Sure Want To Logout?
              </div>
             <div className="flex justify-center mt-4 px-4 gap-4">
  {/* Cancel Button */}
  <button
    className="bg-white text-black rounded-full px-6 py-3 flex items-center gap-2 justify-center flex-1"
    onClick={() => setIsOpen(false)}
   >
    <span className="font-medium font-gordita text-[20px] text-center">
      Cancel
    </span>
  </button>

  {/* Yes, Logout Button */}
  <button
    className="bg-[#E83232] text-white rounded-full px-6 py-3 flex items-center gap-2 justify-center flex-1"
  onClick={onConfirm}
  >
    <span className="font-medium font-gordita text-[20px] text-center">
      Yes, Logout
    </span>
  </button>
</div>

            </div>
          
            
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};

export default LogoutDialog;
