import { useEffect, useState } from "react";
import Post from "@renderer/components/Feed/Post/Post";

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
    <div className="inline-block">
      {list?.map((a, i) => {
        return (
          <Post
            title={a.title}
            description={a.body}
            blogName={a.author}
            favicon="#"
            date={a.date}
            articleID={a.articleID}
          />
        );
      })}
    </div>
  );
}
