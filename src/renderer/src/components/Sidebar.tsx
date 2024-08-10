// import { SidebarItem } from "./SidebarItem";
// import sidebarItemIcon from "@assets/img/icon-16.svg";
// import { Link, useLocation } from "react-router-dom";

// export const Sidebar = (): JSX.Element => {
//   const tab = [
//     { name: "홈", link: "/", icon: sidebarItemIcon },
//     { name: "탐색", link: "/explore", icon: sidebarItemIcon },
//     { name: "본문", link: "/article", icon: sidebarItemIcon },
//     { name: "단어", link: "/word", icon: sidebarItemIcon },
//   ];

//   const location = useLocation();

//   return (
//     <div
//       className={`w-[200px] h-[100dvh] bg-[#00000000] rounded-[8.5px_0px_0px_8.5px] flex flex-col justify-between`}
//     >
//       <div className="w-[179px] gap-[13.6px] mt-[42px] m-2.5 flex flex-col items-start">
//         <div className="gap-[1.7px] self-stretch w-full flex-[0_0_auto] flex flex-col items-start">
//           <div className="mt-[-0.85px] [font-family:'SF_Pro_Text-Bold',Helvetica] font-bold text-[#ebebf599] text-[9.4px] whitespace-nowrap w-fit tracking-[0] leading-[normal]">
//             기본
//           </div>
//           <div className="flex flex-col items-start self-stretch w-full flex-[0_0_auto]">
//             {tab.map((a, index) => (
//               <Link key={index} to={a.link} className="w-full">
//                 <SidebarItem
//                   darkMode
//                   icon={a.icon}
//                   text={a.name}
//                   selected={
//                     location.pathname.split("/")[1] === a.link.split("/")[1]
//                   }
//                 />
//               </Link>
//             ))}
//           </div>
//         </div>
//         <div className="gap-[1.7px] self-stretch w-full flex-[0_0_auto] flex flex-col items-start">
//           <div className=" w-fit mt-[-0.85px] [font-family:'SF_Pro_Text-Bold',Helvetica] font-bold text-[#ebebf599] text-[9.4px] tracking-[0] leading-[normal] whitespace-nowrap">
//             iCloud
//           </div>
//           <div className="flex flex-col items-start  self-stretch w-full flex-[0_0_auto]">
//             <SidebarItem darkMode icon={sidebarItemIcon} text="iCloud Drive" />
//             <SidebarItem darkMode icon={sidebarItemIcon} text="Documents" />
//             <SidebarItem darkMode icon={sidebarItemIcon} text="Desktop" />
//           </div>
//         </div>
//       </div>
//       <div className="flex-grow w-full drag"></div>
//       <div className="inline-flex items-center gap-2 m-2.5">
//         <div className=" w-[30px] h-[30px] rounded-[60px] bg-[url(/static/img/frame-39.png)] bg-cover bg-[50%_50%]" />
//         <div className="[font-family:Helvetica] font-normal text-sm relative w-fit tracking-[0] leading-[normal]">
//           홍길동
//         </div>
//       </div>
//     </div>
//   );
// };

import { Sidebaritemicon1 } from "@assets/img/Sidebaritemicon1";
import { Sidebaritemicon2 } from "@assets/img/Sidebaritemicon2";
import { Sidebaritemicon5 } from "@assets/img/Sidebaritemicon5";
import { SidebarItem } from "./SidebarItem";
import logoImg from "@assets/img/logo.svg";
import textImg from "@assets/img/logoText.svg";

interface Props {
  className: string;
}

export const Sidebar = ({ className }: Props): JSX.Element => {
  return (
    <div
      className={`flex flex-col w-[200px] h-[calc(100vh-2.25rem)] items-start pt-2 pb-0 px-[11px] relative bg-variable-collection-primarybg border-r [border-right-style:solid] border-variable-collection-primaryborder ${className}`}
    >
      <div className="flex h-[57px] items-center gap-2.5 pl-2 pr-[15px] py-4 relative self-stretch w-full rounded-[27px]">
        <div className="flex items-center gap-1 relative flex-[0_0_auto] mt-[-0.50px] mb-[-0.50px]">
          <div className="relative w-[25px] h-[25px]">
            <div className="w-[25px] h-[25px] m-0 flex flex-row">
              <img className="w-12 h-12" alt="산뜻 로고" src={logoImg} />{" "}
              <img className="w-12 h-12" alt="산뜻 로고" src={textImg} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start gap-[23px] px-0 py-[21px] relative flex-1 self-stretch w-full grow rounded-[27px]">
        <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
          <SidebarItem
            className="!self-stretch !flex-[0_0_auto]"
            icon={<Sidebaritemicon5 />}
            sidebarTitle="홈"
            link="/"
          />
          <SidebarItem
            className="!self-stretch !flex-[0_0_auto]"
            icon={<Sidebaritemicon1 />}
            sidebarTitle="저장됨"
            link="/saved"
          />
          <SidebarItem
            className="!self-stretch !flex-[0_0_auto]"
            icon={<Sidebaritemicon5 />}
            sidebarTitle="내 활동"
            link="/my-activity"
          />
        </div>
        <div className="flex items-center justify-center gap-2.5 px-[50px] py-[13px] relative self-stretch w-full flex-[0_0_auto] bg-variable-collection-primary rounded-[78px] overflow-hidden">
          <div className="w-fit mt-[-1.00px] [font-family:'Pretendard_Variable-Bold',Helvetica] font-bold text-white text-xs whitespace-nowrap relative tracking-[0] leading-[normal]">
            시작하기
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-center gap-2.5 px-0 py-[19px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex items-center gap-2.5 p-2 relative self-stretch w-full flex-[0_0_auto] rounded-[11px]">
          <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
            <div className="flex w-6 h-6 items-center justify-center gap-2.5 px-[5px] py-0.5 relative">
              <img
                className="relative w-6 h-6 mt-[-2.00px] mb-[-2.00px] ml-[-5.00px] mr-[-5.00px]"
                alt="Settings"
                src="/img/settings.png"
              />
            </div>
            <div className="w-fit [font-family:'Pretendard_Variable-Bold',Helvetica] font-bold text-[#f9f4f4] text-xs whitespace-nowrap relative tracking-[0] leading-[normal]">
              설정
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
