import { NewProjectBtn } from ".";

export default {
  title: "Components/NewProjectBtn",
  component: NewProjectBtn,
  argTypes: {
    property1: {
      options: ["variant-4", "variant-2", "variant-3", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "variant-4",
    dictionary: "/img/dictionary-1.png",
    img: "/img/1.png",
    centerFocusWeak: "/img/center-focus-weak-1.png",
    extension: "/img/extension-1.png",
  },
};
