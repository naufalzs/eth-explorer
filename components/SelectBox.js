import { useEffect, useRef, useState } from "react";

export default function SelectBox() {
  const menuItems = [10, 25, 50, 100];

  const [selectedItem, setSelectedItem] = useState({
    item: menuItems[0],
    id: 0,
  });
  const [stateDropdown, setStateDropdown] = useState(false);
  const selectMenuRef = useRef();

  useEffect(() => {
    const handleSelectMenu = (e) => {
      if (!selectMenuRef.current.contains(e.target)) {
        setStateDropdown(false);
      }
    };

    document.addEventListener("click", handleSelectMenu);
  }, []);

  return (
    <div className="w-[80px]">
      <button
        ref={selectMenuRef}
        className="flex items-center justify-between w-full px-3 py-2 text-gray-500 bg-white border rounded-md shadow-sm  focus:border-indigo-600 whitespace-nowrap"
        onClick={() => setStateDropdown(!stateDropdown)}
      >
        {selectedItem.item}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 9l4-4 4 4m0 6l-4 4-4-4"
          />
        </svg>
      </button>

      {stateDropdown && (
        <div className="relative w-full">
          <ul className="absolute w-full overflow-y-auto bg-white border rounded-md shadow-sm max-h-64">
            {menuItems.map((item, id) => (
              <li
                key={id}
                onClick={() =>
                  setSelectedItem({
                    item,
                    id,
                  })
                }
                className={`${
                  selectedItem.id == id ? "text-indigo-600 bg-indigo-50" : ""
                } flex items-center justify-between px-3 cursor-default py-2 duration-150 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 whitespace-nowrap`}
              >
                {item}
                {selectedItem.id == id ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-indigo-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
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
