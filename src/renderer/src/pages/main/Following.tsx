import { useEffect, useState } from "react";
import Post from "@renderer/components/Feed/Post/Post";
import { Link } from "react-router-dom";

export default function Following(): JSX.Element {
  const [list, setList] =
    useState<Awaited<ReturnType<typeof window.dbApi.article.rssArticleList>>>();
  const [reRender, setReRender] = useState(false);
  useEffect(() => {
    const articleList = async () => {
      try {
        const data = await window.dbApi.article.rssArticleList();
        setList(data);
      } catch (error) {
        console.log("Following page error", error);
      }
    };
    articleList();
  }, [reRender]);

  return (
    <div>
      {list?.map((a, i) => {
        return (
          <Link to={`/detail/${a.articleID}`} key={i}>
            <Post
              title={a.title}
              description={a.description}
              body={a.body}
              rssID={a.RSSID}
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
