import summation from "@assets/img/Chat/summation.svg";
import equipment from "@assets/img/Chat/equipment.svg";
import question from "@assets/img/Chat/question.svg";
import send from "@assets/img/Chat/send.svg";
import React from "react";
import { Slider } from "@/components/ui/slider";

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
  const handleControlToggle = () => {
    setShowControls(!showControls);
  };

  const handleFocusToggle = () => {
    setFocus((prevFocus) => !prevFocus);
  };

  return (
    <div className="flex flex-col border-l-[1px] w-[500px] h-full box-border">
      <div className="w-full pl-4 pr-3.5 py-5 border-b border-PrimaryBorder flex-col justify-start items-start inline-flex h-fit box-border">
        <div className="self-stretch flex-col justify-center items-start flex">
          <div className="justify-start items-center inline-flex">
            <img src={summation} alt="요약" />
            <div className="text-white text-xl font-semibold leading-normal">
              요약
            </div>
          </div>
        </div>
        <div className="self-stretch pl-1 pr-1.5 rounded shadow-inner justify-center items-center gap-2.5 inline-flex">
          <div className="grow self-stretch text-toolSecondary text-sm font-normal leading-none">
            Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </div>
        </div>
      </div>
      <div className="w-full pl-4 pr-3.5 py-5 border-b border-PrimaryBorder h-fit box-border">
        <div className="justify-start items-start gap-2 flex">
          <img src={equipment} alt="도구" />
          <div className="text-white text-xl font-semibold leading-normal">
            도구
          </div>
        </div>
        <div className="flex flex-col gap-2 py-2">
          <div className="w-full text-toolSecondary text-sm font-normal leading-none flex flex-col">
            <div className="flex justify-between">
              중요 문장 하이라이팅
              <label className="inline-flex relative items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={showControls}
                  onChange={handleControlToggle}
                  className="sr-only peer"
                />
                <div className="w-8 h-4 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-[#974EAF00] dark:peer-focus:ring-[#974EAF00] dark:bg-gray-700 peer-checked:after:translate-x-4 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-[#974EAF]"></div>
              </label>
            </div>
            {showControls && (
              <div>
                <div className="my-2">
                  <Slider
                    min={0}
                    max={100}
                    defaultValue={[highlightPercentage]}
                    onValueChange={(value) =>
                      setHighlightPercentage(Number(value[0]))
                    }
                    className="w-full"
                  />
                  {/* <input
                        type="range"
                        min="0"
                        max="100"
                        value={highlightPercentage}
                        onChange={(e) =>
                          setHighlightPercentage(Number(e.target.value))
                        }
                        className="w-full accent-[#974EAF]"
                      /> */}
                </div>
                <span className="pt-2 text-xs">{highlightPercentage}%</span>
              </div>
            )}
          </div>
          <div className="w-full justify-center items-center inline-flex">
            <div className="w-full text-toolSecondary text-sm font-normal leading-none">
              집중 모드
            </div>
            <label className="inline-flex relative items-center cursor-pointer">
              <input
                type="checkbox"
                checked={focus}
                onChange={handleFocusToggle}
                className="sr-only peer"
              />
              <div className="w-8 h-4 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-[#974EAF00] dark:peer-focus:ring-[#974EAF00] dark:bg-gray-700 peer-checked:after:translate-x-4 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-[#974EAF]"></div>
            </label>
          </div>
        </div>
      </div>
      <div className="w-full pl-4 pr-3.5 py-5 flex-col justify-start items-start gap-2 inline-flex h-full box-border">
        <div className="self-stretch flex-col justify-start items-start gap-2 flex h-full">
          <div className="justify-start items-start gap-2 inline-flex">
            <img src={question} alt="도구" />
            <div className="text-white text-xl font-semibold leading-normal">
              도구
            </div>
          </div>
          <div className="w-full h-8 px-2 py-2 bg-zinc-500 rounded-lg justify-start items-center gap-2.5 inline-flex">
            <div className="text-stone-950 text-sm font-normal leading-none">
              남자의 음식을 탐내는 이준호 • 10줄
            </div>
          </div>
          <div className="w-full h-full overflow-y-auto">
            <div className="pl-1 justify-start items-start gap-1 inline-flex">
              <div className="text-toolSecondary text-sm font-extrabold leading-7">
                Q.
              </div>
              <div className="grow shrink basis-0 pl-1 pr-1.5 py-1.5 rounded shadow-inner justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 self-stretch text-toolSecondary text-sm font-normal leading-none">
                  Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </div>
              </div>
            </div>
            <div className="pl-1 justify-start items-start gap-1 inline-flex">
              <div className="text-toolSecondary text-sm font-extrabold leading-7">
                A.
              </div>
              <div className="grow shrink basis-0 pl-1 pr-1.5 py-1.5 rounded shadow-inner justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 self-stretch text-toolSecondary text-sm font-normal leading-none">
                  Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </div>
              </div>
            </div>
            <div className="pl-1 justify-start items-start gap-1 inline-flex">
              <div className="text-toolSecondary text-sm font-extrabold leading-7">
                Q.
              </div>
              <div className="grow shrink basis-0 pl-1 pr-1.5 py-1.5 rounded shadow-inner justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 self-stretch text-toolSecondary text-sm font-normal leading-none">
                  Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </div>
              </div>
            </div>
            <div className="pl-1 justify-start items-start gap-1 inline-flex">
              <div className="text-toolSecondary text-sm font-extrabold leading-7">
                A.
              </div>
              <div className="grow shrink basis-0 pl-1 pr-1.5 py-1.5 rounded shadow-inner justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 self-stretch text-toolSecondary text-sm font-normal leading-none">
                  Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </div>
              </div>
            </div>
            <div className="pl-1 justify-start items-start gap-1 inline-flex">
              <div className="text-toolSecondary text-sm font-extrabold leading-7">
                Q.
              </div>
              <div className="grow shrink basis-0 pl-1 pr-1.5 py-1.5 rounded shadow-inner justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 self-stretch text-toolSecondary text-sm font-normal leading-none">
                  Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </div>
              </div>
            </div>
            <div className="pl-1 justify-start items-start gap-1 inline-flex">
              <div className="text-toolSecondary text-sm font-extrabold leading-7">
                A.
              </div>
              <div className="grow shrink basis-0 pl-1 pr-1.5 py-1.5 rounded shadow-inner justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 self-stretch text-toolSecondary text-sm font-normal leading-none">
                  Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-8 p-2 bg-zinc-800 rounded-3xl shadow-inner justify-between items-center inline-flex">
            <div className="grow shrink basis-0 h-3.5 justify-start items-center gap-0.5 flex">
              <div className="text-zinc-400 text-xs font-normal leading-none">
                궁금한 점을 물어보세요
              </div>
            </div>
            <img src={send} alt="전송" />
          </div>
        </div>
      </div>
    </div>
  );
};
