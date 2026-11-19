import React from "react";
import { UpmarkIcon } from "../icons"; 

const CustomButton = ({
  label = "Submit",
  onClick,
  className = "",
  textSize = "text-[20px]",
  padding = "px-6 py-3",
  fullWidth = true,
}) => {
  return (
    <button
      onClick={onClick}
      className={`backgroundgradient text-white rounded-full flex items-center gap-2 justify-center font-gordita font-medium 
        ${padding} ${textSize} ${fullWidth ? "w-full" : ""} ${className}`}
    >
      <span>{label}</span>
      <UpmarkIcon />
    </button>
  );
};

export default CustomButton;
