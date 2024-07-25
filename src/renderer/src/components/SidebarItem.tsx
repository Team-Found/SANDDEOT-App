/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

// import PropTypes from "prop-types";
// import React from "react";

interface Props {
  darkMode: boolean;
  selected?: boolean;
  icon: string;
  text: string;
}

export const SidebarItem = ({
  darkMode,
  selected = false,
  icon = "/img/icon-11.svg",
  text = "Desktop",
}: Props): JSX.Element => {
  return (
    <div
      className={`flex items-center gap-2 rounded-md relative p-1.5 ${
        selected ? "bg-[#c9c9c83d]" : ""
      } !self-stretch !flex-[0_0_auto] w-full`}
    >
      <img
        className={`relative h-[14px] w-[14px]`}
        alt="Icon"
        src={darkMode ? icon : "/img/icon-9.svg"}
      />
      <div
        className={`[font-family:'SF_Pro_Display-Medium',Helvetica] w-fit mt-[-1.00px] tracking-[0.08px] text-sm font-medium leading-[normal] relative ${
          darkMode ? "text-[#dfdedf]" : "text-[#434343]"
        } !mt-[-0.85px] !tracking-[0.07px]`}
      >
        {text}
      </div>
    </div>
  );
};

// SidebarItem.propTypes = {
//   darkMode: PropTypes.bool,
//   selected: PropTypes.bool,
//   icon: PropTypes.string,
//   text: PropTypes.string,
// };
