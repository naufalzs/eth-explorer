import axios from "axios";
import React, { useState, useEffect } from "react";
import DataTable from "./DataTable";
import PaginationBox from "./PaginationBox";
import SearchAddress from "./SearchAddress";
import SelectBox from "./SelectBox";

export default function MainTransaction() {
  const [step, setStep] = useState(undefined);
  const [address, setAddress] = useState(undefined);
  const [offset, setOffset] = useState(10);
  const [activePage, setActivePage] = useState(1);
  const [totalPage, setTotalPage] = useState(undefined);
  const [page, setPage] = useState(undefined);

  const [data, setData] = useState(undefined);
  const [filterTo, setFilterTo] = useState(false);
  const indexFix = offset * (activePage - 1);

  const CBsetAddress = (dress) => {
    setAddress(dress);
  };

  const CBsetOffset = (set) => {
    setOffset(set);
  };

  const CBsetActivePage = (num) => {
    setActivePage(num);
  };

  useEffect(() => {
    if (address) {
      const apiKey = process.env.NEXT_PUBLIC_API_KEY;
      axios
        .get(
          `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=1&offset=&sort=asc&apikey=${apiKey}`
        )
        .then((res) => {
          setTotalPage(Math.floor(res.data.result.length / offset) + 1);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [address, offset]);

  useEffect(() => {
    if (address) {
      const apiKey = process.env.NEXT_PUBLIC_API_KEY;
      axios
        .get(
          `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=${activePage}&offset=${offset}&sort=asc&apikey=${apiKey}`
        )
        .then((res) => {
          const getRes = res.data.result;
          if (filterTo) {
            const filteredRes = getRes.filter((e) => e.to !== "");
            setData(filteredRes);
          } else {
            setData(getRes);
          }
          setStep(1);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [address, offset, activePage, filterTo]);

  return (
    <>
      {!step ? (
        <SearchAddress setAddress={CBsetAddress} />
      ) : typeof data !== "string" ? (
        <div className="px-14 pt-12">
          <h1 className="text-2xl">{address || "address goes here"}</h1>
          <p>transactions</p>

          <div className="mt-6 mb-2 flex justify-between">
            <SelectBox
              setOffset={CBsetOffset}
              setActivePage={CBsetActivePage}
            />
            <PaginationBox
              totalPage={totalPage}
              activePage={activePage}
              setActivePage={CBsetActivePage}
            />
          </div>
          <div className="mb-6 flex justify-between">
            <button
              onClick={() => {
                setFilterTo(!filterTo);
              }}
              className="w-[350px] px-4 py-2 text-lg rounded-md mt-8 bg-gray-300"
            >
              Only show transaction with To value
            </button>
          </div>
          <DataTable transactionData={data} indexFix={indexFix} />
        </div>
      ) : (
        <div className="h-[calc(80vh)] w-full flex flex-col items-center justify-center">
          <h1 className="text-center text-5xl">Address Not Valid</h1>
          <button
            onClick={() => {
              setStep(0);
            }}
            className="w-[300px] px-4 py-2 text-lg rounded-md mt-8 bg-gray-300"
          >
            Back to home
          </button>
        </div>
      )}
    </>
  );
}
