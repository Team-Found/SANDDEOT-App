import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { RssBlock } from "./RssBlock";
import search from "./search.svg";
import ReactDOM from "react-dom";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

function PromptModal({
  RSSBlockPropertyDefaultClassNameOverride,
}: {
  RSSBlockPropertyDefaultClassNameOverride: string;
}) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [inputValue, setInputValue] = useState("");

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <div onClick={openModal}>
        <RssBlock
          className={RSSBlockPropertyDefaultClassNameOverride}
          property1="variant-2"
        />
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <input
            type="text"
            placeholder="RSS Link"
            onChange={(e) => {
              setInputValue(e.target.value);
              console.log(inputValue);
            }}
          ></input>
        </div>
        <div className="flex justify-between">
          <button onClick={closeModal} className="bg-red-400">
            취소
          </button>
          <button onClick={closeModal} className="bg-green-400">
            확인
          </button>
        </div>
      </Modal>
    </div>
  );
}

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
  const [modal, setModal] = useState(false);
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
            <div>
              <PromptModal
                RSSBlockPropertyDefaultClassNameOverride={
                  RSSBlockPropertyDefaultClassNameOverride
                }
              />
            </div>
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
