import React, { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

export default function PaginationBox({
  totalPage,
  activePage,
  setActivePage,
}) {
  const arrPage = [];

  for (let i = 1; i <= totalPage; i++) {
    arrPage.push(i);
  }
  // useEffect(() => {

  // }, [totalPage]);
  const lastNumber = arrPage[arrPage.length - 1];
  const showPage = [1, 2, "...", lastNumber - 1, lastNumber];
  // console.log(arrPage);

  const handleClick = (active) => {
    setActivePage(active);
  };

  return (
    <nav className=" h-10 flex rounded-md shadow-sm ">
      <div className=" flex items-center p-2 rounded-l-md border border-gray-300 bg-white text-sm  hover:bg-gray-50">
        <ChevronLeftIcon className="h-5 w-5 text-gray-500" />
      </div>
      {arrPage?.map((num) => {
        // {showPage?.map((num) => {
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
            } flex items-center px-4 py-2 border text-sm`}
          >
            {num}
          </div>
        );
      })}
      {/* <div className="bg-indigo-50 border-indigo-500 text-indigo-600  flex items-center px-4 py-2 border text-sm">
        1
      </div>
      <div className="cursor-pointer bg-white border-gray-300 text-gray-500 hover:bg-gray-50  flex items-center px-4 py-2 border text-sm">
        2
      </div>
      <div className="flex items-center px-4 py-2 border border-gray-300 bg-white text-sm">
        ...
      </div>
      <div className="cursor-pointer bg-white border-gray-300 text-gray-500 hover:bg-gray-50  flex items-center px-4 py-2 border text-sm">
        9
      </div>
      <div className="cursor-pointer bg-white border-gray-300 text-gray-500 hover:bg-gray-50  flex items-center px-4 py-2 border text-sm">
        10
      </div> */}
      <div className=" flex items-center p-2 rounded-r-md border border-gray-300 bg-white text-sm  hover:bg-gray-50">
        <ChevronRightIcon className="h-5 w-5 text-gray-500" />
      </div>
    </nav>
  );
}
