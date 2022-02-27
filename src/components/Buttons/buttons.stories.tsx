import React from "react";
import { ComponentMeta } from "@storybook/react";
import { Buttons } from "./buttons.component";
import { TButtonProps } from "./buttons.definitions";

export default {
  title: "Buttons",
  component: Buttons,
} as ComponentMeta<typeof Buttons>;

// This is the template for storybook. It will render the component and display it in storybook

// Inside of the function we are passing in props as we usually do with a normal component and defining what type it is.
const Template = ({ children, onClick }: TButtonProps) => {
  return <Buttons onClick={onClick}>{children}</Buttons>;
};

export const allButttons: any = Template.bind({});

allButttons.args = {
  children: "Contact Me",
};
