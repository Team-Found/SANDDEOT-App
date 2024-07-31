/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from 'prop-types';
import React from 'react';

interface Props {
  prop?: 'two' | 'one';
  className?: any;
  groupClassName?: any;
  text?: string;
  text1?: string;
  starClassName?: any;
  star?: string;
  img?: string;
}

export const TodayWord = ({
  prop,
  className,
  groupClassName,
  text = 'Obtuse.kr',
  text1 = '(명) 풍기물란 사이트 따위를 통틀어 일컫는 말',
  starClassName,
  star = '/img/star-1-3.svg',
  img = '/img/star-1-4.svg',
}: Props): JSX.Element => {
  return (
    <div
      className={`inline-flex items-start gap-2.5 p-4 overflow-hidden rounded-[20px] justify-center bg-[#1b1918] relative ${className}`}
    >
      <div className={`w-[215px] h-[33px] relative ${groupClassName}`}>
        <div className="w-28 flex left-0 items-start top-0 gap-2.5 justify-center absolute">
          <div className="[font-family:'Pretendard_Variable-Bold',Helvetica] [display:-webkit-box] mt-[-1.00px] tracking-[0] text-base [-webkit-line-clamp:2] flex-1 text-white font-bold overflow-hidden leading-[normal] [-webkit-box-orient:vertical] text-ellipsis relative">
            {text}
          </div>
        </div>
        <p className="[font-family:'Pretendard_Variable-Regular',Helvetica] left-0 tracking-[0] text-xs top-[19px] text-white font-normal leading-[normal] whitespace-nowrap absolute">
          {text1}
        </p>
      </div>
      <img
        className={`w-[13.69px] h-[13.09px] relative ${starClassName}`}
        alt="Star"
        src={prop === 'two' ? img : star}
      />
    </div>
  );
};

TodayWord.propTypes = {
  prop: PropTypes.oneOf(['two', 'one']),
  text: PropTypes.string,
  text1: PropTypes.string,
  star: PropTypes.string,
  img: PropTypes.string,
};
