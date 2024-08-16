import PropTypes from "prop-types";
import { Plus2 } from "./Plus2";
import { Follow } from "./Follow";

interface Props {
  blogTitle: string;
  property1?: "variant-2" | "default";
  followProperty1: "variant-2" | "default";
  imageUri?: string;
}

export const RssBlock = ({
  blogTitle = "",
  property1 = "default",
  followProperty1 = "default",
  imageUri,
}: Props): JSX.Element => {
  return (
    <div
      className={`[border-bottom-style:solid] border-[#161616] w-full flex border-t items-center [border-top-style:solid] gap-2 px-0 py-1.5 border-b relative `}
    >
      {property1 === "default" && (
        <>
          <div className="flex items-center gap-2 relative flex-1 grow">
            <div
              className="relative w-[30px] h-[30px] rounded-[999px] bg-cover bg-[50%_50%]"
              style={{
                backgroundImage: `url(${imageUri})`,
              }}
            />
            <div
              className={`relative flex-1 [font-family:'Pretendard_Variable-Medium',Helvetica] font-medium text-white text-xs tracking-[0] leading-[normal] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical]`}
            >
              {blogTitle}
            </div>
          </div>
          <Follow className="!flex-[0_0_auto]" property1={followProperty1} />
        </>
      )}

      {property1 === "variant-2" && (
        <>
          <Plus2 className="!relative !w-5 !h-5" />
          <div className="relative w-fit [font-family:'Pretendard_Variable-Medium',Helvetica] font-medium text-variable-collection-blue60 text-xs tracking-[0] leading-[normal] whitespace-nowrap">
            새로 추가하기
          </div>
        </>
      )}
    </div>
  );
};

RssBlock.propTypes = {
  blogTitle: PropTypes.string,
  property1: PropTypes.oneOf(["variant-2", "default"]),
  followProperty1: PropTypes.string,
};
