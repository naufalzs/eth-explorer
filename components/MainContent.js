import React from "react";
import PaginationBox from "./PaginationBox";
import SearchAddress from "./SearchAddress";
import SelectBox from "./SelectBox";

export default function MainContent() {
  return (
    <div className="w-4/5 float-right h-screen bg-sky-100">
      {/* <SearchAddress/> */}
      <div className="px-14 pt-12">
        <h1 className="text-2xl">0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae</h1>
        <p>transactions</p>

        <div className="my-12 flex justify-between">
          <SelectBox />
          <PaginationBox/>
        </div>
        
      </div>
    </div>
  );
}
