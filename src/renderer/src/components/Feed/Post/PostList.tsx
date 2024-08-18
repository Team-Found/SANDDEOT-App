import Post from "@components/Feed/Post/Post";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function PostList(): JSX.Element {
  const [reRender, setReRender] = useState(false);
  return (
    <Link to={`/detail/${1}`}>
      <Post
        title="Astro를 사용해 React, Vue컴포넌트 동시에 사용하기"
        description="Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
        body="Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
        rssID={0}
        date={1}
        articleID={1}
        saved={0}
        reRender={reRender}
        setReRender={setReRender}
      />
    </Link>
  );
}
