import React from 'react'
import { FaGithub,FaTwitter,FaDiscord } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between mx-auto mt-[25px]">
    <div className="mx-[30px] font-bold text-xl ">Chainfair</div>
    <div>
    <nav>
       <ul  className="flex flex-row gap-x-3 md:gap-x-12 font-semibold text-lg">
        <li>Home</li>
        <li>Group</li>
        <li>AddFunds</li>
        <li>Dashboard</li>
       </ul>
    </nav>
    </div>
    <div className="mx-[30px] ">
         <ul className="flex flex-row gap-x-8 md:gap-x-12 text-lg">
          <li><FaGithub/></li>
          <li><FaDiscord/></li>
          <li><FaTwitter/></li>
         </ul>
    </div>
  </div> 
  )
}

export default Navbar