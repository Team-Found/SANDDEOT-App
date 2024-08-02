import imgUrl from "@assets/img/article-main-image.png";
console.log(imgUrl);
import Tag from "./Tag";

export default function Banner(): JSX.Element {
  return (
    <div
      className={`w-full h-[200px] bg-cover bg-[50%_50%] rounded-lg overflow-hidden relative`}
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      <div className="absolute w-[40%] h-full p-4 bg-black bg-opacity-80 ">
        <p className="self-stretch mt-[-0.42px] [font-family:'Rozha_One-Regular',Helvetica] font-normal text-xl tracking-[-1.00px] leading-[18.0px]">
          Bot or not: Are fake accounts swaying voters towards Reform UK?
        </p>
        <p className="text-[8px] font-normal [font-family:'Pretendard_Variable-Regular',Helvetica] leading-[7.20px]">
          By Marianna Spring, Disinformation and social media correspondent
        </p>
        <div className="absolute w-[121px] h-[17px] top-[168px] left-4" />
        <div className="inline-flex items-center gap-1 flex-[0_0_auto]">
          <Tag color="#f24baa">BBC</Tag>

          <Tag color="#08e292">Lv. 0</Tag>
        </div>
      </div>
    </div>
  );
}
