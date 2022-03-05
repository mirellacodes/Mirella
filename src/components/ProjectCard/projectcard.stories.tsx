import React from "react";
import { ComponentMeta } from "@storybook/react";
import { ProjectCard } from "./projectcard.component";
import { TProjectCard } from "./projectcard.defintion";

export default {
  title: "Project Card",
  component: ProjectCard,
} as ComponentMeta<typeof ProjectCard>;

// This is the template for storybook. It will render the component and display it in storybook

// Inside of the function we are passing in props as we usually do with a normal component and defining what type it is.
const Template = ({
  className,
  onClick,
  projectCard,
  description,
}: TProjectCard) => {
  return (
    <ProjectCard
      onClick={onClick}
      projectCard={projectCard}
      className={className}
      description={description}
    ></ProjectCard>
  );
};

export const allProjectCards: any = Template.bind({});

allProjectCards.args = {
  className: "",
  projectCard: "This is the project title",
  description: "this is the description of the project title",
};
