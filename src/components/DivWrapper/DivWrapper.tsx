/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { TodayWord } from "../TodayWord";

interface Props {
  className: any;
}

export const DivWrapper = ({ className }: Props): JSX.Element => {
  return (
    <div className={`flex flex-col items-start gap-2 relative ${className}`}>
      <div className="relative self-stretch mt-[-1.00px] [font-family:'Pretendard_Variable-Bold',Helvetica] font-bold text-white text-2xl tracking-[0] leading-[normal]">
        오늘의단어
      </div>
      <div className="flex flex-wrap items-center gap-[9px_9px] relative self-stretch w-full flex-[0_0_auto]">
        <TodayWord
          className="!flex !bg-variable-collection-secondarybg !w-[186px]"
          groupClassName="!w-[114px]"
          prop="one"
          star="/img/star-1-1.svg"
          starClassName="!h-4 !w-4"
          text="Sanddeot"
          text1="(명) 산뜻"
        />
        <TodayWord
          className="!flex-[0_0_auto] !bg-variable-collection-secondarybg"
          groupClassName="!w-[114px]"
          prop="one"
          star="/img/star-1-1.svg"
          starClassName="!h-4 !w-4"
          text="woghks"
          text1="(명) 성실한사람"
        />
        <TodayWord
          className="!flex-[0_0_auto] !bg-variable-collection-secondarybg"
          img="/img/star-1-2.svg"
          prop="two"
          starClassName="!h-4 !w-4"
          text="woghks.com"
          text1="(명) 성실성실 사이트 따위를 통틀어 일컫는 말"
        />
      </div>
    </div>
  );
};
