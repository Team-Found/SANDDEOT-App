import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Detail from "@renderer/components/Detail/Detail";

type ArticleDetailApiFn = (
  id: number
) => Promise<Awaited<ReturnType<typeof window.dbApi.article.detail>>>;

interface ArticleDetailViewProps {
  detailApiFn: ArticleDetailApiFn;
}

export default function ArticleDetailView({ detailApiFn }: ArticleDetailViewProps): JSX.Element {
  let { id } = useParams();
  const [article, setArticle] =
    useState<Awaited<ReturnType<typeof window.dbApi.article.detail>>>();

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const data = await detailApiFn(Number(id));
        setArticle(data);
      } catch (error) {
        console.error("Error fetching article:", error);
      }
    };

    if (id) {
      fetchArticle();
    }
  }, [id, detailApiFn]);

  return (
    <div className="flex w-full h-[calc(100dvh-2.5rem)] overflow-hidden flex-1 flex-grow">
      {article?.body && (
        <Detail
          body={article.body}
          title={article.title}
          threadID={article.threadID}
          articleID={article.articleID}
        />
      )}
    </div>
  );
}
