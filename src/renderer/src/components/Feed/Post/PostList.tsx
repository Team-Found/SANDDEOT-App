import Post from "@components/Feed/Post/Post";

export default function PostList(): JSX.Element {
  return (
    <Post
      title="Astro를 사용해 React, Vue컴포넌트 동시에 사용하기"
      description="Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
      blogName="obtuse의 테크 블로그"
      favicon=""
      date="2days ago"
    />
  );
}
