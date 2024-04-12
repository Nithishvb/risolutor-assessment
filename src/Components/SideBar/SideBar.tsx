import React, { useMemo, useState } from "react";
import Header from "../../pages/Header/Header";
import TableControls from "../../pages/Tablecontrols/TableControls";
import TableTabControls from "../../pages/TableTabControls/TableTabControls";
import Table from "../Table/Table";
import tableData from "../../Data/TableData.json";
import SideBarMenu from "./SideBarMenu";
import { formatDate } from "../../utils/DateConverter";
import TableFilterRecords from "../Table/TableFilterRecords";
import { combineValues, splitValues } from "../../utils/FilterResource";

const SideBar = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [data, setData] = useState(tableData);
  const [filterOptions, setFilterOptions] = useState<Array<any>>([]);
  const [isFilterApply, setIsFilterApply] = useState<boolean>(false);
  const [filteredData, setIsFilteredData] = useState<any>([]);

  const addNewproject = (val: any) => {
    const newData = [
      ...data,
      {
        id: tableData.length + 1,
        name: val.projectname,
        pm_image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5qDF6sIfkyp8ffnJ0Cr_kaOlDMdBoSkj-KQ&usqp=CAU",
        status: "On track",
        Last_update: "15 Mar 2021, 12:47 PM",
        Resources: "3",
        timeline: {
          startdate: formatDate(val.startDate),
          endDate: formatDate(val.endDate),
        },
        estimation: val.Estimation,
        projectManagerName: val.projectManager,
      },
    ];
    setData(newData);
    console.log("New record inserted", val);
  };

  const applyFilter = (val: any) => {
    setIsFilterApply(true);
    setIsFilteredData(combineValues(val));
    if (val.length > 0) {
      let matchingObjects = tableData.filter((obj1) =>
        val.some((obj2: any) => obj1.projectManagerName == obj2.value)
      );
      let matchingObjects2 = tableData.filter((obj1) =>
        val.some((obj2: any) => obj1.Resources == obj2.value)
      );
      let combinedData = [...matchingObjects, ...matchingObjects2];
      setData(combinedData);
    } else {
      setData(tableData);
    }
  };

  const handleRemoveFilteredOptions = () => {
    setIsFilteredData([]);
    setFilterOptions([]);
    setData(tableData);
  };

  const deleteSelectedFilter = (index: number) => {
    const removeData = filteredData.filter((e: any,i: number) => i !== index);
    let reversedData = splitValues(removeData);
    applyFilter(reversedData);
    setIsFilteredData(removeData);
    if(removeData.length == 0){
      setFilterOptions([]);
      setData(tableData)
    }
  }

  const filterData = useMemo(() => {
    return data.filter((e) =>
      e.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [searchValue, data]);

  return (
    <div>
      <SideBarMenu />
      <div className="sm:ml-[5rem] h-screen overflow-hidden">
        <div className="p-4 bg-gray-100 rounded-lg dark:border-gray-700">
          <div>
            <Header />
          </div>
        </div>
        <div className="px-4 py-2">
          <TableControls
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            addNewproject={addNewproject}
            filterOptions={filterOptions}
            setFilterOptions={setFilterOptions}
            applyFilter={applyFilter}
          />
        </div>
        {filteredData.length > 0 && (
          <div className="pl-4">
            <TableFilterRecords filteredData={filteredData} handleRemoveFilteredOptions={handleRemoveFilteredOptions} deleteSelectedFilter={deleteSelectedFilter} />
          </div>
        )}
        <div className="pl-4">
          <TableTabControls />
        </div>
        <div className="pl-4 pt-2">
          <Table data={filterData} />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
