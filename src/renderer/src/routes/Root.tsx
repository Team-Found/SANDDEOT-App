import { Outlet } from "react-router-dom";
import { Sidebar } from "@components/Sidebar";
import Statusbar from "@components/Statusbar";
import { useLocation } from "react-router-dom";

export default function Root(): JSX.Element {
  const location = useLocation();
  return (
    <>
      <Statusbar
        title={`산뜻 - ${location.pathname === "/" ? "Home" : location.pathname.slice(1)}`}
      />
      <div className="flex items-center justify-between flex-1 grow overflow-hidden self-stretch">
        <Sidebar />
        <div className="flex flex-col bg-background text-foreground items-start gap-[50px] px-[30px] py-[42px] flex-1 self-stretch grow overflow-y-scroll h-[calc(100dvh-2.25rem)]">
          <Outlet />
        </div>
      </div>
    </>
  );
}
