import React from "react";
import * as S from "./buttons.style";
import { TButtonProps } from "./buttons.definitions";

export function Buttons({ children, onClick }: TButtonProps) {
  return <S.Buttons>{children}</S.Buttons>;
}
