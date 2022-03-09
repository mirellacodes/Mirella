import React from "react";
import { TMainLayout } from "./main-layout.definition";
import * as S from "./main-layout.style";

export function MainLayout({ className, children }: TMainLayout) {
  return (
    <>
      <S.BackgroundColour>{children}</S.BackgroundColour>
    </>
  );
}
