import React, { useState, useEffect, useRef } from 'react';
import {
 
  SearchIcon,
 
} from "../Iconsvg/Iconsvg";
import chat1 from "../../assets/images/chat1.png";
// import chat2 from "../../assets/images/chat2.png";
// import chat3 from "../../assets/images/chat3.png";
// import chat4 from "../../assets/images/chat4.png";
// import chat5 from "../../assets/images/chat5.png";
// import chat6 from "../../assets/images/chat6.png";
// import chat7 from "../../assets/images/chat7.png";
// import chat8 from "../../assets/images/chat8.png";
// import chat9 from "../../assets/images/chat9.png";

const chatList = [
  {
    name: "Hisyam",
    avatar: chat1,
    message: "Are you looking a new home",
    time: "2:30 PM",
  },
  {
    name: "Dimas Eza",
    avatar: chat2,
    message: "Are you looking a new home",
    time: "1:10 PM",
  },
  {
    name: "Nick Eza",
    avatar: chat3,
    message: "Are you looking a new home",
    time: "Yesterday",
  },
    {
    name: "Ellaslis",
    avatar: chat4,
    message: "Are you looking a new home",
    time: "2:30 PM",
  },
  {
    name: "Dips",
    avatar: chat4,
    message: "Are you looking a new home",
    time: "1:10 PM",
  },
  {
    name: "Alexandro",
    avatar: chat5,
    message: "Are you looking a new home",
    time: "Yesterday",
  },
   {
    name: "Jack",
    avatar: chat6,
    message: "Are you looking a new home",
    time: "1:10 PM",
  },
  {
    name: "Jenny",
    avatar: chat7,
    message: "Are you looking a new home",
    time: "Yesterday",
  },
   {
    name: "Shopia",
    avatar: chat8,
    message: "Are you looking a new home",
    time: "Yesterday",
  },
];

const ChatUI = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !buttonRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="w-1/4 bg-white border border-[#E4E4E4]">
        {/* Sidebar Header */}
   <header className="border-b border-[#E4E4E4] bg-white flex flex-wrap justify-between items-center px-4 py-3">
  <div className="flex items-center gap-2 border border-[#E4E4E4]  px-3 py-1.5 bg-white w-full sm:w-auto max-w-full">
    <SearchIcon />
    <input
      type="text"
      placeholder="Search Messages"
      className="bg-transparent w-full sm:w-auto min-w-0 focus:outline-none focus:ring-0 placeholder:font-gordita placeholder:font-normal placeholder:text-[14px] placeholder:text-[#1C2331] text-black"
    />
  </div>
</header>



        {/* Contact List */}
        <div className="overflow-y-auto h-screen  pb-20 no-scrollbar">
         {chatList.map((chat, index) => (
  <div
    key={index}
    className="flex items-center mb-4 cursor-pointer p-2  hover-backgroundgradient transition-colors duration-200"
  >
    <div className="w-12 h-12 bg-gray-300 rounded-full mr-3 overflow-hidden">
      <img
        src={chat.avatar}
        alt={`${chat.name}'s avatar`}
        className="w-12 h-12 rounded-full object-cover"
      />
    </div>
    <div className="flex-1">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-black">{chat.name}</h2>
        <span className="text-[#1C2331] font-gordita text-[10px] font-regular">{chat.time}</span>
      </div>
      <p className="text-[#1C2331] font-gordita text-[10px] font-regular truncate">{chat.message}</p>
    </div>
  </div>
))}

        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 relative">
        {/* Chat Header */}
        
        {/* Chat Messages */}
        <div className="h-full overflow-y-auto p-4 pb-36 chatgradient">
          <div className="flex mb-4">
            <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2">
              <img src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="User Avatar" className="w-8 h-8 rounded-full" />
            </div>
            <div className="flex max-w-96 bg-white rounded-lg p-3 gap-3">
              <p className="text-[#1C2331] font-gordita text-[16px] font-regular capitalize">Good to see that you have decided to list your property on Nest Bubble  I have been hosting on Next Bubble since 2023 and it's been a wonderful experience. :-)  Please feel free to ask if you have any questions.</p>
            </div>
          </div>

          <div className="flex justify-end mb-4">
            <div className="flex max-w-96 backgroundgradient capitalize text-white font-gordita text-[16px] font-regular rounded-lg p-3 gap-3">
              <p>Hello I Am Looking The New Home Can You Help Me?</p>
            </div>
            <div className="w-9 h-9 rounded-full flex items-center justify-center ml-2">
              <img src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="My Avatar" className="w-8 h-8 rounded-full" />
            </div>
          </div>

          {/* Additional static messages can go here */}
        </div>

        {/* Chat Input */}
        <div className="bg-white border-t border-gray-300 p-4 absolute bottom-0 w-full">
          <div className="flex items-center">
            <input type="text" placeholder="Type a message..." className="w-full p-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500" />
            <button className="bg-indigo-500 text-white px-4 py-2 rounded-md ml-2">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatUI;
