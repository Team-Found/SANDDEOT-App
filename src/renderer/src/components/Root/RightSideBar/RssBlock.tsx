import PropTypes from "prop-types";
import Plus2 from "./Plus2.svg";
import { Follow } from "./Follow";

type RssBlockProps = {
  property1?: boolean;
  blogTitle: string;
  imageUrl?: string;
} & (
  | { isFollowed: true; RSSID: number; domain?: never }
  | { isFollowed: false; domain: string; RSSID?: never }
);

export const RssBlock = (props: RssBlockProps): JSX.Element => {
  const {
    blogTitle = "",
    property1 = true,
    isFollowed,
    imageUrl,
  } = props;

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
          {isFollowed ? (
            <Follow isFollowed={true} RSSID={props.RSSID} />
          ) : (
            <Follow isFollowed={false} domain={props.domain} />
          )}
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
