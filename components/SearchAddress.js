import { SearchIcon } from "@heroicons/react/solid";
import React from "react";

export default function SearchAddress({ setAddress }) {
  const handleSubmit = (e) => {
    setAddress(e.target.address.value);
    e.preventDefault();
  };
  return (
    <div className="h-[calc(80vh)] w-full flex flex-col items-center justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div className="relative">
          <SearchIcon className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3" />
          <input
            type="text"
            name="address"
            placeholder="Insert address here"
            className="w-[500px] px-4  py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
          />
        </div>
        <button
          type="submit"
          className="w-[300px] px-4 py-2 text-lg rounded-md mt-8 bg-gray-300"
        >
          Get Transaction Here
        </button>
      </form>
    </div>
  );
}
