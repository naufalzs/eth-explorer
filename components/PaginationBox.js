import React, { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

export default function PaginationBox({
  totalPage,
  activePage,
  setActivePage,
}) {
  const [showPage, setShowPage] = useState([]);

  useEffect(() => {
    if (totalPage && activePage) {
      if (totalPage < 10 || totalPage - activePage <= 10) {
        if (totalPage < 10) {
          const arrPage = [];
          for (let i = 1; i <= totalPage; i++) {
            arrPage.push(i);
          }
          setShowPage(arrPage);
        } else {
          const arrPage = [];
          for (let i = totalPage - 10; i <= totalPage; i++) {
            arrPage.push(i);
          }
          setShowPage(arrPage);
        }
      } else {
        const arrPage2 = [];
        for (let i = 0; i <= 3; i++) {
          arrPage2.push(activePage + i);
        }
        arrPage2.push("...");

        for (let i = 1; i >= 0; i--) {
          arrPage2.push(totalPage - i);
        }
        setShowPage(arrPage2);
      }
    }
  }, [totalPage, activePage]);

  // console.log(arrPage);

  const handleClick = (active) => {
    setActivePage(active);
  };

  return (
    <nav className=" h-10 flex rounded-md shadow-sm ">
      <div
        onClick={
          activePage > 1
            ? () => {
                handleClick(activePage - 1);
              }
            : undefined
        }
        className={`flex items-center p-2 rounded-l-md border border-gray-300 bg-white text-sm  ${
          activePage > 1 && "hover:bg-gray-50 cursor-pointer"
        }`}
      >
        <ChevronLeftIcon className="h-5 w-5 text-gray-500" />
      </div>
      {showPage?.map((num) => {
        return (
          <div
            key={num}
            onClick={() => {
              handleClick(num);
            }}
            className={` ${
              num === activePage
                ? "bg-indigo-50 border-indigo-500 text-indigo-600"
                : "bg-white border-gray-300 text-gray-500"
            } flex items-center px-4 py-2 border text-sm  ${
              num !== "..." && "cursor-pointer hover:bg-gray-50"
            }`}
          >
            {num}
          </div>
        );
      })}
      <div
        onClick={
          activePage < totalPage
            ? () => {
                handleClick(activePage + 1);
              }
            : undefined
        }
        className={`flex items-center p-2 rounded-r-md border border-gray-300 bg-white text-sm  ${
          activePage < totalPage && "hover:bg-gray-50 cursor-pointer"
        }`}
      >
        <ChevronRightIcon className="h-5 w-5 text-gray-500" />
      </div>
    </nav>
  );
}
