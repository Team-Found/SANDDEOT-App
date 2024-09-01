import React, { useState } from "react";
import equipment from "@assets/img/Chat/equipment.svg";
import question from "@assets/img/Chat/question.svg";
import send from "@assets/img/Chat/send.svg";
import { Slider } from "@/components/ui/slider";
import Summary from "./control/Summary.tsx";
import Chat from "./control/Chat.js";

interface ControlsProps {
  highlightPercentage: number;
  setHighlightPercentage: React.Dispatch<React.SetStateAction<number>>;
  focus: boolean;
  setFocus: React.Dispatch<React.SetStateAction<boolean>>;
  showControls: boolean;
  setShowControls: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Controls: React.FC<ControlsProps> = ({
  highlightPercentage,
  setHighlightPercentage,
  focus,
  setFocus,
  showControls,
  setShowControls,
}) => {
  const [sidebarWidth, setSidebarWidth] = useState(300); // 초기 사이드바 너비
  const [isCollapsed, setIsCollapsed] = useState(false); // 사이드바 최소화 여부

  const minWidthToCollapse = 100; // 이 너비 이하로 줄어들면 사이드바 최소화
  const collapsedWidth = 30; // 최소화된 사이드바의 너비

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    const startX = e.clientX;
    const startWidth = sidebarWidth;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const newWidth = startWidth - (moveEvent.clientX - startX);

      if (newWidth <= minWidthToCollapse) {
        setIsCollapsed(true);
        setSidebarWidth(collapsedWidth);
      } else {
        setIsCollapsed(false);
        setSidebarWidth(newWidth);
      }
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleToggleSidebar = () => {
    if (isCollapsed) {
      setSidebarWidth(300); // 확장 시 기본 너비
    }
    setIsCollapsed(!isCollapsed);
  };

  const [questionText, setQuestionText] = useState(null);
  const [chatList, setChatList] = useState([]);
  return (
    <div className="flex h-full dark:bg-[#0F0E0D]">
      {isCollapsed ? (
        <div
          className="h-full w-0 bg-gray-800 flex justify-center items-center cursor-pointer"
          onClick={handleToggleSidebar}
        >
          <div className="text-gray-600 top-10 right-6 absolute text-4xl">
            ☰
          </div>
        </div>
      ) : (
        <>
          <div
            className="h-full cursor-ew-resize border-r-[1px] border-[#252525]"
            onMouseDown={handleMouseDown}
            style={{ width: "5px", cursor: "ew-resize" }}
          />
          <div
            className="flex flex-col border-r-[1px] h-full box-border relative"
            style={{ width: sidebarWidth }}
          >
            <button
              onClick={handleToggleSidebar}
              className="absolute top-1 right-3 text-gray-600 text-4xl"
            >
              ☰
            </button>
            <Summary content="adsf" />
            <div className="w-full pl-4 pr-3.5 py-5 border-b border-PrimaryBorder h-fit box-border">
              <div className="justify-start items-start gap-2 flex">
                <img src={equipment} alt="도구" />
                <div className="text-white text-xl font-semibold leading-normal">
                  도구
                </div>
              </div>
              <div className="flex flex-col gap-2 py-2">
                <div className="w-full text-toolSecondary text-sm font-normal leading-none flex flex-col">
                  <div className="flex justify-between text-[#A394A5]">
                    중요 문장 하이라이팅
                    <label className="inline-flex relative items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={showControls}
                        onChange={() => setShowControls(!showControls)}
                        className="sr-only peer"
                      />
                      <div className="w-8 h-4 rounded-full peer peer-focus:ring-4 peer-focus:ring-[#974EAF00] dark:peer-focus:ring-[#974EAF00] dark:bg-[#271D27] peer-checked:after:translate-x-4 peer-checked:after:border-[#] after:content-[''] after:absolute after:top-[2px] after:left-[2px]  after:bg-[#FCF1FF] after:border-[#FCF1FF] after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-[#974EAF]"></div>
                    </label>
                  </div>
                  {showControls && (
                    <div>
                      <div className="my-2">
                        <Slider
                          min={0}
                          max={99}
                          defaultValue={[highlightPercentage]}
                          onValueChange={(value) =>
                            setHighlightPercentage(Number(value[0]))
                          }
                          className="w-full"
                        />
                      </div>
                      <span className="pt-2 text-xs">
                        {highlightPercentage}%
                      </span>
                    </div>
                  )}
                </div>
                <div className="w-full justify-center items-center inline-flex">
                  <div className="w-full text-toolSecondary text-sm font-normal leading-none text-[#A394A5]">
                    집중 모드
                  </div>
                  <label className="inline-flex relative items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={focus}
                      onChange={() => setFocus(!focus)}
                      className="sr-only peer"
                    />
                    <div className="w-8 h-4 rounded-full peer peer-focus:ring-4 peer-focus:ring-[#974EAF00] dark:peer-focus:ring-[#974EAF00] dark:bg-[#271D27] peer-checked:after:translate-x-4 peer-checked:after:border-[#] after:content-[''] after:absolute after:top-[2px] after:left-[2px]  after:bg-[#FCF1FF] after:border-[#FCF1FF] after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-[#974EAF]"></div>
                  </label>
                </div>
              </div>
            </div>
            <div className="w-full pl-4 pr-3.5 py-5 flex-col justify-start items-start gap-2 inline-flex h-full box-border">
              <div className="self-stretch flex-col justify-start items-start gap-2 flex h-full">
                <div className="justify-start items-start gap-2 inline-flex">
                  <img src={question} alt="AI" />
                  <div className="text-xl font-semibold leading-none">질문</div>
                </div>
                <div className="w-full h-full overflow-y-auto flex flex-col">
                  {chatList.map((chat, index) => (
                    <Chat content={chat} kind={!(index % 2)} />
                  ))}
                </div>
                <div className="w-full h-8 p-2 bg-zinc-800 rounded-3xl shadow-inner justify-between items-center inline-flex text-[#A394A5] ">
                  <input
                    type="text"
                    placeholder="궁금한 점을 물어보세요"
                    className="w-full h-3.5 bg-zinc-800 text-[#A394A5] text-xs font-normal leading-none outline-none placeholder:text-[#A394A5]"
                    value={questionText}
                    onInput={(e) => {
                      setQuestionText(e.target.value);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        console.log(questionText);
                        const updatedChatList = [...chatList, questionText];
                        setChatList(updatedChatList);
                        setQuestionText("");
                      }
                    }}
                  />
                  <img src={send} alt="전송" />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
