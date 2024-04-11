import React from 'react';
import { IoNotifications } from "react-icons/io5";
import { GoQuestion } from "react-icons/go";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
        <div className="flex items-center">
            <h2 className="text-2xl font-bold px-4">
                Projects
            </h2>
            <span className="text-blue-700 bg-gray-200 border h-6 w-6 text-center text-sm font-semibold rounded-full">27</span>
        </div>
        <div className="flex items-center gap-2">
            <div className="px-2 cursor-pointer">
                <IoNotifications className="text-gray-700 text-2xl" />
            </div>
            <div className="px-2 cursor-pointer">
                <GoQuestion className="text-gray-700 text-2xl" />
            </div>
            <div className="px-2 cursor-pointer">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoNGrYjy4FaBLScg6tLHvr2Zbr3_JTcOR6NA&usqp=CAU" alt="userprofile" className="w-8 h-8 rounded-full" />
            </div>
        </div>
    </div>
  )
}

export default Header;