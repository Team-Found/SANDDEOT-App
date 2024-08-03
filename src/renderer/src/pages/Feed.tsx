import FeedSideBar from "@renderer/components/Feed/FeedSideBar";
import PostList from "@renderer/components/Feed/Post/PostList";
export default function Feed(): JSX.Element {
  return (
    <div className="justify-around items-start gap-4 inline-flex w-full">
      <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex max-w-[600px]">
        <div className="self-stretch text-white text-2xl font-bold">피드</div>
        <PostList></PostList>
      </div>
      <FeedSideBar />
    </div>
  );
}
