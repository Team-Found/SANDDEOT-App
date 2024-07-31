/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  darkMode: boolean;
  selected: boolean;
  className: any;
  iconClassName: any;
  icon: string;
  divClassName: any;
  text: string;
}

export const SidebarItem = ({
  darkMode,
  selected,
  className,
  iconClassName,
  icon = "/img/icon-11.svg",
  divClassName,
  text = "Desktop",
}: Props): JSX.Element => {
  return (
    <div
      className={`w-[236px] flex items-center gap-2 rounded-md relative ${darkMode ? "p-1.5" : "px-2 py-1.5"} ${
        selected ? "bg-[#c9c9c899]" : ""
      } ${className}`}
    >
      <img className={`w-4 h-4 relative ${iconClassName}`} alt="Icon" src={darkMode ? icon : "/img/icon-9.svg"} />
      <div
        className={`[font-family:'SF_Pro_Display-Medium',Helvetica] w-fit mt-[-1.00px] tracking-[0.08px] text-sm font-medium leading-[normal] relative ${
          darkMode ? "text-[#dfdedf]" : "text-[#434343]"
        } ${divClassName}`}
      >
        {text}
      </div>
    </div>
  );
};

SidebarItem.propTypes = {
  darkMode: PropTypes.bool,
  selected: PropTypes.bool,
  icon: PropTypes.string,
  text: PropTypes.string,
};
