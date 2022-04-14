import axios from "axios";
import React, { useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import useSWR from "swr";

export default function BitcoinLive() {
  const fetcher = async () => {
    const data = await axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1&page=1&sparkline=false"
      )
      .then((res) => res.data);
    return data;
  };
  const { data: getCoin } = useSWR("coinApi", fetcher);
  return (
    <div className="h-[calc(80vh)] w-full flex flex-col items-center justify-center">
      <div className="text-4xl text-gray-800">Current Bitcoin Price</div>
      <div className="mt-2">
        {getCoin ? (
          <NumberFormat
            value={getCoin?.[0]?.current_price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={`$`}
            renderText={(value, props) => (
              <p className="text-7xl" {...props}>
                {value}
              </p>
            )}
          />
        ) : (
          <p className="text-5xl">Loading ...</p>
        )}
      </div>
    </div>
  );
}
