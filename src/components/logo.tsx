import React from "react";

export default function Logo() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <mask id="cut">
          <rect width="40" height="40" fill="white" />
          <path
            d="M20 12 L27 28"
            stroke="black"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </mask>
      </defs>

      {/* background */}
      <rect width="40" height="40" rx="10" fill="transparent" />

      {/* inverted triangle */}
      <path
        d="
          M10 12
          L30 12
          Q31 12 30.2 13.5
          L21 30
          Q20 31 19 30
          L9.8 13.5
          Q9 12 10 12
          Z
        "
        fill="#277781"
        mask="url(#cut)"
      />
    </svg>
  );
}
