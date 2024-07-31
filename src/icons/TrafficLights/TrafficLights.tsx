/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const TrafficLights = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="11"
      viewBox="0 0 45 11"
      width="45"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M5.1 10.2C7.91665 10.2 10.2 7.91665 10.2 5.1C10.2 2.28335 7.91665 0 5.1 0C2.28335 0 0 2.28335 0 5.1C0 7.91665 2.28335 10.2 5.1 10.2Z"
        fill="#ED6A5F"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M22.1 10.2C24.9167 10.2 27.2 7.91665 27.2 5.1C27.2 2.28335 24.9167 0 22.1 0C19.2833 0 17 2.28335 17 5.1C17 7.91665 19.2833 10.2 22.1 10.2Z"
        fill="#F5BF4F"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M39.1 10.2C41.9167 10.2 44.2 7.91665 44.2 5.1C44.2 2.28335 41.9167 0 39.1 0C36.2833 0 34 2.28335 34 5.1C34 7.91665 36.2833 10.2 39.1 10.2Z"
        fill="#61C554"
        fillRule="evenodd"
      />
    </svg>
  );
};
