import styled from "styled-components";
import style from "./style.config.json";

export const Portfolio = styled.div`
  margin: 0;
  border: 2px red solid;
  position: relative;
  display: flex;
  justify-content: start;
  /* flex-direction: column; */
  top: 15%;
  left: 10%;

  .portfolio-sub {
    color: ${style.colors.lightergreen};
    font-style: italic;
    font-weight: 500;
  }
`;

export const ProjectWrapper = styled.div`
  border: 5px green solid;
  top: 20%;
  position: relative;
  display: flex;
  justify-content: start;
`;
