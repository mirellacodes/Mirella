import React from "react";
import { ThemeProvider } from "styled-components";
import styles from "../../styles/style.config.json";
import { TProjectCard } from "./projectcard.defintion";
import * as S from "./projectcard.style";

export function ProjectCard({ onClick, className, allimg }: TProjectCard) {
  return <S.ProjCard />;
}
