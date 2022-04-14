import { CreditCardIcon } from "@heroicons/react/solid";
import React from "react";
import BitcoinIcon from "./Icons/BitcoinIcon";
import Image from "next/image";

export default function Sidebar({ tabActive, setTabActive }) {
  const tabMenu = ["Get all transactions", "Live Bitcoin price"];

  const handleClick = (index) => {
    setTabActive(index);
  };

  return (
    <div className="w-1/5 bg-gray-100 text-center fixed bottom-0 pt-8 top-0 left-0 h-screen border-r-1">
      <div className="flex flex-col items-center pl-6">
        <div className="w-36 h-36 mb-2">
          <Image
            width={144}
            height={144}
            objectFit="cover"
            src={"/metaverseMan.jpg"}
            alt="Avatar Icon"
            className="rounded-full"
          />
        </div>
        <p className="mb-10">jonassunandar@gmail.com</p>
        <ul className="self-end flex flex-col gap-y-10 text-left">
          {tabMenu.map((tabItem, index) => (
            <li
              key={tabItem}
              onClick={() => handleClick(index)}
              className={`px-4 py-2 rounded-l-md flex gap-2 ${
                index === tabActive && "text-indigo-600"
              } hover:bg-gray-200 cursor-pointer`}
            >
              {index == 0 ? (
                <CreditCardIcon className="w-6 h-6" />
              ) : (
                <BitcoinIcon className="w-6 h-6" />
              )}
              <div className="pb-0 text-lg font-medium">{tabItem}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
