import { Sidebaritemicon5 } from "@assets/img/Sidebaritemicon5";
import { Link, useLocation } from "react-router-dom";

interface Props {
  sidebarTitle: string;
  className: string;
  icon: JSX.Element;
  link: string;
}

export const SidebarItem = ({
  sidebarTitle = "홈",
  className,
  icon = <Sidebaritemicon5 className="!relative !w-6 !h-6" color="#F5F5F5" />,
  link,
}: Props): JSX.Element => {
  const location = useLocation();
  return (
    <Link to={link} className="w-full">
      <div
        className={`w-full flex items-center gap-2 px-2 py-1.5 rounded-lg relative ${
          location.pathname.split("/")[1] !== link.split("/")[1]
            ? "bg-variable-collection-primarybg"
            : "bg-variable-collection-secondarybg"
        } ${className}`}
      >
        <div className="flex items-center grow gap-2 flex-1 relative">
          {icon}
          <div className="tracking-[0] text-xs flex-1 text-variable-collection-primarytext font-bold leading-[normal] relative">
            {sidebarTitle}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SidebarItem;

// // import PropTypes from "prop-types";
// // import React from "react";

// interface Props {
//   darkMode: boolean;
//   selected?: boolean;
//   icon: string;
//   text: string;
// }

// export const SidebarItem = ({
//   darkMode,
//   selected = false,
//   icon = "/img/icon-11.svg",
//   text = "Desktop",
// }: Props): JSX.Element => {
//   return (
//     <div
//       className={`flex items-center gap-2 rounded-md relative p-1.5 ${
//         selected ? "bg-[#c9c9c83d]" : ""
//       } !self-stretch !flex-[0_0_auto] w-full`}
//     >
//       <img
//         className={`relative h-[14px] w-[14px]`}
//         alt="Icon"
//         src={darkMode ? icon : "/img/icon-9.svg"}
//       />
//       <div
//         className={`[font-family:'SF_Pro_Display-Medium',Helvetica] w-fit mt-[-1.00px] tracking-[0.08px] text-sm font-medium leading-[normal] relative ${
//           darkMode ? "text-[#dfdedf]" : "text-[#434343]"
//         } !mt-[-0.85px] !tracking-[0.07px]`}
//       >
//         {text}
//       </div>
//     </div>
//   );
// };

// // SidebarItem.propTypes = {
// //   darkMode: PropTypes.bool,
// //   selected: PropTypes.bool,
// //   icon: PropTypes.string,
// //   text: PropTypes.string,
// // };
