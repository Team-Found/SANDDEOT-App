import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Chat } from "@renderer/components/Chat";

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
      <div className="prose prose-basic dark:prose-invert ">
        <div>
          <h1>{article?.title}</h1>
        </div>
        {article?.body && (
          <div dangerouslySetInnerHTML={{ __html: article.body }} />
        )}
      </div>
      <Chat />
    </div>
  );
}
