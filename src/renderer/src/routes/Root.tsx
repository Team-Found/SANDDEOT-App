import { Outlet } from "react-router-dom";
import { Sidebar } from "@renderer/components/Root/LeftSideBar/SideBar";
import Statusbar from "@renderer/components/Root/Set/Statusbar";
import { useLocation } from "react-router-dom";
import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Root({
  children,
}: {
  children?: ReactNode;
}): JSX.Element {
  const location = useLocation();

  // 경로의 첫 글자를 대문자로 변환하는 함수
  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const title =
    location.pathname === "/"
      ? "Home"
      : capitalizeFirstLetter(location.pathname.slice(1));

  return (
    <>
      <Statusbar title={`산뜻 - ${title}`} />
      <div className="flex items-center justify-between flex-1 grow overflow-hidden self-stretch">
        <Sidebar />
        <div className="flex flex-col bg-background text-foreground items-start flex-1 self-stretch grow overflow-y-auto h-[calc(100dvh-2.25rem)]">
          {children ? children : <Outlet />}
          <ToastContainer theme="dark" pauseOnHover />
        </div>
      </div>
    </>
  );
}
