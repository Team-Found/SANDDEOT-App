/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

// import React from "react";
import { NewProjectBtn } from "./NewProjectBtn";

// interface Props {}

export const Section = (): JSX.Element => {
  return (
    <div
      className={`flex flex-col items-start gap-2 relative !self-stretch !flex-[0_0_auto] !w-full`}
    >
      <div className="relative self-stretch mt-[-1.00px] [font-family:Helvetica] font-bold text-2xl tracking-[0] leading-[normal]">
        새롭게 시작하기
      </div>
      <div className="flex flex-wrap items-center gap-[10px_10px] relative self-stretch w-full flex-[0_0_auto]">
        <NewProjectBtn property1="default" />
        {/* <NewProjectBtn property1="variant-2" /> */}
        <NewProjectBtn property1="variant-3" />
        <NewProjectBtn property1="variant-4" />
      </div>
    </div>
  );
};
