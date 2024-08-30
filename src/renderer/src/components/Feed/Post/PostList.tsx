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

  var [recommend, setRecommend] = useState<RecommendList>();

  useEffect(() => {
    // 저장된 기사 목록 가져오기
    window.dbApi.article
      .savedArticleList()
      .then((item) => {
        const rssIdList = item.map((a) => a.RSSID);
        console.log("tq", rssIdList);
        return rssIdList;
      })
      .then((rssIdList) => {
        // 추천 기사 가져오기
        console.log(rssIdList, "whtRK");
        return window.api.articleRecommend(rssIdList, 3).then((item) => {
          setRecommend(item);
          console.log(item);
        }); // setRecommendList 전달
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const [reRender, setReRender] = useState(false);
  return (
    <div>
      {/* {recommendList.map((a, i) => {
        return (
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
        );
      })} */}
    </div>
  );
}
