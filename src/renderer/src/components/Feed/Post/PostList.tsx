import Post from "@components/Feed/Post/Post";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function PostList(): JSX.Element {
  interface RecommendList {
    rssID: number;
    rssName: string;
    rssUrl: string;
    favicon: string;
    articleID: number;
    title: string;
    descript: string;
    date: number;
    thumbnail: string;
    imgList: string[];
    content: string;
    articleUrl: string;
  }

  // 상태를 배열로 초기화하고 타입을 `RecommendList[]`로 정의합니다.
  const [recommend, setRecommend] = useState<RecommendList[]>([]);

  useEffect(() => {
    // 저장된 기사 목록 가져오기
    window.dbApi.article
      .savedArticleList()
      .then((item) => {
        const articleList = item.map((a) => a.articleID);
        console.log("tq", articleList);
        return articleList;
      })
      .then((articleList) => {
        // 추천 기사 가져오기
        console.log(articleList, "whtRK");
        return window.api
          .articleRecommend(articleList, 3)
          .then((item: RecommendList | RecommendList[]) => {
            // item이 배열이 아닌 경우 배열로 감싸기
            const itemArray = Array.isArray(item) ? item : [item];
            setRecommend(itemArray); // 상태 업데이트
            console.log(itemArray);
          });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const [reRender, setReRender] = useState(false);

  return (
    <div>
      {recommend.length > 0
        ? recommend.map((a, i) => (
            <Link to={`/detail/${a.articleID}`} key={i}>
              <Post
                title={a.title}
                description={a.descript}
                body={a.content}
                rssID={a.rssID}
                date={a.date}
                articleID={a.articleID}
                saved={0}
                reRender={reRender}
                setReRender={setReRender}
                rssName={a.rssName}
                favicon={a.favicon}
              />
            </Link>
          ))
        : null}
    </div>
  );
}
