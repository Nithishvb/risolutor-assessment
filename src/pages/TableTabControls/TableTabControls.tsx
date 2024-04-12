import React, { useState } from 'react';

const TableTabControls = () => {

    const [selectedTab, setSelectedTab] = useState<number>(0);

  return (
    <div className='px-4 flex gap-6 items-center'>
        <div className="pr-2 flex gap-2 cursor-pointer text-gray-700 font-semibold relative " onClick={() => setSelectedTab(1)}>
            <span className={`${selectedTab === 0 || selectedTab === 1 ? 'text-blue-700' : ''}`} >All</span>
            <div className="text-center">
                <span className="bg-gray-200 rounded-full p-1 text-xs text-center pl-[5px] pr-[5px] pt-[2px] pb-[2px]">27</span>
            </div>
            {(selectedTab === 1 || selectedTab === 0) && <span className="bg-blue-700 h-[2px] w-[55px] absolute bottom-[-8px]"></span>}
        </div>
        <div className="pr-2 flex gap-2 cursor-pointer text-gray-700 font-semibold relative " onClick={() => setSelectedTab(2)}>
            <span className={`${selectedTab === 2 ? 'text-blue-700' : ''}`}>Risk</span>
            <div className="text-center">
                <span className="bg-gray-200 rounded-full p-1 text-xs text-center pl-[5px] pr-[5px] pt-[1px] pb-[1px]">8</span>
            </div>
            {selectedTab === 2 && <span className="bg-blue-700 h-[2px] w-[55px] absolute bottom-[-8px]"></span>}
        </div>
        <div className="pr-2 flex gap-2 cursor-pointer text-gray-700 font-semibold relative " onClick={() => setSelectedTab(3)}>
            <span className={`${selectedTab === 3 ? 'text-blue-700' : ''}`}>On hold</span>
            <div className="text-center">
                <span className="bg-gray-200 rounded-full p-1 text-xs text-center pl-[5px] pr-[5px] pt-[1px] pb-[1px]">15</span>
            </div>
            {selectedTab === 3 && <span className="bg-blue-700 h-[2px] w-[83px] absolute bottom-[-8px]"></span>}
        </div>
        <div className="pr-2 flex gap-2 cursor-pointer text-gray-700 font-semibold relative " onClick={() => setSelectedTab(4)}>
            <span className={`${selectedTab === 4 ? 'text-blue-700' : ''}`}>Potential risk</span>
            <div className="text-center">
                <span className="bg-gray-200 rounded-full p-1 text-xs text-center pl-[5px] pr-[5px] pt-[1px] pb-[1px]">5</span>
            </div>
            {selectedTab === 4 && <span className="bg-blue-700 h-[2px] w-[117px] absolute bottom-[-8px]"></span>}
        </div>
        <div className="pr-2 flex gap-2 cursor-pointer text-gray-700 font-semibold relative " onClick={() => setSelectedTab(5)}>
            <span className={`${selectedTab === 5 ? 'text-blue-700' : ''}`}>On track</span>
            <div className="text-center">
                <span className="bg-gray-200 rounded-full p-1 text-xs text-center pl-[5px] pr-[5px] pt-[1px] pb-[1px]">2</span>
            </div>
            {selectedTab === 5 && <span className="bg-blue-700 h-[2px] w-[83px] absolute bottom-[-8px]"></span>}
        </div>
        <div className="pr-2 flex gap-2 cursor-pointer text-gray-700 font-semibold relative " onClick={() => setSelectedTab(6)}>
            <span className={`${selectedTab === 6 ? 'text-blue-700' : ''}`}>Archived</span>
            <div className="text-center">
                <span className="bg-gray-200 rounded-full p-1 text-xs text-center pl-[5px] pr-[5px] pt-[1px] pb-[1px]">1</span>
            </div>
            {selectedTab === 6 && <span className="bg-blue-700 h-[2px] w-[83px] absolute bottom-[-8px]"></span>}     
        </div>
    </div>
  )
}

export default TableTabControls;