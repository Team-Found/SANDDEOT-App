import Photo from "./Photo";
import PostActionBlock from "./PostActionBlock";
import { useEffect, useState } from "react";

import TimeAgo from "javascript-time-ago";

// English.
import ko from "javascript-time-ago/locale/ko";

export default function Post(props: {
  title: string;
  description: string;
  body?: string;
  rssID: number;
  date: number;
  articleID: number;
  saved: number;
  reRender: boolean;
  setReRender: React.Dispatch<React.SetStateAction<boolean>>;
  rssName?: string;
  favicon?: string;
}): JSX.Element {
  const [timeState, setTimeState] = useState("");

  useEffect(() => {
    TimeAgo.addDefaultLocale(ko);
    const timeAgo = new TimeAgo("ko-KR");
    setTimeState(timeAgo.format(new Date(props.date * 1000)));
  }, [props.reRender, props.rssID]);

  function removeHTMLTags(str: string): string {
    return str.replace(/<\/?[^>]+(>|$)/g, "");
  }

  function extractionImg(str: string): string[] {
    const regex = /<img[^>]*\bsrc=["']?([^"'\s>]+)["']?[^>]*>/g;
    const matches = str.matchAll(regex);
    const srcArray: string[] = [];

    for (const match of matches) {
      if (match[1]) {
        srcArray.push(match[1]);
      }
    }

    return srcArray;
  }

  const [rss, setRss] =
    useState<Awaited<ReturnType<typeof window.dbApi.article.RSSDetail>>>();

  useEffect(() => {
    const articleList = async () => {
      try {
        console.log(props.rssID);
        const data = await window.dbApi.article.RSSDetail(props.rssID);
        setRss(data);
        console.log(data);
      } catch (error) {
        console.log("Post component error", error);
      }
    };
    articleList();
  }, [props.reRender, props.rssID]);

  const displayFavicon = props.favicon || (rss && rss[0].RSSImageURL) || "";
  const displayRssName = props.rssName || (rss && rss[0].RSSName) || "";

  return rss ? (
    <div className="w-full p-3.5 border-variable-collection-primaryBd border-[1px] rounded-lg gap-6 flex mb-4">
      <div className="flex-col justify-center gap-2 flex">
        <div className="flex-col flex">
          <div className="w-96 justify-between items-center flex">
            <div className="justify-center items-center gap-1 flex">
              <div className="w-3.5 h-3.5 rounded-full justify-center items-center flex overflow-clip">
                <img className="w-10 h-10" src={displayFavicon} />
              </div>
              <div className="text-gray-200 text-xs">{displayRssName}</div>
              <div className="text-stone-300 text-xs">{timeState}</div>
            </div>
          </div>
          <div className="items-center flex">
            <div className="flex-col justify-center gap-2.5 flex">
              <div className="flex-col gap-0.5 flex">
                <div className="text-white font-semibold leading-snug">
                  {props.title}
                </div>
                <div className="text-neutral-400 text-xs leading-none line-clamp-3">
                  {removeHTMLTags(props.description)}
                </div>
              </div>

              <div className="gap-1.5 flex w-full">
                {props.body && <Photo photos={extractionImg(props.body)} />}
              </div>
            </div>
          </div>
        </div>
        <PostActionBlock
          title=""
          URL=""
          saved={props.saved}
          articleID={props.articleID}
        />
      </div>
    </div>
  ) : (
    <></>
  );
}
