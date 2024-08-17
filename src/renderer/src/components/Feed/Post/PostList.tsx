import Post from "@components/Feed/Post/Post";
import { Link } from "react-router-dom";

export default function PostList(): JSX.Element {
  return (
    <Link to={`/detail/${1}`}>
      <Post
        title="Astro를 사용해 React, Vue컴포넌트 동시에 사용하기"
        description="Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
        rssID={0}
        date="2days ago"
        articleID={1}
        saved={0}
      />
    </Link>
  );
}
