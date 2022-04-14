import Script from "next/script";
import React from "react";
import testRTI from "scripts/basic-javascript-test";

export default function basicJs() {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center text-4xl">
        <div>basic-js-script-page</div>
        <div>please check console</div>
      </div>
      <Script src={testRTI} />
    </>
  );
}
