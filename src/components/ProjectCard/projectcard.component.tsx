import React from "react";
import { ThemeProvider } from "styled-components";
import styles from "../../styles/style.config.json";
import { TProjectCard } from "./projectcard.defintion";
import { Text } from "../Text/text.component";
import * as S from "./projectcard.style";

export function ProjectCard({
  onClick,
  className,
  projectCard,
  description,
}: TProjectCard) {
  return (
    <S.Wrapper>
      <S.ProjCard onClick={onClick} className={className}>
        <Text className="project" textType="h2">
          {projectCard}
        </Text>
        <Text>{description}</Text>
      </S.ProjCard>
    </S.Wrapper>
  );
}
