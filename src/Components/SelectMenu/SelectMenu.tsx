import React, { useState } from "react";
import DatePicker from "../DatePicker/DatePicker";

type SelectMenuPropsType = {
  timeline: string;
  setTimeline: (val: any) => void;
  setFormData: (val: any) => void;
  startDate: Date;
  endDate: Date;
  formData: any;
};

const SelectMenu = ({ timeline, setTimeline , startDate , endDate, setFormData , formData}: SelectMenuPropsType) => {

  const handleChangeDate = (val: any, name: string) => {
    console.log(name);
    setFormData({
      ...formData,
      [name]: val
    });
  }

  return (
    <div>
      <select
        id="countries"
        name="projectTimeline"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={setTimeline}
      >
        <option value="15">15 days</option>
        <option value="1">1 month</option>
        <option value="1-2">1-2 month</option>
        <option value="3">3 month</option>
        <option value="4-6">4-6 month</option>
        <option value="1 year">1 year</option>
        <option value="custom">custom</option>
      </select>

      {timeline === "custom" && (
        <div date-rangepicker className="flex items-center mt-5 justify-end">
          <DatePicker
            date={startDate}
            name={'startDate'}
            onSelectDate={handleChangeDate}
            placeholder={"Start date"}
          />
          <span className="mx-4 text-gray-500">{">"}</span>
          <DatePicker
            date={endDate}
            name={'endDate'}
            onSelectDate={handleChangeDate}
            placeholder={"End date"}
          />
        </div>
      )}
    </div>
  );
};

export default SelectMenu;
