import styled from "styled-components";

export const NavBarUL = styled.ul`
  background: white;
  justify-content: center;
  align-items: center;
  justify-content: center;
  align-items: center;
  padding: 0;
  display: flex;
  font-size: 1.2rem;
  list-style-type: none;
  z-index: 1;
  height: 80px;
  top: 0;
  background: white;

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
