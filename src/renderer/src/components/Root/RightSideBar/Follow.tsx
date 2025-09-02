import { useDispatch } from "react-redux";
import { setReRender } from "./../../../utils/store";
import { toast } from "react-toastify";
import { useState } from "react";

type FollowProps =
  | { isFollowed: true; RSSID: number; domain?: never }
  | { isFollowed: false; domain: string; RSSID?: never };

export const Follow = (props: FollowProps): JSX.Element => {
  const { isFollowed } = props;
  const dispatch = useDispatch();
  const [isProcessing, setIsProcessing] = useState(false);

  async function insertRss(domain: string): Promise<void> {
    setIsProcessing(true);
    try {
      const res = await window.api.insertRss(domain);
      if (res.status === "success") {
        await window.dbApi.rss.add({
          RSSID: res.rssID,
          RSSURL: res.rssUrl,
          RSSName: res.rssName,
          RSSImageUrl: res.favicon,
        });
        toast.success("RSS가 추가되었습니다.");
      } else {
        toast.error("RSS 추가에 실패했습니다.");
      }
    } catch (err) {
      console.log(err);
      toast.error("RSS 추가에 실패했습니다.");
    } finally {
        dispatch(setReRender());
        setIsProcessing(false);
    }
  }

  const handleClick = () => {
    if (props.isFollowed) {
      window.dbApi.article.RSSArticleDel(props.RSSID).then(() => {
        dispatch(setReRender());
      });
    } else if (!isProcessing) {
      insertRss(props.domain);
    }
  };

  return (
    <div className={`inline-flex items-center gap-2.5 justify-center relative`}>
      <div
        className={`mt-[-1.00px] tracking-[0] text-xs font-medium cursor-pointer ${
          isFollowed
            ? "text-variable-collection-red60"
            : "text-variable-collection-blue60"
        }`}
        onClick={handleClick}
      >
        {isFollowed ? "Unfollow" : "Follow"}
      </div>
    </div>
  );
};
