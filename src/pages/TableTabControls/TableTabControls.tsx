import React from 'react'

const TableTabControls = () => {
  return (
    <div className='px-4 flex gap-6 items-center'>
        <div className="pr-2 flex gap-2 cursor-pointer text-gray-700 font-semibold">
            <span>All</span>
            <div className="text-center">
                <span className="bg-gray-200 rounded-full p-1 text-xs text-center pl-[5px] pr-[5px] pt-[2px] pb-[2px]">27</span>
            </div>
        </div>
        <div className="pr-2 flex gap-2 cursor-pointer text-gray-700 font-semibold">
            <span>Risk</span>
            <div className="text-center">
                <span className="bg-gray-200 rounded-full p-1 text-xs text-center pl-[5px] pr-[5px] pt-[1px] pb-[1px]">8</span>
            </div>
        </div>
        <div className="pr-2 flex gap-2 cursor-pointer text-gray-700 font-semibold">
            <span>On hold</span>
            <div className="text-center">
                <span className="bg-gray-200 rounded-full p-1 text-xs text-center pl-[5px] pr-[5px] pt-[1px] pb-[1px]">15</span>
            </div>
        </div>
        <div className="pr-2 flex gap-2 cursor-pointer text-gray-700 font-semibold">
            <span>Potential risk</span>
            <div className="text-center">
                <span className="bg-gray-200 rounded-full p-1 text-xs text-center pl-[5px] pr-[5px] pt-[1px] pb-[1px]">5</span>
            </div>
        </div>
        <div className="pr-2 flex gap-2 cursor-pointer text-gray-700 font-semibold">
            <span>On track</span>
            <div className="text-center">
                <span className="bg-gray-200 rounded-full p-1 text-xs text-center pl-[5px] pr-[5px] pt-[1px] pb-[1px]">2</span>
            </div>
        </div>
        <div className="pr-2 flex gap-2 cursor-pointer text-gray-700 font-semibold">
            <span>Archived</span>
            <div className="text-center">
                <span className="bg-gray-200 rounded-full p-1 text-xs text-center pl-[5px] pr-[5px] pt-[1px] pb-[1px]">1</span>
            </div>
        </div>
    </div>
  )
}

export default TableTabControls;