import React from "react";
import { ThemeProvider } from "styled-components";
import styles from "../../styles/style.config.json";
import { TProjectCard } from "./projectcard.defintion";
import { Text } from "../Text/text.component";
import * as S from "./projectcard.style";
import { url } from "inspector";
import { Buttons } from "../Buttons/buttons.component";
import router from "next/router";

export function ProjectCard({
  onClick,
  className,
  projectCard,
  description,
  link,
}: TProjectCard) {
  const ProjectItems = [
    {
      projectCard: "Emily Dickinson Biography",
      description: "This was my first project using only HTML and CSS",
      className: "project",
      link: "https://github.com/SchoolOfCode/w0d0_precourse-challenge-mirellacodes",
      linkName: "Emily Dickinson's GitHub Repo",
    },
    {
      projectCard: "Task Tracker - School of Code",
      description:
        "An app that allows bootcampers from School of Code to track their workshop. This was my first Project Week working in an agile team of 4. We used React to serve our front-end and PostgreSQL and restful API as our back-end.",
      className: "project",
      link: "https://github.com/SchoolOfCode/national-project-week-room37",
      linkName: "Task Tracker's GitHub Repo",
    },
    {
      projectCard: "Pawcket",
      description:
        "This is a social media app for pet lovers. The tech stack used were Firebase, TypeScript, Styled Components, NextJS, Cypress and Storybook",

      className: "project",
      link: "https://github.com/ozzyee/pawcket",
      linkName: "Pawcket's GitHub Repo",
    },
  ];

  return (
    <>
      {ProjectItems.map((item, index) => {
        return (
          <S.Wrapper>
            <S.ProjCard
              className={item.className}
              key={index}
              onClick={onClick}
            >
              <Text textType="h2">{item.projectCard}</Text>
              <Text>{item.description}</Text>
              <Buttons
                onClick={() => location.assign(item.link)}
                className={item.className}
              >
                {item.linkName}
              </Buttons>
            </S.ProjCard>
          </S.Wrapper>
        );
      })}
    </>
  );
}
