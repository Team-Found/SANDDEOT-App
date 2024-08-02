/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

// import React from "react";
import { TodayWord } from "./TodayWord";

// interface Props {}

export const Section3 = (): JSX.Element => {
  return (
    <div
      className={`flex flex-col items-start gap-2 relative !self-stretch !flex-[0_0_auto] !w-full`}
    >
      <div className="relative self-stretch mt-[-1.00px] [font-family:Helvetica] font-bold text-2xl tracking-[0] leading-[normal]">
        오늘의단어
      </div>
      <div className="flex flex-wrap items-center gap-[9px_9px] relative self-stretch w-full flex-[0_0_auto]">
        <TodayWord
          // groupClassName="!w-[114px]"
          star
          text="Sanddeot"
          text1="(명) 산뜻"
        />
        <TodayWord
          // groupClassName="!w-[114px]"
          // prop="one"
          star
          text="exploit"
          text1="(동) 이용하다"
        />
        <TodayWord
          // prop
          text="record"
          text1="(명) 이력, 경력"
        />
      </div>
    </div>
  );
};
