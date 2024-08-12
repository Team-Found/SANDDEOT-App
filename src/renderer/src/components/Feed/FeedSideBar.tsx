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

function PromptModal() {
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
    <>
      <div onClick={openModal} className="w-full">
        <RssBlock property1="variant-2" />
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
    </>
  );
}

const FrameWrapper = (): JSX.Element => {
  const [modal, setModal] = useState(false);
  return (
    <div className="flex flex-col w-[295px] h-[810px] items-start gap-[17px] pt-2 pb-[45px] px-0 border-l-[1px] border-primaryBd">
      <div className="px-4 w-full box-border">
        <div className="flex items-center gap-3.5 px-3 mt-2 self-stretch w-full flex-[0_0_auto] rounded-2xl overflow-hidden border border-solid border-variable-collection-primaryborder">
          <label htmlFor="input1">
            <img className="w-9 h-9" alt="Search" src={search} />
          </label>
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-transparent focus:outline-none"
            id="input1"
          ></input>
          <div className="w-full mt-[-1.00px] [font-family:'Pretendard_Variable-Regular',Helvetica] font-normal text-[#cbcbcb] text-sm tracking-[0] leading-[normal]"></div>
        </div>
        <div className="flex flex-col items-start gap-[30px] self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-2.5 self-stretch w-full flex-[0_0_auto]">
            <div className="self-stretch mt-[-1.00px] [font-family:'Pretendard_Variable-Bold',Helvetica] font-bold text-variable-collection-primarytext text-base tracking-[0] leading-[normal] pt-5">
              구독한 RSS
            </div>
            <div className="flex flex-col items-start gap-0 self-stretch w-full flex-[0_0_auto] box-border">
              <RssBlock
                blogTitle="Obtuse의 테크 블로그"
                // divClassName="!text-variable-collection-primarytext"
                followProperty1="variant-2"
                property1="default"
              />
              <PromptModal />
            </div>
          </div>
          <div className="flex flex-col items-start gap-2.5 self-stretch w-full flex-[0_0_auto]">
            <div className="w-full self-stretch mt-[-1.00px] [font-family:'Pretendard_Variable-Bold',Helvetica] font-bold text-variable-collection-primarytext text-base tracking-[0] leading-[normal]">
              이런 RSS는 어때요?
            </div>
            <div className="flex flex-col items-start gap-[-3px] self-stretch w-full flex-[0_0_auto]">
              <RssBlock
                blogTitle="Apple"
                followProperty1="default"
                property1="default"
              />
              <RssBlock
                blogTitle="Github Blog"
                followProperty1="default"
                property1="default"
              />
              <RssBlock
                blogTitle="Billboard"
                followProperty1="default"
                property1="default"
              />
              <RssBlock
                blogTitle="Fox News"
                followProperty1="default"
                property1="default"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameWrapper;
