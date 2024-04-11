import React from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const TablePagination = () => {
  return (
    <div className="flex justify-between items-center">
        <div>
            <span className="text-sm font-semibold text-gray-400 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto"> <span className="dark:text-white">1-10</span> of <span className=" dark:text-white">27</span></span>
        </div>
        <div className="pr-4 flex items-center gap-4">
            <div className="flex items-center">
                <span className="text-gray-400 font-semibold">Rows per page: 20</span>
                <IoIosArrowDown className="text-gray-400 font-semibold pl-1" />
            </div>
            <div className="flex items-center">
                <div className="bg-gray-100 p-1 rounded-lg cursor-pointer">
                    <IoIosArrowBack className="text-gray-400" />
                </div>
                <span className="px-2 text-gray-400">1/2</span>
                <div className="bg-gray-100 p-1 rounded-lg cursor-pointer">
                    <IoIosArrowForward className="text-gray-400" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default TablePagination;