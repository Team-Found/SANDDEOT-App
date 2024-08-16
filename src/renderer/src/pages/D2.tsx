import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Detail from "@components/Detail";

export default function D2(): JSX.Element {
  let { id } = useParams();
  const [article, setArticle] =
    useState<Awaited<ReturnType<typeof window.dbApi.article.detail2>>>();

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const data = await window.dbApi.article.detail2(Number(id));
        setArticle(data);
      } catch (error) {
        console.error("Error fetching article:", error);
      }
    };

    fetchArticle();
  }, [id]);

  return (
    <div className="flex w-full max-h-[calc(100dvh-2.5rem)] flex-1 flex-grow">
      {/* <iframe
        src="https://obtuse.kr"
        className="w-3/4 h-3/4 border-2 border-gray-300"
        title="Example Site"
      /> */}
      <div className="prose prose-basic !max-w-full dark:prose-invert w-full">
        {article?.body && <Detail body={article.body} />}
      </div>
    </div>
  );
}
