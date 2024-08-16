import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Chat } from "@renderer/components/Chat";
import Wink from "@renderer/components/Wink";

export default function Detail2(): JSX.Element {
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
    <div className="flex">
      {/* <iframe
        src="https://obtuse.kr"
        className="w-3/4 h-3/4 border-2 border-gray-300"
        title="Example Site"
      /> */}
      {article?.body && <Wink body={article.body} />}

      <Chat />
    </div>
  );
}
