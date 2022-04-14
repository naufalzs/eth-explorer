import React from "react";

export default function Sidebar() {
  return (
      <div className="w-1/5 bg-gray-100 px-2 text-center fixed bottom-0 pt-8 top-0 left-0 h-screen border-r-1">
        <div className="flex flex-col items-center px-6">
          <div className="w-36 h-36 mb-10 rounded-full bg-green-400"></div>
          <ul className="flex flex-col gap-10 text-left">
            <li className="mr-3 flex gap-2 ">
              <div className="w-6 h-6 bg-orange-400"></div>
              <div className="pb-0 text-lg text-black font-bold">
                Get all transactions
              </div>
            </li>
            <li className="mr-3 flex gap-2 ">
              <div className="w-6 h-6 bg-orange-400"></div>
              <div className="pb-0 text-lg text-black font-light">
                Live Bitcoin price
              </div>
            </li>
          </ul>
        </div>
      </div>
  );
}
