/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { RecentProject } from "../RecentProject";

interface Props {
  className: any;
}

export const SectionWrapper = ({ className }: Props): JSX.Element => {
  return (
    <div className={`flex flex-col items-start gap-2 relative ${className}`}>
      <div className="relative self-stretch mt-[-1.00px] [font-family:'Pretendard_Variable-Bold',Helvetica] font-bold text-white text-2xl tracking-[0] leading-[normal]">
        이어서 시작하기
      </div>
      <RecentProject
        className="!flex-[0_0_auto]"
        moreVert="/img/more-vert.svg"
        progress="70"
        title="Here’s everything Apple announced at the WWDC 2024 keynote, including Apple Intelligence, Siri makeover"
      />
    </div>
  );
};
