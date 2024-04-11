import React from "react";
import tabledata from "../../Data/TableData.json";
import TableRecords from "./TableRecords";
import TablePagination from "./TablePagination";

const Table = () => {
  console.log(tabledata);
  return (
    <div>
      <div className="flex flex-col h-screen mb-6">
        <div className="flex-grow overflow-scroll pb-[200px]">
          <table className="relative w-full border">
            <thead className="bg-gray-50">
              <tr>
                <th className="sticky top-0 px-6 py-1 text-gray-500 text-[14px] bg-gray-50">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all"
                      type="checkbox"
                      className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                </th>
                <th className="sticky top-0 px-6 py-1 text-gray-500 text-[14px] bg-gray-50">
                  #
                </th>
                <th className="sticky top-0 px-6 py-2 text-gray-500 text-[14px] font-medium  text-sm text-left bg-gray-50">
                  PROJECT NAME
                </th>
                <th className="sticky top-0 px-6 py-1 text-gray-500 text-[14px] font-medium bg-gray-50">
                  PM
                </th>
                <th className="sticky top-0 px-6 py-1 text-gray-500 text-[14px] font-medium bg-gray-50">
                  STATUS
                </th>
                <th className="sticky top-0 px-6 py-1 text-gray-500 text-[14px] font-medium bg-gray-50 text-left">
                  LAST UPDATE
                </th>
                <th className="sticky top-0 px-6 py-1 text-gray-500 text-[14px] font-medium bg-gray-50">
                  RESOURCES
                </th>
                <th className="sticky top-0 px-6 py-1 text-gray-500 text-[14px] font-medium bg-gray-50 text-left">
                  PROJECT TIMELINE
                </th>
                <th className="sticky top-0 px-6 py-1 text-gray-500 text-[14px] font-medium bg-gray-50">
                  ESTIMATION
                </th>
              </tr>
            </thead>
            <tbody className="divide-y bg-white">
              {tabledata.map((e: any, index: number) => (
                <TableRecords value={e} index={index} key={index} />
              ))}
            </tbody>
          </table>
          <div className="px-4 py-4">
            <TablePagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
