import { Sidebaritemicon1 } from "@assets/img/Sidebaritemicon1";
import { Sidebaritemicon5 } from "@assets/img/Sidebaritemicon5";
import { SidebarItem } from "./SidebarItem";
import logoImg from "@assets/img/logo.svg";
import textImg from "@assets/img/logoText.svg";
import Editor from "@assets/img/NewStart/1.svg";
import OCR from "@assets/img/NewStart/2.svg";
import Extension from "@assets/img/NewStart/3.svg";
import setSvg from "@assets/img/set.svg";
import React, { useState } from "react";
import "@assets/hover.css";
import Modal from "react-modal";
import { Link } from "react-router-dom";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "var(--variable-collection-primarybg)",
    border: "solid 1px var(--variable-collection-primaryBd)",
    borderRadius: "22px",
    padding: "10px",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

function Dropdown(): void {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal(): void {
    setIsOpen(true);
  }

  function afterOpenModal(): void {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal(): void {
    setIsOpen(false);
  }
  return (
    <div className="w-full">
      <div
        onClick={openModal}
        className="newStartBtn flex items-center justify-center px-[50px] py-[13px] relative self-stretch w-full flex-[0_0_auto] bg-variable-collection-priamry rounded-[78px] overflow-hidden cursor-pointer"
      >
        <div className="w-fit mt-[-1.00px] [font-family:'Pretendard_Variable-Bold',Helvetica] font-bold text-white text-xs whitespace-nowrap relative tracking-[0] leading-[normal]">
          시작하기
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="flex justify-between px-2">
          <h2 className="px-1">시작하기</h2>
          <h2 onClick={closeModal} className="cursor-pointer">
            ✕
          </h2>
        </div>

        <div className="flex justify-between">
          <div onClick={closeModal} className="newStart p-2 cursor-pointer">
            <Link to="/editor">
              <img src={Editor} alt="에디터" />
            </Link>
          </div>
          <div onClick={closeModal} className="newStart p-2 cursor-pointer">
            <Link to="/ocr">
              <img src={OCR} alt="OCR" />
            </Link>
          </div>
          <div onClick={closeModal} className="newStart p-2 cursor-pointer">
            <Link to="/">
              <img src={Extension} alt="확장" />
            </Link>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export const Sidebar = (): JSX.Element => {
  // const [isDropdownView, setDropdownView] = useState(false);
  return (
    <div className="flex flex-col w-[200px] h-[calc(100vh-2.25rem)] items-start pt-2 pb-0 px-[11px] relative bg-variable-collection-primarybg border-r [border-right-style:solid] border-variable-collection-primaryborder">
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
            className="!self-stretch !flex-[0_0_auto] sideBar"
            icon={<Sidebaritemicon5 />}
            sidebarTitle="홈"
            link="/"
            link2="/following"
          />
          <SidebarItem
            className="!self-stretch !flex-[0_0_auto] sideBar"
            icon={<Sidebaritemicon1 />}
            sidebarTitle="저장됨"
            link="/saved"
            link2="/mine"
          />
        </div>
        <Dropdown />
      </div>
      <div className="flex flex-col items-start justify-center gap-2.5 px-0 py-[19px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex items-center gap-2.5 p-2 relative self-stretch w-full flex-[0_0_auto] rounded-[11px]">
          <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
            <div className="flex items-center justify-center gap-2.5 px-[5px] py-0.5 relative">
              <img alt="Settings" src={setSvg} />
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
