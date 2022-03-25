import styled from "styled-components";
import style from "./style.config.json";

export const Portfolio = styled.div`
  margin: 0;
  height: 100vh;
  overflow: auto;

  .portfolio-sub {
    color: ${style.colors.lightergreen};
    font-style: italic;
    font-weight: 500;

    /* border: 5px teal solid; */
  }
`;

export const ProjectWrapper = styled.div`
  /* border: 5px teal solid; */
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 100px;
  overflow: hidden;
  /* @media (max-width: ${style.breakPoints.m}) {
    flex-direction: column;
  } */
`;

export const TextProjectWrapper = styled.div`
  /* border: 10px teal solid; */
  margin-top: 10em;
  margin-left: 30px;
`;
