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
      if (totalPage < 10) {
        const arrPage = [];
        for (let i = 1; i <= totalPage; i++) {
          arrPage.push(i);
        }
        setShowPage(arrPage);
      } else if (activePage < 4) {
        const arrPage2 = [];
        for (let i = 1; i <= 4; i++) {
          arrPage2.push(i);
        }
        arrPage2.push("...");
        for (let i = 1; i >= 0; i--) {
          arrPage2.push(totalPage - i);
        }
        setShowPage(arrPage2);
      } else if (activePage >= 4 && activePage <= totalPage - 4) {
        const arrPage3 = [];
        for (let i = 1; i <= 2; i++) {
          arrPage3.push(i);
        }
        arrPage3.push("...");
        for (let i = -1; i <= 1; i++) {
          arrPage3.push(activePage + i);
        }
        arrPage3.push("...");
        for (let i = 1; i >= 0; i--) {
          arrPage3.push(totalPage - i);
        }
        setShowPage(arrPage3);
      } else if (activePage > totalPage - 4) {
        const arrPage4 = [];
        for (let i = 1; i <= 2; i++) {
          arrPage4.push(i);
        }
        arrPage4.push("...");
        for (let i = 4; i >= 0; i--) {
          arrPage4.push(totalPage - i);
        }
        setShowPage(arrPage4);
      }
    }
  }, [totalPage, activePage]);

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
          activePage > 1
            ? "hover:bg-gray-100 cursor-pointer text-gray-500"
            : "bg-gray-100 text-gray-300"
        }`}
      >
        <ChevronLeftIcon className="h-5 w-5" />
      </div>
      {showPage?.map((num, index) => {
        return (
          <div
            key={index}
            onClick={num!== "..." ? () => {
              handleClick(num);
            } : undefined}
            className={` ${
              num === activePage
                ? "bg-indigo-50 border-indigo-500 text-indigo-600"
                : "bg-white border-gray-300 text-gray-500"
            } flex items-center px-4 py-2 border text-sm  ${
              num !== "..." ? "cursor-pointer hover:bg-gray-50" : "bg-gray-100"
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
          activePage < totalPage
            ? "hover:bg-gray-100 cursor-pointer text-gray-500"
            : "bg-gray-100 text-gray-300"
        }`}
      >
        <ChevronRightIcon className="h-5 w-5 " />
      </div>
    </nav>
  );
}
