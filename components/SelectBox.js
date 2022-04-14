import { CheckIcon, ChevronDownIcon } from "@heroicons/react/solid";
import { useEffect, useState, useRef } from "react";

export default function SelectBox({ setOffset, setActivePage }) {
  const menuItems = [10, 25, 50, 100];

  const [selectedItem, setSelectedItem] = useState({
    item: menuItems[0],
    index: 0,
  });
  const [stateDropdown, setStateDropdown] = useState(false);
  const selectMenuRef = useRef();

  useEffect(() => {
    const handleSelectMenu = (e) => {
      if (!selectMenuRef?.current?.contains(e.target)) {
        setStateDropdown(false);
      }
    };

    document.addEventListener("click", handleSelectMenu);
    setOffset(selectedItem.item);
    setActivePage(1);
  }, [selectedItem]);

  return (
    <div className="w-[80px]">
      <button
        ref={selectMenuRef}
        className="flex items-center justify-between w-full px-3 py-2 text-gray-500 bg-white border rounded-md shadow-sm  focus:border-indigo-600 whitespace-nowrap"
        onClick={() => setStateDropdown(!stateDropdown)}
      >
        {selectedItem.item}
        <ChevronDownIcon className="w-6 h-6 text-gray-400" />
      </button>

      {stateDropdown && (
        <div className="relative w-full">
          <ul className="absolute w-full overflow-y-auto bg-white border rounded-md shadow-sm max-h-64">
            {menuItems.map((item, index) => (
              <li
                key={index}
                onClick={() =>
                  setSelectedItem({
                    item,
                    index,
                  })
                }
                className={`${
                  selectedItem.index == index
                    ? "text-indigo-600 bg-indigo-50"
                    : ""
                } flex items-center justify-between px-3 cursor-default py-2 duration-150 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 whitespace-nowrap`}
              >
                {item}
                {selectedItem.index == index ? (
                  <CheckIcon className="w-5 h-5 text-indigo-600" />
                ) : (
                  ""
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
