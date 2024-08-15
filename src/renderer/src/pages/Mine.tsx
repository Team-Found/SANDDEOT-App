import { useEffect, useState } from "react";
import Post from "@renderer/components/Feed/Post/Post";
import { Link } from "react-router-dom";

export default function Mine(): JSX.Element {
  const [list, setList] =
    useState<
      Awaited<ReturnType<typeof window.dbApi.article.userArticleList>>
    >();

  useEffect(() => {
    const articleList = async () => {
      try {
        const data = await window.dbApi.article.userArticleList();
        setList(data);
      } catch (error) {
        console.log("Mine page error", error);
      }
    };
    articleList();
  }, []);

  return (
    <div>
      {list?.map((a, i) => {
        console.log(a);
        return (
          <Link to={`/detail2/${a.articleID}`}>
            <Post
              title={a.title}
              description={a.body}
              blogName="나"
              favicon="#"
              date={a.date}
              articleID={a.articleID}
            />
          </Link>
        );
      })}
    </div>
  );
}
