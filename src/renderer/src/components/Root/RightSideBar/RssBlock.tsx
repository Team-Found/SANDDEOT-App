import PropTypes from "prop-types";
import Plus2 from "./Plus2.svg";
import { Follow } from "./Follow";
interface Props {
  RSSID?: number;
  blogTitle: string;
  property1?: boolean;
  isFollowed: boolean;
  imageUrl?: string;
}

export const RssBlock = ({
  RSSID,
  blogTitle = "",
  property1 = false,
  isFollowed,
  imageUrl,
}: Props): JSX.Element => {
  return (
    <div
      className={`[border-bottom-style:solid] border-[#161616] w-full flex border-t items-center [border-top-style:solid] gap-2 px-0 py-1.5 border-b relative `}
    >
      {property1 ? (
        <>
          <div className="flex items-center gap-2 relative flex-1 grow">
            <img
              src={imageUrl}
              className="w-[30px] h-[30px] rounded-[100%] object-cover"
            />
            <p className={`font-medium text-white text-xs`}>{blogTitle}</p>
          </div>
          <Follow isFollowed={isFollowed} RSSID={RSSID ? RSSID : 0} />
        </>
      ) : (
        <>
          <img src={Plus2} alt="" />
          <div className="font-medium text-variable-collection-blue60 text-xs">
            새로 추가하기
          </div>
        </>
      )}
    </div>
  );
};

RssBlock.propTypes = {
  blogTitle: PropTypes.string,
  isFollowed: PropTypes.bool,
};
