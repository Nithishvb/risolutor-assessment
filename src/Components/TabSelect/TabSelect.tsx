import React, { useState } from "react";

const data = [
  {
    id: 1,
    title: "Roger Vaccaro",
  },
  {
    id: 2,
    title: "Tatiana Dias",
  },
  {
    id: 3,
    title: "Leo Gouse",
  },
];

type TabSelectproptype = {
  formData: any;
  setFormData: (val: any) => void;
};

const TabSelect = ({ formData, setFormData }: TabSelectproptype) => {
  const [selectedChip, setSelectedChip] = useState<number>();

  const handleClick = (index: number, val: string) => {
    setFormData({
      ...formData,
      projectManager: val,
    });
    setSelectedChip(index);
  };

  return (
    <div className="flex bg-gray-200 my-2 rounded-md p-1">
      {data.map((e, index) => (
        <span
          className={`px-2 cursor-pointer ${
            selectedChip === index ? "bg-white text-blue-800" : ""
          }`}
          key={index}
          onClick={() => handleClick(index, e.title)}
        >
          {e.title}
        </span>
      ))}
    </div>
  );
};

export default TabSelect;
