import { useEffect, useState } from "react";
import Post from "@renderer/components/Feed/Post/Post";
import { Link } from "react-router-dom";

export default function Mine(): JSX.Element {
  const [list, setList] =
    useState<
      Awaited<ReturnType<typeof window.dbApi.article.userArticleList>>
    >();
  const [reRender, setReRender] = useState(false);
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

  const reverseList = list ? [...list].reverse() : null;
  return (
    <div>
      {reverseList?.map((a, i) => {
        return (
          <Link to={`/detail2/${a.articleID}`} key={i}>
            <Post
              title={a.title}
              description={a.body}
              body={a.body}
              rssID={0}
              date={a.date}
              articleID={a.articleID}
              saved={a.saved}
              reRender={reRender}
              setReRender={setReRender}
            />
          </Link>
        );
      })}
    </div>
  );
}
