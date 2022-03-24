import React from "react";
import * as S from "./navbar.style";
import { Text } from "../Text/text.component";
// import { TNavbar } from "./NavbarIcon/navbaricon.definition";

export function NavBar({}) {
  const MenuItems = [
    {
      title: "HOME",
      direct: "./home",
      cName: "nav-links",
    },
    {
      title: "PORTFOLIO",
      direct: "./portfolio",
      cName: "nav-links",
    },
    {
      title: "ABOUT ME",
      direct: "./aboutme",

      cName: "nav-links",
    },
    {
      title: "CONTACT ME",
      direct: "./contactme",
      cName: "nav-links",
    },
    {
      title: "Home",
      direct: "./#",
      cName: "nav-links-mobile",
    },
  ];
  return (
    <>
      <S.NavWrapper>
        <S.TextWrapper>
          <a href="/" className="logo">
            Mirella
          </a>
        </S.TextWrapper>
        <S.NavBarUL className="navBar">
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.direct}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </S.NavBarUL>
      </S.NavWrapper>
    </>
  );
}
