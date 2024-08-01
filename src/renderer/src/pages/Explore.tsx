// import { Bonmoon } from "./Bonmoon";
import Banner from "@components/Explore/Banner";
export default function Explore(): JSX.Element {
  return (
    <>
      <div className="flex flex-col w-full items-start gap-2 flex-[0_0_auto]">
        <div className="self-stretch [font-family:'Pretendard_Variable-Bold',Helvetica] font-bold text-white text-2xl mt-[-1.00px] tracking-[0] leading-[normal]">
          탐색하기
        </div>
        <div className="flex items-start gap-1.5 self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-center gap-2.5 p-2.5 flex-1 grow bg-[#1b1918] rounded-[10px]">
            <div className="w-fit [font-family:'Pretendard_Variable-Regular',Helvetica] font-normal text-[#5c544f] text-xs whitespace-nowrap mt-[-1.00px] tracking-[0] leading-[normal]">
              원하는 주제의 본문을 찾아보세요
            </div>
          </div>
        </div>
        <div className="w-[216px] h-[30px] bg-variable-collection-secondarybg rounded-[58px]">
          <div className="relative w-[178px] h-[30px]">
            <div className="absolute w-[39px] h-[30px] top-0 left-[88px] bg-white" />
            <div className="flex w-[178px] items-center gap-2.5 absolute top-0 left-0">
              <div className="inline-flex flex-col items-center justify-center gap-2.5 px-2.5 py-2 relative flex-[0_0_auto] rounded-full">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'Pretendard-Medium',Helvetica] font-medium text-white text-xs tracking-[0] leading-[normal]">
                  1
                </div>
              </div>
              <div className="inline-flex flex-col items-center justify-center gap-2.5 px-2.5 py-2 relative flex-[0_0_auto] rounded-full">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'Pretendard-Medium',Helvetica] font-medium text-white text-xs tracking-[0] leading-[normal]">
                  2
                </div>
              </div>
              <div className="inline-flex flex-col items-center justify-center gap-2.5 px-2.5 py-2 relative flex-[0_0_auto] bg-white rounded-full">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'Pretendard-Medium',Helvetica] font-medium text-[#141211] text-xs tracking-[0] leading-[normal]">
                  3
                </div>
              </div>
              <div className="inline-flex flex-col items-center justify-center gap-2.5 px-2.5 py-2 relative flex-[0_0_auto] bg-white rounded-full">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'Pretendard-Medium',Helvetica] font-medium text-[#141211] text-xs tracking-[0] leading-[normal]">
                  4
                </div>
              </div>
              <div className="inline-flex flex-col items-center justify-center gap-2.5 px-2.5 py-2 relative flex-[0_0_auto] rounded-full">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'Pretendard-Medium',Helvetica] font-medium text-white text-xs tracking-[0] leading-[normal]">
                  5
                </div>
              </div>
              <div className="inline-flex flex-col items-center justify-center gap-2.5 px-2.5 py-2 relative flex-[0_0_auto] mr-[-38.00px] rounded-full">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'Pretendard-Medium',Helvetica] font-medium text-white text-xs tracking-[0] leading-[normal]">
                  6
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[508px] items-start gap-4 flex-[0_0_auto]">
        <Banner />
        {/* <Bonmoon
            articleMainImage="article-main-image-2.png"
            className="!self-stretch !w-full"
          /> */}
      </div>
    </>
  );
}
