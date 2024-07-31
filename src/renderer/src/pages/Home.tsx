import { Section3 } from "@components/Home/Section3";
import { Section } from "@components/Home/Section";
import { Section4 } from "@components/Home/Section4";
import { Section2 } from "@components/Home/Section2";

export default function HomeScreen(): JSX.Element {
  return (
    <>
      <Section />
      <Section2 />
      <Section3 />
      <Section4 />
    </>
  );
}
