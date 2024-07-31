/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

// import * as React from "react"

// import PropTypes from 'prop-types'
// import React from 'react'
import dictionary from "@assets/img/dictionary.svg";
import centerFocusWeak from "@assets/img/center_focus_weak.svg";
import extension from "@assets/img/extension.svg";

interface Props {
  property1?: "variant-4" | "variant-2" | "variant-3" | "default";
  dictionary?: string;
  img?: string;
  centerFocusWeak?: string;
  extension?: string;
}

export const NewProjectBtn = ({
  property1 = "default",
}: Props): JSX.Element => {
  return (
    <div className="w-[88px] flex flex-col items-center gap-[5px] pt-2.5 pb-2 px-[19px] h-[88px] rounded-[20px] justify-center bg-variable-collection-secondarybg">
      <img
        className="w-12 h-12"
        alt="Dictionary"
        src={
          property1 === "variant-3"
            ? centerFocusWeak
            : property1 === "variant-4"
              ? extension
              : dictionary
        }
      />
      <div
        className={`[font-family:Helvetica] w-fit tracking-[0] text-sm font-bold leading-[normal] ${
          property1 === "variant-4" ? "text-center" : ""
        } ${
          property1 === "variant-2"
            ? "text-variable-collection-green60"
            : property1 === "variant-3"
              ? "text-variable-collection-orange60"
              : property1 === "variant-4"
                ? "text-variable-collection-red60"
                : "text-variable-collection-blue60"
        }`}
      >
        {property1 === "default" && <>본문탐색</>}

        {property1 === "variant-2" && <>본문추천</>}

        {property1 === "variant-3" && <>OCR</>}

        {property1 === "variant-4" && <>확장</>}
      </div>
    </div>
  );
};

// NewProjectBtn.propTypes = {
//   property1: PropTypes.oneOf(['variant-4', 'variant-2', 'variant-3', 'default']),
//   dictionary: PropTypes.string,
//   img: PropTypes.string,
//   centerFocusWeak: PropTypes.string,
//   extension: PropTypes.string
// }
