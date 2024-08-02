import { Outlet } from "react-router-dom";
import { Sidebar } from "@components/Sidebar";

export default function Root(): JSX.Element {
  return (
    <div className="flex items-center justify-between flex-1 grow overflow-hidden self-stretch">
      <Sidebar />
      <div className="flex flex-col bg-background text-foreground items-start gap-[50px] px-[30px] py-[42px] flex-1 self-stretch grow overflow-y-scroll h-[100dvh]">
        <Outlet />
      </div>
    </div>
  );
}
