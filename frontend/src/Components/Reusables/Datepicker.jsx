import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Datepicker = ({
  placeholder = "Add Date",
  labelText,
  icon,
  variant = "default", // "inline", "boxed", "minimal", etc.
  className = "",
checkinLabel = "CHECK IN"
}) => {
  const [startDate, setStartDate] = useState(null);
  const dateRef = useRef(null);

  // Common handler
  const openPicker = () => dateRef.current?.setOpen(true);

  return (
    <>
      {variant === "default" && (
        <div className="flex items-center gap-3" onClick={openPicker}>
          <span className="cursor-pointer text-xl">{icon}</span>
          <div className="text-left">
            <div className="font-gordita font-medium text-[16px] text-black">
              {labelText}
            </div>
            <DatePicker
              ref={dateRef}
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              placeholderText={placeholder}
              className={className}
            />
          </div>
        </div>
      )}

      {variant === "boxed" && (
        <div
          className="flex justify-between items-center  border border-[#0E1C25]/20 rounded-xl px-4 py-3 max-w-[250px] w-full "
          onClick={openPicker}
        >
          <DatePicker
            ref={dateRef}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            customInput={
              <div className="flex justify-between items-center">
                <div className="font-gordita text-[16px] text-headingblack truncate">
                  {startDate
                    ? startDate.toLocaleDateString("en-GB")
                    : placeholder}
                </div>
                <span className="text-xl">{icon}</span>
              </div>
            }
          />
        </div>
      )}

      {variant === "bar" && (
        <div
          className="w-full min-h-[68px] bg-white mx-auto px-4 py-4"
          onClick={openPicker}
        >
          <DatePicker
            ref={dateRef}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            customInput={
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-1 text-left">
                  <div className="font-gordita font-normal text-[12px] text-black">
                   {checkinLabel}
                  </div>
                  <div className="font-gordita font-medium text-[16px] text-black">
                    {startDate
                      ? startDate.toLocaleDateString("en-GB")
                      : placeholder}
                  </div>
                </div>
                <div>{icon}</div>
              </div>
            }
          />
        </div>
      )}
      {/* Add more variants as needed */}
      {variant === "strip" && (
        <div
          className="w-full min-h-[10px] bg-white px-2 py-2 "
          onClick={openPicker}
        >
          <DatePicker
            ref={dateRef}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            customInput={
              <div className="flex items-center gap-2">
             
                   <div>{icon}</div>
                  <div className="font-gordita font-medium text-[15px] text-black">
                    {startDate
                      ? startDate.toLocaleDateString("en-GB")
                      : placeholder}
                  </div>
                
              </div>
            }
          />
        </div>
      )}
       {variant === "form" && (
        <div
          className="w-full min-h-[10px] bg-white px-2 py-2 "
          onClick={openPicker}
        >
          <DatePicker
            ref={dateRef}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            customInput={
              <div className="flex justify-between items-center ">
             
                 
                  <div className="font-inter font-normal text-[16px] text-black">
                    {startDate
                      ? startDate.toLocaleDateString("en-GB")
                      : placeholder}
                  </div>
                <div>{icon}</div>
              </div>
            }
          />
        </div>
      )}
    </>
  );
};

export default Datepicker;
