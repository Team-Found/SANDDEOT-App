type ArrayElement<T> = T extends (infer U)[] ? U : never;

type ArticleType = ArrayElement<
  Awaited<ReturnType<typeof window.dbApi.article.list>>
>;
import ArticleDelete from "./ArticleDelete";
import { useState } from "react";
export default function ArticlePiece({
  articleDetail,
}: {
  articleDetail: ArticleType;
}): JSX.Element {
  const [del, setDel] = useState(false);

  // console.log(articleDetail);
  // console.log(articleDetail.progress);
  return !del ? (
    <div className="w-full">
      <div className="w-full h-34 px-4 py-4 bg-gradient-to-br from-secondaryBG via-stone-900 to-stone-900 rounded-2xl flex-col justify-center items-start gap-4 inline-flex mb-4">
        <div className="w-full text-white text-2xl font-normal font-['Rozha One'] leading-tight">
          {articleDetail.title}
        </div>
        <div className="w-full text-gray-200 text-xs font-medium font-['Pretendard Variable'] leading-3">
          By {articleDetail.author}
        </div>
        <div className="h-4 justify-start items-center gap-0.5 inline-flex">
          <div className="px-2.5 py-0.5 bg-red-500 rounded-lg justify-center items-center gap-0.5 flex">
            <div className="text-white text-xs font-normal font-['Rozha One'] leading-3">
              BBC
            </div>
          </div>
          <div className="px-2.5 py-0.5 bg-white rounded-lg justify-center items-center gap-0.5 flex">
            <div className="w-12 text-center text-red-500 text-xs font-semibold font-['Pretendard Variable'] leading-3">
              Level {`${articleDetail.level}`}
            </div>
          </div>
        </div>
        <div className="w-full h-1.5 bg-zinc-700 rounded-3xl justify-start items-center inline-flex">
          <div
            style={{ width: `${articleDetail.progress}%` }}
            className={`w-[${articleDetail.progress}%] h-1.5 relative bg-progress rounded-3xl`}
          />
        </div>
        <ArticleDelete bodyID={articleDetail.bodyID} setDel={setDel} />
      </div>
    </div>
  ) : (
    <></>
  );
}
