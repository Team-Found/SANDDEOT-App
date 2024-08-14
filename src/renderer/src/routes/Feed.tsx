import FeedSideBar from "@renderer/components/Feed/FeedSideBar/FeedSideBar";
import PostList from "@renderer/components/Feed/Post/PostList";
import { Outlet } from "react-router-dom";
import Root from "./Root";
import TabBar from "@renderer/components/Feed/TabBar";

export default function FeedRouter(): JSX.Element {
  return (
    <Root>
      <div className="justify-around items-start inline-flex w-full box-border max-w-[950px]">
        <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex w-full">
          <TabBar />
          <div className="px-[30px] w-full">
            <Outlet />
          </div>
        </div>
        <FeedSideBar />
      </div>
    </Root>
  );
}
