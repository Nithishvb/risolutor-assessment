import React from "react";
import { RiFileList2Line } from "react-icons/ri";
import { IoIosArrowDropright } from "react-icons/io";
import { FaExternalLinkAlt } from "react-icons/fa";

type TableRecordsPropType = {
  value: any;
  index: number;
};

const TableRecords = ({ value, index }: TableRecordsPropType) => {
  return (
    <tr className="cursor-pointer hover:bg-gray-50" key={index}>
      <td className="px-6 py-3 text-center">
        <div className="flex items-center">
          <input
            id="checkbox-all"
            type="checkbox"
            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
        </div>
      </td>
      <td>
        <IoIosArrowDropright className="text-gray-500 cursor-pointer z-[1]" />
      </td> 
      <td className="px-6 py-3 text-center">{index + 1}</td>
      <td className="px-6 py-3 text-blue-600 font-semibold text-left">
          {value.name}
      </td>
      <td className="px-6 py-3 text-center flex justify-center">
        <img
          src={value.pm_image}
          alt="userimage"
          className="w-[25px] h-[25px] rounded-[27%]"
        />
      </td>
      <td className="px-6 py-3 text-center text-xs">
        <span className="bg-green-100 text-green-800 p-1 pl-2 pr-2 rounded-lg font-semibold">
          {value.status}
        </span>
      </td>
      <td className="px-6 py-3 text-left flex items-center gap-2">
        <RiFileList2Line className="text-blue-800" />
        {value.Last_update}
      </td>
      <td className="px-6 py-3 text-center">
        <span className="bg-gray-300 px-2 py-0.5 rounded-md text-gray-700">
          3
        </span>
      </td>
      <td className="px-6 py-3 text-left">
        <span className="text-[13px] bg-gray-300 px-2 rounded-md py-0.5 text-gray-700 font-medium">
          {value.timeline.startdate}
        </span>
        <span className="px-2 text-gray-400 text-sm">{">"}</span>
        <span className="text-[13px] bg-gray-300 px-2 rounded-md py-0.5 text-gray-700 font-medium">
          {value.timeline.endDate}
        </span>
      </td>
      <td className="px-6 py-3 text-center">US$ {value.estimation}K</td>
    </tr>
  );
};

export default TableRecords;
