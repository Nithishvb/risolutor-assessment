import React from "react";
import { IoMdClose } from "react-icons/io";

const TableFilterRecords = ({ filteredData , handleRemoveFilteredOptions , deleteSelectedFilter }: any) => {
  return (
    <div className="px-4 pb-4">
      <div className="flex items-center gap-3">
        <div>Filter: {filteredData.length}</div>
        <span className="text-xs text-blue-800 font-semibold cursor-pointer" onClick={handleRemoveFilteredOptions}>
          Clear all
        </span>
      </div>
      <div className="mt-1 flex gap-2">
        {filteredData.map((e: any,index: number) => (
          <span className="bg-gray-300 px-2 rounded-md flex items-center gap-2 cursor-pointer" key={index}>
            <span className="text-blue-800 text-sm">{e.title}: </span>
            <span className="text-sm">{e.val}</span>
            <span onClick={() => deleteSelectedFilter(index)}>
              <IoMdClose />
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default TableFilterRecords;
