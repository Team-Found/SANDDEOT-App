import { TodayWord } from ".";

export default {
  title: "Components/TodayWord",
  component: TodayWord,
  argTypes: {
    prop: {
      options: ["two", "one"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    prop: "two",
    className: {},
    groupClassName: {},
    text: "Obtuse.kr",
    text1: "(명) 풍기물란 사이트 따위를 통틀어 일컫는 말",
    starClassName: {},
    star: "/img/star-1-3.svg",
    img: "/img/star-1-4.svg",
  },
};
