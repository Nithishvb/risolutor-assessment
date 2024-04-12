import React, { useEffect, useState } from "react";
import TableData from "../../Data/TableData.json";
import { filterManager, filterResources } from "../../utils/FilterResource";

type DropDownPropTypes = {
  isOpen: boolean;
  filterOptions: any;
  setFilterOptions: any;
  applyFilter: (val: any) => void;
  setIsModalOpen: (val: any) => void;
};

const DropDown = ({
  isOpen,
  filterOptions,
  setFilterOptions,
  applyFilter,
  setIsModalOpen,
}: DropDownPropTypes) => {
  const [isShowMultiDropDown, setIsShowMultiDropDown] =
    useState<boolean>(false);
  const [isShowResourceDropDown, setIsShowResourcesDropDown] =
    useState<boolean>(false);
  const [projetcManager, setProjectManager] = useState<any>(
    filterManager(TableData)
  );
  const [resources, setResources] = useState<any>(filterResources(TableData));

  useEffect(() => {
    if (!isOpen) {
      setIsShowMultiDropDown(false);
      setIsShowResourcesDropDown(false);
    }
  }, [isOpen]);

  const hanldeCheckboxChange = (event: any, val: any, isResources: number) => {
    console.log(event.target.checked);
    if (event.target.checked) {
      let data = {
        isResources: isResources === 1 ? false : true,
        value: isResources === 1 ? val.projectManagerName : val.Resources,
      };
      setFilterOptions([...filterOptions, data]);
    } else {
      if (isResources === 1) {
        let removeData = filterOptions.filter(
          (e: any) => e.value !== val.projectManagerName
        );
        setFilterOptions(removeData);
      } else {
        let removeData = filterOptions.filter(
          (e: any) => e.value !== val.Resources
        );
        setFilterOptions(removeData);
      }
    }
  };

  return (
    <div>
      <div
        id="multi-dropdown"
        className="bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
        style={{ display: isOpen ? "block" : "none" }}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="multiLevelDropdownButton"
        >
          <li>
            <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">
              Project Name
            </span>
          </li>
          <li className="relative">
            <button
              id="doubleDropdownButton"
              data-dropdown-toggle="doubleDropdown"
              data-dropdown-placement="right-start"
              type="button"
              className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => {
                setIsShowMultiDropDown(!isShowMultiDropDown);
                setIsShowResourcesDropDown(false);
              }}
            >
              Project Manager
              <svg
                className="w-2.5 h-2.5 ms-3 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </button>
            {isShowMultiDropDown && (
              <div
                id="doubleDropdown"
                className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 shadow-[0_3px_10px_rgb(0,0,0,0.2)] absolute left-[185px] top-[1px]"
                style={{ display: isShowMultiDropDown ? 'block' : 'none' }}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="doubleDropdownButton"
                >
                  {projetcManager.map((e: any, index: number) => (
                    <li
                      key={index}
                      className="flex items-center px-4 gap-2 hover:bg-gray-100 cursor-pointer"
                    >
                      <div className="cursor-pointer">
                        <input
                          type="checkbox"
                          onChange={(event) =>
                            hanldeCheckboxChange(event, e, 1)
                          }
                        />
                      </div>
                      <span className="block  py-2 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">
                        {e.projectManagerName}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
          <li>
            <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">
              Last Update
            </span>
          </li>
          <li>
            <button
              id="doubleDropdownButton"
              data-dropdown-toggle="doubleDropdown"
              data-dropdown-placement="right-start"
              type="button"
              className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white relative"
              onClick={() => {
                setIsShowResourcesDropDown(!isShowResourceDropDown);
                setIsShowMultiDropDown(false);
              }}
            >
              Resources
              <svg
                className="w-2.5 h-2.5 ms-3 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </button>
            {isShowResourceDropDown && (
              <div
                id="doubleDropdown"
                className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 shadow-[0_3px_10px_rgb(0,0,0,0.2)] absolute left-[185px] top-[125px]"
                style={{ display: isShowResourceDropDown ? 'block' : 'none' }}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="doubleDropdownButton"
                >
                  {resources.map((e: any, index: number) => (
                    <li
                      key={index}
                      className="flex items-center px-4 gap-2 hover:bg-gray-100 cursor-pointer"
                    >
                      <div
                        className="cursor-pointer"
                        onClick={(event) => hanldeCheckboxChange(event, e, 0)}
                      >
                        <input type="checkbox" />
                      </div>
                      <span className="block  py-2 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">
                        {e.Resources}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
          <li>
            <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">
              Estimation
            </span>
          </li>
        </ul>
        <div className="flex justify-center">
          <button
            className="bg-blue-900 text-white p- px-3 rounded-md my-2"
            onClick={() => {
              applyFilter(filterOptions);
              setIsModalOpen(false);
            }}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
