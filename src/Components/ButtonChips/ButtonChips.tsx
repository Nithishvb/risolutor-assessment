import React, { useState } from 'react';

const BUTTON_CHIPS_DATA = [
    {
        id: 1,
        title: 'UI/UX Design'
    },
    {
        id: 2,
        title: 'Frontend'
    },
    {
        id: 3,
        title: 'Backend'
    },
    {
        id: 4,
        title: 'Full Stack'
    },
    {
        id: 5,
        title: 'Graphic Designer'
    },
]

const ButtonChips = () => {

    const [selectedChip, setSelectedChip] = useState<number>();

  const handleClick = (index: number) => {
    setSelectedChip(index);
  };

  return (
    <div className="flex flex-wrap gap-3 py-2">
        {
            BUTTON_CHIPS_DATA.map((e: any, index: number) => (
                <div key={index} className={`bg-white px-2 p-[1px] rounded-lg border border-gray text-center cursor-pointer ${
                    selectedChip === index ? 'bg-blue-800 text-white' : ''
                  }`}
                  onClick={() => handleClick(index)}>
                    <span className="text-sm font-[400]">{e.title}</span>
                </div>
            ))
        }
    </div>
  )
}

export default ButtonChips;