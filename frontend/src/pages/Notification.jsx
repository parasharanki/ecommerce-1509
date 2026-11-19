import React from 'react'
import Sidebar from '../Components/Reusables/Sidebar'
import msg1 from "../assets/images/msg1.png";
import msg2 from "../assets/images/msg2.png";
import msg3 from "../assets/images/msg3.png";
import msg4 from "../assets/images/msg4.png";
import msg5 from "../assets/images/msg5.png";
const messages = [
  {
    name: "Jackie Monroe",
    time: "10 min ago",
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    image: msg1,
  },
  {
    name: "Jackie Monroe",
    time: "10 min ago",
    message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    image: msg2,
  },
  {
    name: "Jackie Monroe",
    time: "10 min ago",
    message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    image: msg3,
  },
  {
    name: "Jackie Monroe",
    time: "10 min ago",
    message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    image: msg4,
  },
  {
    name: "Jackie Monroe",
    time: "10 min ago",
    message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    image: msg5,
  },
    {
    name: "Jackie Monroe",
    time: "10 min ago",
    message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    image: msg5,
  },
    {
    name: "Jackie Monroe",
    time: "10 min ago",
    message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    image: msg5,
  },
    {
    name: "Jackie Monroe",
    time: "10 min ago",
    message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    image: msg5,
  },
    {
    name: "Jackie Monroe",
    time: "10 min ago",
    message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    image: msg5,
  },
];

const Notification =()=> {
  return (
   <>
   <Sidebar>
    <div className='pt-2 pl-8'>
<div className='w-full h-screen vendorcardgradient rounded-tl-2xl overflow-y-scroll  no-scrollbar'>
<div className='px-8 pt-8 flex flex-col gap-3'>
  {messages.map((msg, index) => (
  <div className='w-full h-[129px] bg-white rounded-2xl'>
    <div className='p-4 flex gap-4'>
      <img
            src={msg.image}
            alt={msg.name}
            className="w-18 h-18 rounded-full object-cover"
          />
<div className='flex flex-col gap-3'>
  <div className='flex gap-4 items-center'>
    <div className='font-gordita font-medium text-[20px] text-black'>
     {msg.name}
    </div>
    <div className='font-gordita font-normal text-[16px] text-[#162838]'>
     {msg.time}
    </div>

  </div>
  <div className='font-gordita font-normal text-[18px] text-[#162838] leading-[25px]'>
 
    {msg.message}
  
  </div>

</div>
    </div>

  </div>

    ))}
</div>
</div>
</div>
   </Sidebar>
   </>
  )
}

export default Notification