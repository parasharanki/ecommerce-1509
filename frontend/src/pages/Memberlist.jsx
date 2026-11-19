import React from 'react'
import Sidebar from '../Components/Reusables/Sidebar'
import msg1 from "../assets/images/msg1.png";
import msg2 from "../assets/images/msg2.png";
import msg3 from "../assets/images/msg3.png";
import msg4 from "../assets/images/msg4.png";
import msg5 from "../assets/images/msg5.png";
const users = [
  {
    name: "Jackie Monroe",
    mobile: "91 9876543210",
    email: "jackiemonroe@gmail.com",
    location: "974 Valencia St San Francisco",
    image: msg1 
  },
 {
    name: "Jackie Monroe",
    mobile: "91 9876543210",
    email: "jackiemonroe@gmail.com",
    location: "974 Valencia St San Francisco",
    image: msg1 
  },
   {
    name: "Jackie Monroe",
    mobile: "91 9876543210",
    email: "jackiemonroe@gmail.com",
    location: "974 Valencia St San Francisco",
    image: msg1 
  },
   {
    name: "Jackie Monroe",
    mobile: "91 9876543210",
    email: "jackiemonroe@gmail.com",
    location: "974 Valencia St San Francisco",
    image: msg1 
  },
 {
    name: "Jackie Monroe",
    mobile: "91 9876543210",
    email: "jackiemonroe@gmail.com",
    location: "974 Valencia St San Francisco",
    image: msg1 
  },
 {
    name: "Jackie Monroe",
    mobile: "91 9876543210",
    email: "jackiemonroe@gmail.com",
    location: "974 Valencia St San Francisco",
    image: msg1 
  },
 {
    name: "Jackie Monroe",
    mobile: "91 9876543210",
    email: "jackiemonroe@gmail.com",
    location: "974 Valencia St San Francisco",
    image: msg1 
  },
 {
    name: "Jackie Monroe",
    mobile: "91 9876543210",
    email: "jackiemonroe@gmail.com",
    location: "974 Valencia St San Francisco",
    image: msg1 
  },
 {
    name: "Jackie Monroe",
    mobile: "91 9876543210",
    email: "jackiemonroe@gmail.com",
    location: "974 Valencia St San Francisco",
    image: msg1 
  },



];

const Memberlist =()=> {
  return (
   <>
   <Sidebar>
    <div className='pt-8 pl-8'>
<div className='w-full h-screen memberlistgradient rounded-tl-2xl overflow-y-scroll  no-scrollbar'>
<div className='px-8 pt-8 flex flex-col gap-3'>
    <div className="overflow-x-auto">
      <table className="min-w-full bg-transparent border-separate border-spacing-y-4">
  <thead className="bg-[#D9F1FF] ">
    <tr className="text-left">
      <th className="py-3 px-6 text-[18px] text-black font-gordita font-normal">Name</th>
      <th className="py-3 px-6 text-[18px] text-black font-gordita font-normal">Mobile Number</th>
      <th className="py-3 px-6 text-[18px] text-black font-gordita font-normal">Email Address</th>
      <th className="py-3 px-6 text-[18px] text-black font-gordita font-normal">Location</th>
    </tr>
  </thead>

  <tbody className="bg-transparent ">
    {users.map((user, idx) => (
      <tr key={idx} className="bg-white ">
        <td className="py-4 px-6 flex items-center gap-3 rounded-l-xl">
          <img
            src={user.image}
            alt={user.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-gordita text-[18px] text-black font-normal">{user.name}</span>
        </td>
        <td className="py-4 px-6 text-[18px] text-black font-gordita font-normal">{user.mobile}</td>
        <td className="py-4 px-6 text-[18px] text-black font-gordita font-normal">{user.email}</td>
        <td className="py-4 px-6 text-[18px] text-black font-gordita  font-normal">{user.location}</td>
      </tr>
    ))}
  </tbody>
</table>

    </div>
</div>
</div>
</div>
   </Sidebar>
   </>
  )
}

export default Memberlist