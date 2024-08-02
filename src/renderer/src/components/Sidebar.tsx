import { SidebarItem } from "./SidebarItem";
import sidebarItemIcon from "@assets/img/icon-16.svg";
import { Link, useLocation } from "react-router-dom";

export const Sidebar = (): JSX.Element => {
  const tab = [
    { name: "홈", link: "/", icon: sidebarItemIcon },
    { name: "탐색", link: "/explore", icon: sidebarItemIcon },
    { name: "본문", link: "/article", icon: sidebarItemIcon },
    { name: "단어", link: "/word", icon: sidebarItemIcon },
  ];

  const location = useLocation();

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
            {tab.map((a, index) => (
              <Link key={index} to={a.link} className="w-full">
                <SidebarItem
                  darkMode
                  icon={a.icon}
                  text={a.name}
                  selected={
                    location.pathname.split("/")[1] === a.link.split("/")[1]
                  }
                />
              </Link>
            ))}
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
        <div className="[font-family:Helvetica] font-normal text-sm relative w-fit tracking-[0] leading-[normal]">
          홍길동
        </div>
      </div>
    </div>
  );
};
