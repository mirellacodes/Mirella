import React from "react";
import { TTextProps } from "./text.defintion";
import * as S from "./text.style";

export function Text({ className, textType, children, onClick }: TTextProps) {
  //if the "if statement" is true, return the contents in the block

  if (textType === "h1") {
    return (
      <S.headingOne className={className} onClick={onClick}>
        {children}
      </S.headingOne>
    );
  }

  if (textType === "h2") {
    return (
      <S.headingTwo className={className} onClick={onClick}>
        {children}
      </S.headingTwo>
    );
  }

  if (textType === "h3") {
    return (
      <S.headingThree className={className} onClick={onClick}>
        {children}
      </S.headingThree>
    );
  }

  return (
    <S.paragraph className={className} onClick={onClick}>
      {children}
    </S.paragraph>
  );
}
