import React from "react";

export default function SearchAddress() {
  return (
    <div className="h-4/5 w-full flex flex-col items-center justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col items-center"
      >
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
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
