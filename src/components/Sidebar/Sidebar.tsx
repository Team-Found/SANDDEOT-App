/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { TrafficLights } from "../../icons/TrafficLights";
import { SidebarItem } from "../SidebarItem";

interface Props {
  className: any;
  sidebarItemDarkModeFalseClassName: any;
  sidebarItemDivClassName: any;
  sidebarItemIcon: string;
  sidebarItemImg: string;
  sidebarItemIcon1: string;
  sidebarItemIcon2: string;
  sidebarItemIcon3: string;
  sidebarItemIcon4: string;
  sidebarItemIcon5: string;
  sidebarItemIcon6: string;
}

export const Sidebar = ({
  className,
  sidebarItemDarkModeFalseClassName,
  sidebarItemDivClassName,
  sidebarItemIcon = "/img/icon-4.svg",
  sidebarItemImg = "/img/icon-4.svg",
  sidebarItemIcon1 = "/img/icon-4.svg",
  sidebarItemIcon2 = "/img/icon-4.svg",
  sidebarItemIcon3 = "/img/icon-4.svg",
  sidebarItemIcon4 = "/img/icon-5.svg",
  sidebarItemIcon5 = "/img/icon-6.svg",
  sidebarItemIcon6 = "/img/icon-7.svg",
}: Props): JSX.Element => {
  return (
    <div
      className={`relative w-[199px] h-[810px] bg-[#282828bf] rounded-[8.5px_0px_0px_8.5px] backdrop-blur-[68px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(68px)_brightness(100%)] ${className}`}
    >
      <TrafficLights className="!absolute !w-11 !h-2.5 !top-[17px] !left-[17px]" />
      <div className="w-[179px] gap-[13.6px] absolute top-[42px] left-2.5 flex flex-col items-start">
        <div className="gap-[1.7px] relative self-stretch w-full flex-[0_0_auto] flex flex-col items-start">
          <div className="mt-[-0.85px] [font-family:'SF_Pro_Text-Bold',Helvetica] font-bold text-[#ebebf599] text-[9.4px] whitespace-nowrap relative w-fit tracking-[0] leading-[normal]">
            기본
          </div>
          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            <SidebarItem
              className={sidebarItemDarkModeFalseClassName}
              darkMode
              divClassName={sidebarItemDivClassName}
              icon={sidebarItemIcon}
              iconClassName="!h-[13.6px] !w-[13.6px]"
              selected={false}
              text="홈"
            />
            <SidebarItem
              className="!self-stretch !rounded-[5.1px] !flex-[0_0_auto] !w-full"
              darkMode
              divClassName="!mt-[-0.85px] !tracking-[0.07px]"
              icon={sidebarItemImg}
              iconClassName="!h-[13.6px] !w-[13.6px]"
              selected={false}
              text="탐색"
            />
            <SidebarItem
              className="!self-stretch !rounded-[5.1px] !flex-[0_0_auto] !w-full"
              darkMode
              divClassName="!mt-[-0.85px] !tracking-[0.07px]"
              icon={sidebarItemIcon1}
              iconClassName="!h-[13.6px] !w-[13.6px]"
              selected={false}
              text="추천"
            />
            <SidebarItem
              className="!self-stretch !rounded-[5.1px] !flex-[0_0_auto] !w-full"
              darkMode
              divClassName="!mt-[-0.85px] !tracking-[0.07px]"
              icon={sidebarItemIcon2}
              iconClassName="!h-[13.6px] !w-[13.6px]"
              selected={false}
              text="OCR"
            />
            <SidebarItem
              className="!self-stretch !rounded-[5.1px] !flex-[0_0_auto] !w-full"
              darkMode
              divClassName="!mt-[-0.85px] !tracking-[0.07px]"
              icon={sidebarItemIcon3}
              iconClassName="!h-[13.6px] !w-[13.6px]"
              selected={false}
              text="확장"
            />
          </div>
        </div>
        <div className="gap-[1.7px] relative self-stretch w-full flex-[0_0_auto] flex flex-col items-start">
          <div className="relative w-fit mt-[-0.85px] [font-family:'SF_Pro_Text-Bold',Helvetica] font-bold text-[#ebebf599] text-[9.4px] tracking-[0] leading-[normal] whitespace-nowrap">
            iCloud
          </div>
          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            <SidebarItem
              className="!self-stretch !rounded-[5.1px] !gap-[6.8px] !flex-[0_0_auto] !p-[5.1px] !w-full"
              darkMode
              divClassName="!mt-[-0.85px] !tracking-[0.07px] !text-[11.9px] !whitespace-nowrap"
              icon={sidebarItemIcon4}
              iconClassName="!h-[13.6px] !w-[13.6px]"
              selected={false}
              text="iCloud Drive"
            />
            <SidebarItem
              className="!self-stretch !rounded-[5.1px] !gap-[6.8px] !flex-[0_0_auto] !p-[5.1px] !w-full"
              darkMode
              divClassName="!mt-[-0.85px] !tracking-[0.07px] !text-[11.9px] !whitespace-nowrap"
              icon={sidebarItemIcon5}
              iconClassName="!h-[13.6px] !w-[13.6px]"
              selected={false}
              text="Documents"
            />
            <SidebarItem
              className="!self-stretch !rounded-[5.1px] !gap-[6.8px] !flex-[0_0_auto] !p-[5.1px] !w-full"
              darkMode
              divClassName="!mt-[-0.85px] !tracking-[0.07px] !text-[11.9px] !whitespace-nowrap"
              icon={sidebarItemIcon6}
              iconClassName="!h-[13.6px] !w-[13.6px]"
              selected={false}
              text="Desktop"
            />
          </div>
        </div>
      </div>
      <div className="inline-flex items-center gap-2 absolute top-[770px] left-2.5">
        <div className="relative w-[30px] h-[30px] rounded-[60px] bg-[url(/static/img/frame-39.png)] bg-cover bg-[50%_50%]" />
        <div className="[font-family:'Pretendard_Variable-Regular',Helvetica] font-normal text-white text-sm relative w-fit tracking-[0] leading-[normal]">
          홍길동
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  sidebarItemIcon: PropTypes.string,
  sidebarItemImg: PropTypes.string,
  sidebarItemIcon1: PropTypes.string,
  sidebarItemIcon2: PropTypes.string,
  sidebarItemIcon3: PropTypes.string,
  sidebarItemIcon4: PropTypes.string,
  sidebarItemIcon5: PropTypes.string,
  sidebarItemIcon6: PropTypes.string,
};
