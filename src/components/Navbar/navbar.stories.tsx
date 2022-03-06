import React from "react";
import { ComponentMeta } from "@storybook/react";
import { NavBar } from "./navbar.component";
import { TNavbar } from "./navbar.definition";

export default {
  title: "Navbar",
  component: NavBar,
  argTypes: {},
} as ComponentMeta<typeof NavBar>;

const Template = ({}: TNavbar) => {
  return <NavBar />;
};

export const navbar = Template.bind({});
