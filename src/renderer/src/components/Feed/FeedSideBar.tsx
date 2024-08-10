import PropTypes from "prop-types";
import React, { useState } from "react";
import { RssBlock } from "./RssBlock";
import search from "./search.svg";

export const PromptModal: React.FC = () => {
  const [isInputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleButtonClick = () => {
    setInputVisible(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    alert(`You entered: ${inputValue}`);
    setInputVisible(false); // Hide input after submission
    setInputValue(""); // Clear input field
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        onClick={handleButtonClick}
      >
        Click me to enter a value
      </button>

      {isInputVisible && (
        <div className="mt-4">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter something..."
          />
          <button
            className="ml-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

interface Props {
  search: string;
  RSSBlockPropertyDefaultClassName: any;
  RSSBlockPropertyDefaultClassNameOverride: any;
  RSSBlockPropertyClassName: any;
  RSSBlockFrameClassName: any;
  RSSBlockPropertyClassNameOverride: any;
  RSSBlockFrameClassNameOverride: any;
  RSSBlockPropertyVariantClassName: any;
  RSSBlockPropertyVariantClassNameOverride: any;
}

const FrameWrapper = ({
  RSSBlockPropertyDefaultClassName,
  RSSBlockPropertyDefaultClassNameOverride,
  RSSBlockPropertyClassName,
  RSSBlockFrameClassName,
  RSSBlockPropertyClassNameOverride,
  RSSBlockFrameClassNameOverride,
  RSSBlockPropertyVariantClassName,
  RSSBlockPropertyVariantClassNameOverride,
}: Props): JSX.Element => {
  return (
    <div className="flex flex-col w-[295px] h-[810px] items-start gap-[17px] pt-2 pb-[45px] px-0 relative">
      <div className="flex items-center gap-3.5 px-3 relative self-stretch w-full flex-[0_0_auto] rounded-2xl overflow-hidden border border-solid border-variable-collection-primaryborder">
        <label htmlFor="input1">
          <img className="relative w-4 h-10" alt="Search" src={search} />
        </label>
        <input
          type="text"
          placeholder="Search"
          className="w-[295px] h-6 bg-transparent focus:outline-none"
          id="input1"
        ></input>
        <div className="relative w-fit mt-[-1.00px] [font-family:'Pretendard_Variable-Regular',Helvetica] font-normal text-[#cbcbcb] text-sm tracking-[0] leading-[normal]"></div>
      </div>
      <div className="flex flex-col items-start gap-[30px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative self-stretch mt-[-1.00px] [font-family:'Pretendard_Variable-Bold',Helvetica] font-bold text-variable-collection-primarytext text-base tracking-[0] leading-[normal]">
            구독한 RSS
          </div>
          <div className="flex flex-col items-start gap-px relative self-stretch w-full flex-[0_0_auto]">
            <RssBlock
              blogTitle="Obtuse의 테크 블로그"
              className={RSSBlockPropertyDefaultClassName}
              divClassName="!text-variable-collection-primarytext"
              followProperty1="variant-2"
              property1="default"
            />
            <RssBlock
              className={RSSBlockPropertyDefaultClassNameOverride}
              property1="variant-2"
            />
          </div>
        </div>
        <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative self-stretch mt-[-1.00px] [font-family:'Pretendard_Variable-Bold',Helvetica] font-bold text-variable-collection-primarytext text-base tracking-[0] leading-[normal]">
            이런 RSS는 어때요?
          </div>
          <div className="flex flex-col items-start gap-px relative self-stretch w-full flex-[0_0_auto]">
            <RssBlock
              blogTitle="Apple"
              className={RSSBlockPropertyClassName}
              divClassName="!text-variable-collection-primarytext"
              followProperty1="default"
              frameClassName={RSSBlockFrameClassName}
              property1="default"
            />
            <RssBlock
              blogTitle="Github Blog"
              className={RSSBlockPropertyClassNameOverride}
              divClassName="!text-variable-collection-primarytext"
              followProperty1="default"
              frameClassName={RSSBlockFrameClassNameOverride}
              property1="default"
            />
            <RssBlock
              blogTitle="Billboard"
              className={RSSBlockPropertyVariantClassName}
              divClassName="!text-variable-collection-primarytext"
              followProperty1="default"
              frameClassName="bg-[url(/static/img/frame-60-3.png)]"
              property1="default"
            />
            <RssBlock
              blogTitle="Fox News"
              className={RSSBlockPropertyVariantClassNameOverride}
              divClassName="!text-variable-collection-primarytext"
              followProperty1="default"
              frameClassName="bg-[url(/static/img/frame-60-4.png)]"
              property1="default"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameWrapper;
