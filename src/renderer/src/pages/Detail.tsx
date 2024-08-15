import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import summation from "@assets/img/Chat/summation.svg";
import equipment from "@assets/img/Chat/equipment.svg";
import question from "@assets/img/Chat/question.svg";
import send from "@assets/img/Chat/send.svg";

export const Chat = (): JSX.Element => {
  return (
    <div className="flex flex-col border-l-[1px]">
      <div className="w-96 h-full pl-4 pr-3.5 py-5 border-b border-PrimaryBorder flex-col justify-start items-start inline-flex">
        <div className="self-stretch h-full flex-col justify-center items-start flex">
          <div className="justify-start items-center inline-flex">
            <img src={summation} alt="요약" />
            <div className="text-white text-xl font-semibold font-['Inter'] leading-normal">
              요약
            </div>
          </div>
        </div>
        <div className="self-stretch pl-1 pr-1.5 py-1.5 rounded shadow-inner justify-center items-center gap-2.5 inline-flex">
          <div className="grow shrink basis-0 self-stretch text-toolSecondary text-sm font-normal font-['Pretendard Variable'] leading-none">
            Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </div>
        </div>
      </div>
      <div className="w-96 h-full pl-4 pr-3.5 py-5 border-b border-PrimaryBorder flex-col justify-start items-start gap-2 inline-flex">
        <div className="self-stretch h-full flex-col justify-start items-start gap-2 flex">
          <div className="justify-start items-start gap-2 inline-flex">
            <img src={equipment} alt="도구" />
            <div className="text-white text-xl font-semibold font-['Inter'] leading-normal">
              도구
            </div>
          </div>
          <div className="w-96 grow shrink basis-0 justify-center items-center inline-flex">
            <div className="w-80 text-toolSecondary text-sm font-normal font-['Pretendard Variable'] leading-none">
              형태소 하이라이팅
            </div>
          </div>
          <div className="w-96 grow shrink basis-0 justify-center items-center inline-flex">
            <div className="w-80 text-toolSecondary text-sm font-normal font-['Pretendard Variable'] leading-none">
              AI마크다운화
            </div>
          </div>
        </div>
      </div>
      <div className="w-96 h-full pl-4 pr-3.5 py-5 flex-col justify-start items-start gap-2 inline-flex">
        <div className="self-stretch h-full flex-col justify-start items-start gap-2 flex">
          <div className="justify-start items-start gap-2 inline-flex">
            <img src={question} alt="도구" />
            <div className="text-white text-xl font-semibold font-['Inter'] leading-normal">
              도구
            </div>
          </div>
          <div className="w-full h-8 px-2 py-2 bg-zinc-500 rounded-lg justify-start items-center gap-2.5 inline-flex">
            <div className="text-stone-950 text-sm font-normal font-['Pretendard Variable'] leading-none">
              남자의 음식을 탐내는 이준호 • 10줄
            </div>
          </div>
          <div className="w-full max-h-64 h-full overflow-y-auto">
            <div className="pl-1 justify-start items-start gap-1 inline-flex">
              <div className="text-toolSecondary text-sm font-extrabold font-['Pretendard Variable'] leading-7">
                Q.
              </div>
              <div className="grow shrink basis-0 pl-1 pr-1.5 py-1.5 rounded shadow-inner justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 self-stretch text-toolSecondary text-sm font-normal font-['Pretendard Variable'] leading-none">
                  Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </div>
              </div>
            </div>
            <div className="pl-1 justify-start items-start gap-1 inline-flex">
              <div className="text-toolSecondary text-sm font-extrabold font-['Pretendard Variable'] leading-7">
                A.
              </div>
              <div className="grow shrink basis-0 pl-1 pr-1.5 py-1.5 rounded shadow-inner justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 self-stretch text-toolSecondary text-sm font-normal font-['Pretendard Variable'] leading-none">
                  Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </div>
              </div>
            </div>
            <div className="pl-1 justify-start items-start gap-1 inline-flex">
              <div className="text-toolSecondary text-sm font-extrabold font-['Pretendard Variable'] leading-7">
                Q.
              </div>
              <div className="grow shrink basis-0 pl-1 pr-1.5 py-1.5 rounded shadow-inner justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 self-stretch text-toolSecondary text-sm font-normal font-['Pretendard Variable'] leading-none">
                  Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </div>
              </div>
            </div>
            <div className="pl-1 justify-start items-start gap-1 inline-flex">
              <div className="text-toolSecondary text-sm font-extrabold font-['Pretendard Variable'] leading-7">
                A.
              </div>
              <div className="grow shrink basis-0 pl-1 pr-1.5 py-1.5 rounded shadow-inner justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 self-stretch text-toolSecondary text-sm font-normal font-['Pretendard Variable'] leading-none">
                  Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </div>
              </div>
            </div>
            <div className="pl-1 justify-start items-start gap-1 inline-flex">
              <div className="text-toolSecondary text-sm font-extrabold font-['Pretendard Variable'] leading-7">
                Q.
              </div>
              <div className="grow shrink basis-0 pl-1 pr-1.5 py-1.5 rounded shadow-inner justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 self-stretch text-toolSecondary text-sm font-normal font-['Pretendard Variable'] leading-none">
                  Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </div>
              </div>
            </div>
            <div className="pl-1 justify-start items-start gap-1 inline-flex">
              <div className="text-toolSecondary text-sm font-extrabold font-['Pretendard Variable'] leading-7">
                A.
              </div>
              <div className="grow shrink basis-0 pl-1 pr-1.5 py-1.5 rounded shadow-inner justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 self-stretch text-toolSecondary text-sm font-normal font-['Pretendard Variable'] leading-none">
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
              <div className="text-zinc-400 text-xs font-normal font-['Pretendard Variable'] leading-none">
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

export default function Detail(): JSX.Element {
  let { id } = useParams();
  const [article, setArticle] =
    useState<Awaited<ReturnType<typeof window.dbApi.article.detail>>>();

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const data = await window.dbApi.article.detail(Number(id));
        setArticle(data);
      } catch (error) {
        console.error("Error fetching article:", error);
      }
    };

    fetchArticle();
  }, [id]);

  return (
    <div className="flex">
      <div className="prose prose-basic dark:prose-invert ">
        <div>
          <h1>{article?.title}</h1>
        </div>
        {article?.body && (
          <div dangerouslySetInnerHTML={{ __html: article.body }} />
        )}
      </div>
      <Chat />
    </div>
  );
}
