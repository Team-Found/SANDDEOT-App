import imgUrl from "@assets/img/article-main-image.png";
console.log(imgUrl);
import Tag from "./Tag";

export default function Banner(): JSX.Element {
  return (
    <div
      className={`w-[500px] h-[200px] bg-cover bg-[50%_50%] rounded-lg overflow-hidden relative`}
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      <div className="absolute w-[153px] h-full p-4 bg-black bg-opacity-80 ">
        <p className="self-stretch mt-[-0.42px] [font-family:'Rozha_One-Regular',Helvetica] font-normal text-white text-xl tracking-[-1.00px] leading-[18.0px]">
          Bot or not: Are fake accounts swaying voters towards Reform UK?
        </p>
        <p className="text-[8px] font-normal [font-family:'Pretendard_Variable-Regular',Helvetica] text-white leading-[7.20px]">
          By Marianna Spring, Disinformation and social media correspondent
        </p>
        <div className="absolute w-[121px] h-[17px] top-[168px] left-4" />
        <div className="inline-flex items-center gap-[2.54px] flex-[0_0_auto]">
          <Tag color="#f24baa">BBC</Tag>
          {/* <div className="#f24baa">
            <div className="w-fit mt-[-0.35px] [font-family:'Rozha_One-Regular',Helvetica] font-normal text-white text-[8px] tracking-[-0.40px] leading-[7.2px] whitespace-nowrap">
              BBC
            </div>
          </div> */}
          <div className="#08e292">
            <div className="w-fit mt-[-0.35px] [font-family:'Notable-Regular',Helvetica] font-normal text-white text-[6px] text-center tracking-[-0.30px] leading-[5.4px] whitespace-nowrap">
              Lv. 0
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// <div className="self-stretch w-full h-[222px] bg-white rounded-lg overflow-hidden">
//   <div className="w-[508px] h-[222px] bg-[url(/image.png)] bg-cover bg-[50%_50%]">
//     <div className="flex flex-col w-[153px] h-[222px] items-start gap-2.5 p-4 bg-[#00000033] backdrop-blur-2xl backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(40px)_brightness(100%)]">
//       <div className="absolute w-[100px] h-px top-4 left-4" />
//       <p className="self-stretch mt-[-0.42px] [font-family:'Rozha_One-Regular',Helvetica] font-normal text-white text-xl tracking-[-1.00px] leading-[18.0px]">
//         Bot or not: Are fake accounts swaying voters towards Reform UK?
//       </p>
//       <p className="self-stretch [font-family:'Inter-Regular',Helvetica] font-normal text-[#eaeaea] text-[8px] tracking-[-0.40px] leading-[7.2px]">
//         By Marianna Spring, Disinformation and social media correspondent
//       </p>
//       <div className="absolute w-[121px] h-[17px] top-[168px] left-4" />
//       <div className="inline-flex items-center gap-[2.54px] flex-[0_0_auto]">
//         <div className="inline-flex items-center justify-center gap-[1.74px] px-2 py-0.5 flex-[0_0_auto] bg-[#f24baa] rounded-md overflow-hidden">
//           <div className="w-fit mt-[-0.35px] [font-family:'Rozha_One-Regular',Helvetica] font-normal text-white text-[8px] tracking-[-0.40px] leading-[7.2px] whitespace-nowrap">
//             BBC
//           </div>
//         </div>
//         <div className="inline-flex items-center justify-center gap-[1.74px] px-2 py-[3px] flex-[0_0_auto] bg-[#08e292] rounded-md overflow-hidden">
//           <div className="w-fit mt-[-0.35px] [font-family:'Notable-Regular',Helvetica] font-normal text-white text-[6px] text-center tracking-[-0.30px] leading-[5.4px] whitespace-nowrap">
//             Lv. 0
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
