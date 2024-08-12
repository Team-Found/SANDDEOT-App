import { Outlet } from "react-router-dom";
import { Sidebar } from "@components/Sidebar";
import Statusbar from "@components/Statusbar";
import { useLocation } from "react-router-dom";
import { ReactNode } from "react";

export default function Root({
  children,
}: {
  children?: ReactNode;
}): JSX.Element {
  const location = useLocation();
  return (
    <>
      <Statusbar
        title={`산뜻 - ${location.pathname === "/" ? "Home" : location.pathname.slice(1)}`}
      />
      <div className="flex items-center justify-between flex-1 grow overflow-hidden self-stretch">
        <Sidebar />
        <div className="flex flex-col bg-background text-foreground items-start gap-[50px] flex-1 self-stretch grow overflow-y-scroll h-[calc(100dvh-2.25rem)]">
          {children ? children : <Outlet />}
        </div>
      </div>
    </>
  );
}
