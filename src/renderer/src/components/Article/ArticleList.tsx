import { Link } from "react-router-dom";
import ArticlePiece from "./ArticlePiece";
import { useEffect, useState } from "react";
export default function ArticleList(): JSX.Element {
  const [list, setList] =
    useState<Awaited<ReturnType<typeof window.dbApi.article.list>>>();
  useEffect(() => {
    window.dbApi.article.list().then((articleList) => {
      console.log(articleList);
      setList(articleList);
    });
  }, []);
  return (
    <>
      {list
        ? list.map((a, i) => {
            console.log(a.bodyID);
            console.log(a);
            return (
              <Link to={`${a.bodyID}`}>
                <ArticlePiece articleDetail={a} key={i} />
              </Link>
            );
          })
        : ""}
    </>
  );
}
