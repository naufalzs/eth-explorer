import React from "react";

function BitcoinIcon({className}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 48 48"
    >
      <path
        fill="currentColor"
        d="M44 24c0 11.044-8.956 20-20 20S4 35.044 4 24 12.956 4 24 4s20 8.956 20 20z"
      ></path>
      <path
        fill="#fff8e1"
        d="M17 34V14h8.199c2.41 0 4.234.465 5.48 1.395s1.867 2.293 1.867 4.086c0 .98-.25 1.844-.746 2.59-.5.746-1.195 1.293-2.086 1.641 1.016.258 1.816.773 2.402 1.555.587.776.884 1.725.884 2.854 0 1.922-.609 3.379-1.828 4.367S28.219 33.98 25.965 34H17zm4-12h4.363c2.063-.035 3.098-.824 3.098-2.445 0-.906-.262-1.559-.785-1.957S26.328 17 25.199 17H21v5zm0 3v6h4.844c.961 0 3.156-.469 3.156-2.609S27.883 25.027 26 25h-5z"
      ></path>
      <path
        fill="#fff8e1"
        d="M20 11h3v5h-3v-5zm5 0h3v5h-3v-5zm-5 21h3v5h-3v-5zm5 0h3v5h-3v-5z"
      ></path>
    </svg>
  );
}

export default BitcoinIcon;
