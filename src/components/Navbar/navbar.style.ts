import styled from "styled-components";
import style from "../../styles/style.config.json";

export const NavBarUL = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 10px;
  list-style: none;
  text-align: center;
  width: 80vw;
  justify-content: end;
  margin-right: 1.5rem;

  a:link {
    text-decoration: none;
  }

  a:visited {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  a:active {
    text-decoration: none;
  }

  .nav-links {
    text-decoration: none;
    padding: 0.5rem 1rem;
    color: black;
    font-weight: 600;
  }

  .nav-links:hover {
    background-color: #231123;
    color: #c4a287;
    transition: all 0.2s ease-out;
  }

  .fa-bars {
    color: #231123;
  }

  .nav-links-mobile {
    display: none;
  }

  .menu-icon {
    display: none;
  }
`;

export const NavWrapper = styled.nav`
  background: white;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: fixed;
  z-index: 1;
  width: 100%;
  position: fixed;
  top: 0;

  .logo {
    justify-self: start;
    margin-left: 10px;
    cursor: pointer;
    font-weight: lighter;
  }
  @media (max-width: ${style.breakPoints.m}) {
    .navBar {
      visibility: hidden;
    }
    .logo {
      margin-left: 60px;

      font-weight: lighter;
    }
  }
`;

export const TextWrapper = styled.div`
  .logo {
    color: black;
    padding: 0;
  }
`;
