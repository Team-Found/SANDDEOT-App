import summation from "@assets/img/Chat/summation.svg";
import equipment from "@assets/img/Chat/equipment.svg";
import question from "@assets/img/Chat/question.svg";
import send from "@assets/img/Chat/send.svg";
import React from "react";

interface ChatProps {
  setCutOff: React.Dispatch<React.SetStateAction<number>>;
  cutOff: number;
}

export const Chat: React.FC<ChatProps> = ({ setCutOff, cutOff }) => {
  return (
    <div className="flex flex-col border-l-[1px] max-w-96 h-full">
      <div className="w-full pl-4 pr-3.5 py-5 border-b border-PrimaryBorder flex-col justify-start items-start inline-flex">
        <div className="self-stretch flex-col justify-center items-start flex">
          <div className="justify-start items-center inline-flex">
            <img src={summation} alt="요약" />
            <div className="text-white text-xl font-semibold leading-normal">
              요약
            </div>
          </div>
        </div>
        <div className="self-stretch pl-1 pr-1.5 py-1.5 rounded shadow-inner justify-center items-center gap-2.5 inline-flex">
          <div className="grow self-stretch text-toolSecondary text-sm font-normal leading-none">
            Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </div>
        </div>
      </div>
      <div className="w-full pl-4 pr-3.5 py-5 border-b border-PrimaryBorder flex-col justify-start items-start gap-2 inline-flex">
        <div className="self-stretch flex-col justify-start items-start gap-2 flex">
          <div className="justify-start items-start gap-2 inline-flex">
            <img src={equipment} alt="도구" />
            <div className="text-white text-xl font-semibold leading-normal">
              도구
            </div>
          </div>
          <div className="w-full justify-center items-center inline-flex">
            <div className="w-full text-toolSecondary text-sm font-normal leading-none">
              형태소 하이라이팅
              <input
                type="range"
                min="0"
                max="0.6"
                step="0.05"
                value={cutOff}
                onChange={(e) => setCutOff(parseFloat(e.target.value))}
              />
            </div>
          </div>
          <div className="w-full shrink justify-center items-center inline-flex">
            <div className="w-full text-toolSecondary text-sm font-normal leading-none">
              AI마크다운화
            </div>
          </div>
        </div>
      </div>
      <div className="w-full pl-4 pr-3.5 py-5 flex-col justify-start items-start gap-2 inline-flex">
        <div className="self-stretch flex-col justify-start items-start gap-2 flex">
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
          <div className="w-full max-h-64 overflow-y-auto">
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
