import React, { Component } from "react";
import { MainLayout } from "./main-layout.component";
import { ComponentMeta } from "@storybook/react";

export default {
  title: "Main Layout",
  component: MainLayout,
} as ComponentMeta<typeof MainLayout>;

const Template = () => {
  return <MainLayout></MainLayout>;
};

export const allMainLayout: any = Template.bind({});
