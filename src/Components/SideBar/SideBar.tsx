import React, { useMemo, useState } from "react";
import Header from "../../pages/Header/Header";
import TableControls from "../../pages/Tablecontrols/TableControls";
import TableTabControls from "../../pages/TableTabControls/TableTabControls";
import Table from "../Table/Table";
import tableData from "../../Data/TableData.json"
import SideBarMenu from "./SideBarMenu";
import { formatDate } from "../../utils/DateConverter";

const SideBar = () => {

  const [searchValue, setSearchValue] = useState<string>('');
  const [data, setData] = useState(tableData);

  const addNewproject = (val: any) => {
    const newData = [...data, {
      id: tableData.length+1,
      name: val.projectname,
      pm_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5qDF6sIfkyp8ffnJ0Cr_kaOlDMdBoSkj-KQ&usqp=CAU",
      status: "On track",
      Last_update: "15 Mar 2021, 12:47 PM",
      Resources: "3",
      timeline: { "startdate": formatDate(val.startDate), "endDate": formatDate(val.endDate) },
      estimation: val.Estimation
    }];
    setData(newData);
    console.log("New record inserted", val);
  };

  const filterData = useMemo(() => {
    return data.filter((e) => e.name.toLowerCase().includes(searchValue.toLowerCase()))
  }, [searchValue, data]);

  console.log(filterData);

  return (
    <div>
      <SideBarMenu />
      <div className="sm:ml-[5rem] h-screen overflow-hidden">
        <div className="p-4 bg-gray-100 rounded-lg dark:border-gray-700">
          <div>
            <Header />
          </div>
        </div>
        <div className="p-4">
            <TableControls searchValue={searchValue} setSearchValue={setSearchValue} addNewproject={addNewproject} />
        </div>
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
