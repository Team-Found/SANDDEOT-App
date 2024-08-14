import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detail(): JSX.Element {
  let { id } = useParams();
  const [article, setArticle] =
    useState<Awaited<ReturnType<typeof window.dbApi.article.detail>>>();

  useEffect(() => {
    window.dbApi.article.detail(Number(id)).then((data) => {
      setArticle(data);
      console.log(article);
    });
  }, []);

  return (
    <>
      <div>{article?.title}</div>
    </>
  );
}
