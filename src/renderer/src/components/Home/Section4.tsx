/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

// import React from "react";

// interface Props {}

export const Section4 = (): JSX.Element => {
  return (
    <div className="flex flex-col items-start gap-2  !self-stretch !flex-[0_0_auto] !w-full">
      <div className=" self-stretch mt-[-1.00px] [font-family:Helvetica] font-bold text-2xl tracking-[0] leading-[normal]">
        인기코스
      </div>
      <div className="flex flex-wrap items-center gap-[19px_19px]  self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col max-w-[245px] h-[140px] items-start justify-end gap-1 p-4  flex-1 grow rounded-xl overflow-hidden [background:linear-gradient(180deg,rgba(24,22,50,0.29)_30.5%,rgba(19.22,17.63,39.95,0.81)_64.5%,rgb(12.95,11.86,28.13)_97.5%)] bg-[url(/static/img/frame-26.svg)] bg-cover bg-[50%_50%]">
          <div className=" self-stretch [font-family:Helvetica] font-bold text-xl tracking-[0] leading-[19px]">
            Computer Science
          </div>
          <div className=" self-stretch [font-family:Helvetica] font-normal text-sm tracking-[0] leading-[normal]">
            16 코스
          </div>
        </div>
        <div className="flex flex-col max-w-[245px] h-[140px] items-start justify-end p-4  flex-1 grow rounded-xl overflow-hidden [background:linear-gradient(180deg,rgba(10,132,255,0)_0%,rgb(0,17.25,20.3)_100%)] bg-[url(/static/img/frame-30.svg)] bg-cover bg-[50%_50%]">
          <div className=" self-stretch [font-family:Helvetica] font-bold text-xl tracking-[0] leading-[normal]">
            Business
          </div>
          <div className=" self-stretch [font-family:Helvetica] font-normal text-sm tracking-[0] leading-[normal]">
            9코스
          </div>
        </div>
      </div>
    </div>
  );
};
