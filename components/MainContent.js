import axios from "axios";
import React, { useState, useEffect } from "react";
import DataTable from "./DataTable";
import PaginationBox from "./PaginationBox";
import SearchAddress from "./SearchAddress";
import SelectBox from "./SelectBox";

export default function MainContent({ tabActive }) {
  const [step, setStep] = useState(undefined);
  const [address, setOffsetsetAddress] = useState(undefined);
  const [offset, setOffset] = useState(10);
  const [page, setPage] = useState(undefined);

  const [data, setData] = useState(undefined);

  const CBsetAddress = (dress) => {
    setAddress(dress);
  };

  const CBsetOffset = (set) => {
    setOffset(set);
  };

  useEffect(() => {
    // if (address) {
      const apiKey = process.env.NEXT_PUBLIC_API_KEY;
      axios
        .get(
          `https://api.etherscan.io/api?module=account&action=txlist&address=0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae&startblock=0&endblock=99999999&page=1&offset=${offset}&sort=asc&apikey=${apiKey}`
        )
        .then((res) => {
          console.log(res.data.result);
          setData(res.data.result);
          setStep(1);
        })
        .catch((err) => {
          console.log(err);
        });
    // }
  }, [offset]);
  // [address,offset]

  return (
    <div className="w-4/5 float-right min-h-screen pb-10 bg-sky-100">
      {/* {!step ? (
        <SearchAddress setAddress={CBsetAddress} />
      ) : ( */}
        <div className="px-14 pt-12">
          <h1 className="text-2xl">
            0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae
          </h1>
          <p>transactions</p>

          <div className="my-12 flex justify-between">
            <SelectBox setOffset={CBsetOffset} />
            <PaginationBox />
          </div>
          <DataTable transactionData={data}/>
        </div>
      {/* )} */}
    </div>
  );
}
