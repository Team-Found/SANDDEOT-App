import { useDispatch } from "react-redux";
import { setReRender } from "./../../../utils/store";
import { toast } from "react-toastify";

interface Props {
  isFollowed: boolean;
  RSSID: number;
}

interface IsNotFollowedProps extends Props {
  isFollowed: false;
  domain: string;
}

type WholeProps = Props | IsNotFollowedProps;

export const Follow = ({ isFollowed, RSSID, domain }: WholeProps): JSX.Element => {
  const dispatch = useDispatch();

  function insertRss(domain: string): void {
    window.api
      .insertRss(domain)
      .then((res) => {
        if (res.status === "success") {
          window.dbApi.rss.add({
            RSSID: res.rssID,
            RSSURL: res.rssUrl,
            RSSName: res.rssName,
            RSSImageUrl: res.favicon,
          });
          toast.success("RSS가 추가되었습니다.");
        } else {
          toast.error("RSS 추가에 실패했습니다.");
        }
      })
      .then(() => {
        dispatch(setReRender());
      })
      .catch((err) => {
        console.log(err);
        toast.error("RSS 추가에 실패했습니다.");
      });
  }

  return (
    <div className={`inline-flex items-center gap-2.5 justify-center relative`}>
      <div
        className={`mt-[-1.00px] tracking-[0] text-xs font-medium ${
          isFollowed
            ? "text-variable-collection-red60"
            : "text-variable-collection-blue60"
        }`}
        onClick={() => {
          if (isFollowed) {
            window.dbApi.article.RSSArticleDel(RSSID).then(() => {
              dispatch(setReRender());
            });
          } else {
            insertRss(domain);
          }
        }}
      >
        {isFollowed ? "Unfollow" : "Follow"}
      </div>
    </div>
  );
};
