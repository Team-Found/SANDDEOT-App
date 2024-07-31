/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

// import PropTypes from 'prop-types'
// import React from 'react'

import filledStar from "@assets/img/star-1-3.svg";
import borderedStar from "@assets/img/star-1-4.svg";

interface Props {
  star?: boolean;
  text: string;
  text1: string;
}

export const TodayWord = ({
  star = false,
  text = "example",
  text1 = "예시 단어 설명",
}: Props): JSX.Element => {
  return (
    <div className="inline-flex items-start gap-2.5 p-4 rounded-[20px] justify-center bg-variable-collection-secondarybg">
      <div>
        <div className="w-28 flex items-start gap-2.5 justify-center ">
          <div className="[font-family:Helvetica] [display:-webkit-box] text-base [-webkit-line-clamp:2] flex-1 text-white font-bold leading-[normal] [-webkit-box-orient:vertical] text-ellipsis ">
            {text}
          </div>
        </div>
        <p className="[font-family:Helvetica] text-sm top-[19px] text-white font-normal leading-[normal] whitespace-nowrap ">
          {text1}
        </p>
      </div>
      <img
        className="w-3.5 h-3.5"
        alt="Star"
        src={star ? filledStar : borderedStar}
      />
    </div>
  );
};

// TodayWord.propTypes = {
//   prop: PropTypes.oneOf(['two', 'one']),
//   text: PropTypes.string,
//   text1: PropTypes.string,
//   star: PropTypes.string,
//   img: PropTypes.string
// }
