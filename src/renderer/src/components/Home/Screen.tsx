import { Section3 } from "@components/Home/Section3";
import { Section } from "@components/Home/Section";
import { Section4 } from "@components/Home/Section4";
import { Section2 } from "@components/Home/Section2";

export default function HomeScreen(): JSX.Element {
  return (
    <div className="flex flex-col items-start gap-[50px] px-[30px] py-[42px] flex-1 self-stretch grow bg-variable-collection-primarybg overflow-y-scroll h-[100dvh]">
      <Section />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
}
