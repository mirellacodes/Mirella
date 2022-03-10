import React from "react";
import * as S from "./buttons.style";
import { TButtonProps } from "./buttons.definitions";
import { ThemeProvider } from "styled-components";
import styles from "../../styles/style.config.json";

export function Buttons({
  children,
  onClick,
  allBtns,
  className,
}: TButtonProps) {
  const theme = {
    backgroundColor: allBtns ? styles.colors.primary : styles.colors.mauve,
    fontColor: allBtns ? "white" : styles.colors.black,
    width: allBtns ? 100 : 250,
    fontSize: allBtns ? 0.8 : 1.5,
    height: allBtns ? 25 : 60,
    borderRadius: allBtns ? 30 : 11,
  };
  return (
    <ThemeProvider theme={theme}>
      <S.Buttons className={className}>{children}</S.Buttons>
    </ThemeProvider>
  );
}
