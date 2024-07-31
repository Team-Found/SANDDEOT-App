/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { NewProjectBtn } from "../NewProjectBtn";

interface Props {
  className: any;
}

export const Section = ({ className }: Props): JSX.Element => {
  return (
    <div className={`flex flex-col items-start gap-2 relative ${className}`}>
      <div className="relative self-stretch mt-[-1.00px] [font-family:'Pretendard_Variable-Bold',Helvetica] font-bold text-white text-2xl tracking-[0] leading-[normal]">
        새롭게 시작하기
      </div>
      <div className="flex flex-wrap items-center gap-[10px_10px] relative self-stretch w-full flex-[0_0_auto]">
        <NewProjectBtn dictionary="/img/dictionary.png" property1="default" />
        <NewProjectBtn img="/img/2x.png" property1="variant-2" />
        <NewProjectBtn centerFocusWeak="/img/center-focus-weak.png" property1="variant-3" />
        <NewProjectBtn extension="/img/extension.png" property1="variant-4" />
      </div>
    </div>
  );
};
