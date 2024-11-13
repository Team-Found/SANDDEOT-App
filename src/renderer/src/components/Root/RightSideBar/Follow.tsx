import { useDispatch } from "react-redux";
import { setReRender } from "./../../../utils/store";

interface Props {
  isFollowed: boolean;
  RSSID: number;
}

export const Follow = ({ isFollowed, RSSID }: Props): JSX.Element => {
  const dispatch = useDispatch();
  return (
    <div className={`inline-flex items-center gap-2.5 justify-center relative`}>
      <div
        className={`mt-[-1.00px] tracking-[0] text-xs font-medium ${
          isFollowed
            ? "text-variable-collection-red60"
            : "text-variable-collection-blue60"
        }`}
        onClick={() => {
          if (!isFollowed) {
            window.dbApi.article.RSSArticleDel(RSSID).then(() => {
              dispatch(setReRender());
            });
          }
        }}
      >
        {isFollowed ? "Unfollow" : "Follow"}
      </div>
    </div>
  );
};
