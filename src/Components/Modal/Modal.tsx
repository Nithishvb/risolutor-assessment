import React, { useState } from "react";
import TabSelect from "../TabSelect/TabSelect";
import ButtonChips from "../ButtonChips/ButtonChips";
import SelectMenu from "../SelectMenu/SelectMenu";

type ModalPropType = {
    isModalOpen: boolean;
    setIsModalOpen: (val: boolean) => void;
}

const Modal = ({ isModalOpen , setIsModalOpen }: ModalPropType) => {

  const [timeline, setTimeline] = useState('');

  return (
    <div className="flex justify-center">
      <div
        id="default-modal"
        aria-hidden="true"
        tabIndex={-1}
        className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 max-h-full bg-black bg-opacity-50"
        style={{ display: isModalOpen ? 'flex' : 'none' }}
      >
        <div className="relative p-4 w-1/3 max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-2 md:p-3 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Add new project
              </h3>
            </div>
            <div className="p-4 md:p-5 space-y-4 bg-gray-100">
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project name *</label>
                <input type="text" id="first_name" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
              <div>
                <h2 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project manager (PM)</h2>
                <TabSelect />
              </div>
              <div>
                <h2 className="block text-sm font-medium text-gray-900 dark:text-white">Resources</h2>
                <ButtonChips />
              </div>
              <div>
                <h2 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project timeline</h2>
                <SelectMenu timeline={timeline} setTimeline={setTimeline} />
              </div>
              <div>
                <h2 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Estimation</h2>
                <input type="text" id="first_name" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required placeholder="US$ 00.00" />
              </div>
            </div>
            <div className="flex items-center justify-end p-2 md:p-3 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                data-modal-hide="default-modal"
                type="button"
                className="rounded-lg border border-gray-200 border-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                data-modal-hide="default-modal"
                type="button"
                className="py-2 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none rounded-lg border border-gray-200 bg-blue-700 text-white focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Add project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
