/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  progress: string;
  title: string;
  className: any;
  moreVert: string;
}

export const RecentProject = ({
  progress = "70",
  title = "Here’s everything Apple announced at the WWDC 2024 keynote, including Apple Intelligence, Siri makeover",
  className,
  moreVert = "/img/more-vert-1.svg",
}: Props): JSX.Element => {
  return (
    <div
      className={`flex flex-col max-w-[645px] w-[645px] items-start gap-[19px] p-4 relative bg-variable-collection-secondarybg rounded-[20px] overflow-hidden ${className}`}
    >
      <div className="flex items-start justify-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
        <p className="relative flex-1 mt-[-1.00px] [font-family:'Pretendard_Variable-Bold',Helvetica] font-bold text-white text-base tracking-[0] leading-[normal] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
          {title}
        </p>
        <img className="relative w-[17px] h-8" alt="More vert" src={moreVert} />
      </div>
      <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
        <div className="inline-flex items-start gap-1 relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Pretendard_Variable-Regular',Helvetica] font-normal text-white text-xs tracking-[0] leading-[normal] whitespace-nowrap">
            진척도
          </div>
          <div className="inline-flex items-center relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Pretendard_Variable-Regular',Helvetica] font-normal text-white text-xs tracking-[0] leading-[normal] whitespace-nowrap">
              {progress}
            </div>
            <div className="relative w-fit mt-[-1.00px] [font-family:'Pretendard_Variable-Regular',Helvetica] font-normal text-white text-xs tracking-[0] leading-[normal] whitespace-nowrap">
              %
            </div>
          </div>
        </div>
        <div className="relative self-stretch w-full h-1.5 bg-[#454545] rounded-[41px] overflow-hidden">
          <div className="w-[302px] h-1.5 bg-variable-collection-progress rounded-[41px]" />
        </div>
      </div>
    </div>
  );
};

RecentProject.propTypes = {
  progress: PropTypes.string,
  title: PropTypes.string,
  moreVert: PropTypes.string,
};
