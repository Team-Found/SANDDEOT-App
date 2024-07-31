import React from 'react';
import { DivWrapper } from './components/DivWrapper';
import { Section } from './components/Section';
import { Section4 } from './components/Section4';
import { SectionWrapper } from './components/SectionWrapper';
import { Sidebar } from './components/Sidebar';

export const Home = (): JSX.Element => {
  return (
    <div className="flex min-h-screen items-start relative bg-[url(/static/img/home.png)] bg-cover bg-[50%_50%]">
      <div className="flex items-center justify-between flex-1 grow rounded-[8.5px] overflow-hidden shadow-[0px_21.25px_25.5px_#00000059,0px_0px_17px_#00000026,0px_0px_0.85px_0.85px_#00000080,inset_0.43px_0.43px_0.85px_#78797a,inset_-0.43px_-0.43px_0.85px_#78797a] relative self-stretch">
        <Sidebar
          className="!self-stretch !h-[unset] !w-[198.9px]"
          sidebarItemDarkModeFalseClassName="!self-stretch !rounded-[5.1px] !gap-[9.41px] !flex-[0_0_auto] !p-[7.06px] !w-full"
          sidebarItemDivClassName="!mt-[-0.85px] !tracking-[0.07px] !text-[16.5px]"
          sidebarItemIcon="/img/icon-12.svg"
          sidebarItemIcon1="/img/icon-16.svg"
          sidebarItemIcon2="/img/icon-16.svg"
          sidebarItemIcon3="/img/icon-16.svg"
          sidebarItemIcon4="/img/icon-17.svg"
          sidebarItemIcon5="/img/icon-18.svg"
          sidebarItemIcon6="/img/icon-19.svg"
          sidebarItemImg="/img/icon-16.svg"
        />
        <div className="flex flex-col items-start gap-[50px] px-[30px] py-[43px] relative flex-1 self-stretch grow bg-variable-collection-primarybg shadow-[0px_0px_3.4px_#00000026] overflow-y-scroll">
          <Section className="!self-stretch !flex-[0_0_auto] !w-full" />
          <SectionWrapper className="!self-stretch !flex-[0_0_auto] !w-full" />
          <DivWrapper className="!self-stretch !flex-[0_0_auto] !w-full" />
          <Section4 className="!self-stretch !flex-[0_0_auto] !w-full" />
        </div>
      </div>
    </div>
  );
};
