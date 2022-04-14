/* This example requires Tailwind CSS v2.0+ */
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

export default function PaginationBox() {
  return (
    <nav className=" h-10 flex rounded-md shadow-sm ">
      <a
        href="#"
        className=" flex items-center p-2 rounded-l-md border border-gray-300 bg-white text-sm  hover:bg-gray-50"
      >
        <ChevronLeftIcon className="h-5 w-5 text-gray-500" />
      </a>
      {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
      <a
        href="#"
        className="bg-indigo-50 border-indigo-500 text-indigo-600  flex items-center px-4 py-2 border text-sm"
      >
        1
      </a>
      <a
        href="#"
        className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50  flex items-center px-4 py-2 border text-sm"
      >
        2
      </a>
      <a
        href="#"
        className=" flex items-center p-2 rounded-r-md border border-gray-300 bg-white text-sm  hover:bg-gray-50"
      >
        <ChevronRightIcon className="h-5 w-5 text-gray-500" />
      </a>
    </nav>
  );
}
