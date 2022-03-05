import React from "react";
import { Text } from "./text.component";
import { ComponentMeta } from "@storybook/react";
import { TTextProps } from "../Text/text.defintion";

export default {
  title: "Text",
  component: Text,
  argTypes: {
    textType: {
      description:
        "This a text type which has h1, h2, h3 and p. It will trigger when you specify which type and render in the children prop",
    },
    children: {
      description: "This is the children prop which will be rendered.",
    },
    className: {
      description: "This is a className for styling purposes or other purposes",
    },
  },
} as ComponentMeta<typeof Text>;

const Template = ({ onClick, textType, children, className }: TTextProps) => {
  return (
    <Text onClick={onClick} className={className} textType={textType}>
      {children}
    </Text>
  );
};

export const allText: any = Template.bind({});
allText.args = {
  textType: "",
  className: "",
  children: "hello",
};
