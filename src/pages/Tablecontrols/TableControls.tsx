import React, { useState } from "react";
import { LuGrid } from "react-icons/lu";
import { RiFilter2Fill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import DropDown from "../../Components/Dropdown/DropDown";
import Modal from "../../Components/Modal/Modal";

const TableControls = () => {
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div className="flex justify-between items-center px-4 py-2">
      <div className="flex items-center">
        <div className="p-2 rounded-md bg border border-1 border-gray-400 px-3 cursor-pointer">
          <LuGrid />
        </div>
        <div className="flex items-center ml-4 rounded-md border border-1 border-gray-400">
          <div
            className="flex items-center border border-r-2 p-1 gap-2 cursor-pointer relative"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <div className="pl-1">
              <RiFilter2Fill className="text-gray-700 text-lg" />
            </div>
            <span className="text-gray-600 font-[600]">All</span>
            <div className="px-2">
              <FaAngleDown className="text-xs text-gray-600" />
            </div>
          </div>
          <div className="absolute top-[133px]">
            <DropDown isOpen={isFilterOpen} />
          </div>
          <div className="flex items-center cursor-pointer p-1">
            <div className="px-2">
              <IoSearchOutline className="text-gray-700" />
            </div>
            <div>
              <input
                type="text"
                placeholder="Search"
                className="outline-none text-md text-gray-700"
              />
            </div>
            <div className="bg-gray-300 px-[5px] mx-2 rounded-sm">
              <div className="text-center text-xs">/</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-blue-600 text-white flex items-center p-2 px-4 rounded-lg cursor-pointer" onClick={() => setIsModalOpen(!isModalOpen)}>
          <div className="px-2">
            <FaPlus className="text-white font-bold" />
          </div>
          <span>New project</span>
        </div>
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </div>
    </div>
  );
};

export default TableControls;
