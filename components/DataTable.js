import React from "react";

export default function DataTable({ transactionData }) {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="text-sm font-medium text-gray-900 text-left">
                <tr className="bg-white border-b">
                  <th className="px-6 py-4">#</th>
                  <th className="px-6 py-4">blockNumber</th>
                  <th className="px-6 py-4">transaction hash</th>
                  <th className="px-6 py-4">from</th>
                  <th className="px-6 py-4">to</th>
                  <th className="px-6 py-4">value</th>
                </tr>
              </thead>
              <tbody className="text-sm font-light text-gray-900">
                {transactionData?.map((transaction,index) => (
                  <tr key={transaction?.timeStamp} className={`${index % 2=== 0 ? "bg-gray-100" : "bg-white"} border-b`}>
                    <td className="px-6 py-4 whitespace-nowrap  font-medium ">
                      {index+1}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{transaction?.blockNumber|| ""}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{transaction?.hash|| ""}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{transaction?.from|| ""}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{transaction?.to|| ""}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{transaction?.value|| ""}</td>
                  </tr>
                ))}
                {/* <tr className="bg-gray-100 border-b ">
                  <td className="px-6 py-4 whitespace-nowrap  font-medium ">
                    1
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">Mark</td>
                  <td className="px-6 py-4 whitespace-nowrap">Otto</td>
                  <td className="px-6 py-4 whitespace-nowrap">@mdo</td>
                  <td className="px-6 py-4 whitespace-nowrap">@mdo</td>
                  <td className="px-6 py-4 whitespace-nowrap">@mdo</td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
