import Photo from "./Photo";
import PostActionBlock from "./PostActionBlock";
import { useEffect, useState } from "react";

export default function Post(props: {
  title: string;
  description: string;
  rssID: number;
  date: string;
  articleID: number;
}): JSX.Element {
  function removeHTMLTags(str) {
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
        console.log("Mine page error", error);
      }
    };
    articleList();
  }, []);
  return rss ? (
    <div className="w-full self-stretch p-3.5 border-variable-collection-primaryBd border-[1px] rounded-lg justify-start items-start gap-6 inline-flex mb-4">
      <div className="grow shrink basis-0 flex-col justify-center items-start gap-2 inline-flex">
        <div className="self-stretch flex-col justify-start items-start flex">
          <div className="w-96 justify-between items-center inline-flex">
            <div className="justify-center items-center gap-1 flex">
              <div className="w-3.5 h-3.5 rounded-full justify-center items-center flex overflow-clip">
                <img className="w-10 h-10" src={rss[0].RSSImageURL} />
              </div>
              <div className="text-gray-200 text-xs font-medium leading-3">
                {rss[0].RSSName}
              </div>
              <div className="text-stone-300 text-xs font-normal leading-3">
                {props.date}
              </div>
            </div>
            <div className="opacity-0 justify-start items-center gap-1 flex">
              <div className="w-4 h-4 py-0.5 justify-center items-center flex" />
            </div>
          </div>
          <div className="self-stretch justify-start items-center inline-flex">
            <div className="grow shrink basis-0 flex-col justify-center items-start gap-2.5 inline-flex">
              <div className="self-stretch h-16 flex-col justify-start items-start gap-0.5 flex">
                <div className="self-stretch text-white text-base font-semibold leading-snug">
                  {props.title}
                </div>
                <div className="self-stretch text-neutral-400 text-xs font-normal leading-none whitespace-normal break-all line-clamp-3">
                  {removeHTMLTags(props.description)}
                </div>
              </div>

              <div className="self-stretch justify-start items-start gap-1.5 inline-flex w-full">
                <Photo photos={extractionImg(props.description)} />
              </div>
            </div>
          </div>
        </div>
        <PostActionBlock title="" URL="" />
      </div>
    </div>
  ) : (
    <></>
  );
}
