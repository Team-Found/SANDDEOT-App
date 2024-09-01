import summation from "@assets/img/Chat/summation.svg";

interface SummaryProps {
  content: string;
}

export default function Summary({ content }: SummaryProps) {
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
          {content}
        </div>
      </div>
    </div>
  );
}
