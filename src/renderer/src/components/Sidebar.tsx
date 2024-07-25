/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

// import PropTypes from "prop-types";
// import React from "react";
import { SidebarItem } from "./SidebarItem";
import sidebarItemIcon from "@assets/img/icon-16.svg";

// interface Props {
//   sidebarItemIcon: string;
//   sidebarItemImg: string;
//   sidebarItemIcon1: string;
//   sidebarItemIcon2: string;
//   sidebarItemIcon3: string;
//   sidebarItemIcon4: string;
//   sidebarItemIcon5: string;
//   sidebarItemIcon6: string;
// }

export const Sidebar = () //   {
//   sidebarItemIcon = "/img/icon-4.svg",
//   sidebarItemImg = "/img/icon-4.svg",
//   sidebarItemIcon1 = "/img/icon-4.svg",
//   sidebarItemIcon2 = "/img/icon-4.svg",
//   sidebarItemIcon3 = "/img/icon-4.svg",
//   sidebarItemIcon4 = "/img/icon-5.svg",
//   sidebarItemIcon5 = "/img/icon-6.svg",
//   sidebarItemIcon6 = "/img/icon-7.svg",
// }: Props
: JSX.Element => {
  return (
    <div
      className={`w-[200px] h-[100dvh] bg-[#00000000] rounded-[8.5px_0px_0px_8.5px] flex flex-col justify-between`}
    >
      <div className="w-[179px] gap-[13.6px] mt-[42px] m-2.5 flex flex-col items-start">
        <div className="gap-[1.7px] self-stretch w-full flex-[0_0_auto] flex flex-col items-start">
          <div className="mt-[-0.85px] [font-family:'SF_Pro_Text-Bold',Helvetica] font-bold text-[#ebebf599] text-[9.4px] whitespace-nowrap w-fit tracking-[0] leading-[normal]">
            기본
          </div>
          <div className="flex flex-col items-start self-stretch w-full flex-[0_0_auto]">
            <SidebarItem darkMode icon={sidebarItemIcon} selected text="홈" />
            <SidebarItem darkMode icon={sidebarItemIcon} text="탐색" />
            <SidebarItem darkMode icon={sidebarItemIcon} text="추천" />
            <SidebarItem darkMode icon={sidebarItemIcon} text="OCR" />
            <SidebarItem darkMode icon={sidebarItemIcon} text="확장" />
          </div>
        </div>
        <div className="gap-[1.7px] self-stretch w-full flex-[0_0_auto] flex flex-col items-start">
          <div className=" w-fit mt-[-0.85px] [font-family:'SF_Pro_Text-Bold',Helvetica] font-bold text-[#ebebf599] text-[9.4px] tracking-[0] leading-[normal] whitespace-nowrap">
            iCloud
          </div>
          <div className="flex flex-col items-start  self-stretch w-full flex-[0_0_auto]">
            <SidebarItem darkMode icon={sidebarItemIcon} text="iCloud Drive" />
            <SidebarItem darkMode icon={sidebarItemIcon} text="Documents" />
            <SidebarItem darkMode icon={sidebarItemIcon} text="Desktop" />
          </div>
        </div>
      </div>
      <div className="flex-grow w-full drag"></div>
      <div className="inline-flex items-center gap-2 m-2.5">
        <div className=" w-[30px] h-[30px] rounded-[60px] bg-[url(/static/img/frame-39.png)] bg-cover bg-[50%_50%]" />
        <div className="[font-family:Helvetica] font-normal text-white text-sm relative w-fit tracking-[0] leading-[normal]">
          홍길동
        </div>
      </div>
    </div>
  );
};

// Sidebar.propTypes = {
//   sidebarItemIcon: PropTypes.string,
//   sidebarItemImg: PropTypes.string,
//   sidebarItemIcon1: PropTypes.string,
//   sidebarItemIcon2: PropTypes.string,
//   sidebarItemIcon3: PropTypes.string,
//   sidebarItemIcon4: PropTypes.string,
//   sidebarItemIcon5: PropTypes.string,
//   sidebarItemIcon6: PropTypes.string,
// };
