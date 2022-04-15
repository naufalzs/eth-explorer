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
  const [hash, setHash] = useState(undefined);
  const [callApi, setCallApi] = useState(false);
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

  const handleHash = (e) => {
    setHash(e.target.hash.value);
    e.preventDefault();
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
          if (hash && hash.length > 0) {
            const getRes = res.data.result;
            const filterHash = getRes.filter((e) => e.hash == hash);
            setData(filterHash);
            setTotalPage(1);
          } else {
            setCallApi(!callApi);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [address, offset, hash]);

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
  }, [offset, activePage, filterTo, callApi]);
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

          <div className="my-6 flex items-center justify-between">
            <button
              onClick={() => {
                setFilterTo(!filterTo);
              }}
              className="w-[350px] px-4 py-2 text-lg rounded-md bg-gray-300"
            >
              Only show transaction with To value
            </button>
            <div className="flex items-center justify-between">
              <form onSubmit={handleHash} className=" flex">
                <div className="relative">
                  <input
                    type="text"
                    name="hash"
                    placeholder="Insert TxHash here"
                    className="w-[300px] px-4 py-3 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                  />
                </div>
                <button
                  type="submit"
                  className="w-[180px] px-4 py-2 text-lg rounded-md bg-gray-300"
                >
                  Search by Hash
                </button>
              </form>
            </div>
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
