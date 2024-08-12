import FeedSideBar from "@renderer/components/Feed/FeedSideBar";
import PostList from "@renderer/components/Feed/Post/PostList";
import { Outlet } from "react-router-dom";

export default function Feed(): JSX.Element {
  return <PostList></PostList>;
}
