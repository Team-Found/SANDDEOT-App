import summation from "@assets/img/Chat/summation.svg";
import { useEffect, useState } from "react";

interface SummaryProps {
  body: string;
  threadID: string;
  articleID: number;
}

export default function Summary({ body, threadID, articleID }: SummaryProps) {
  const [sum, setSum] = useState<string>("");

  useEffect(() => {
    window.api
      .sendQ(
        "asst_Kgk5NI2uhQhaJVUyyCJdyIVe",
        threadID,
        body,
        "2줄 요약해줘",
        null,
      )
      .then((item) => {
        setSum(item.messages.data[0].content[0].text.value);
        console.log(sum);
        return item.messages.data[0].thread_id;
      })
      .then((thread_ID) => {
        window.dbApi.article.threadUpdate(thread_ID, articleID);
      });
  }, []);

  //   "asst_Kgk5NI2uhQhaJVUyyCJdyIVe",
  //   null,
  //   "어느 한 남성이 잠을 자던 중 일어나 물을 마시고 돌아온다.",
  //   "그 중 가능성이 높은게 뭘까?",
  //   null,

  const extractSummary = (input: string): string | null => {
    const regex = /```json\s*\{\s*"summary"\s*:\s*"([^"]*)"\s*\}\s*```/;
    const match = input.match(regex);
    return match ? match[1] : null;
  };

  return (
    <div className="w-full pl-4 pr-3.5 py-5 border-b border-PrimaryBorder flex-col justify-start items-start inline-flex">
      <div className="self-stretch flex-col justify-center items-start flex">
        <div className="justify-start items-center inline-flex">
          <img src={summation} alt="요약" />
          <div className="text-white text-xl font-semibold leading-normal ml-1">
            요약
          </div>
        </div>
      </div>
      <div className="self-stretch rounded shadow-inner justify-center items-center gap-2.5 inline-flex">
        <div className="grow self-stretch text-toolSecondary text-sm font-normal leading-none text-[#A394A5]">
          {extractSummary(sum)}
        </div>
      </div>
    </div>
  );
}
