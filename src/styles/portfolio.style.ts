import styled from "styled-components";
import style from "./style.config.json";

export const Portfolio = styled.div`
  margin: 0;
  border: 2px red solid;
  height: 100vh;
  overflow: auto;
  /* position: absolute; */
  display: flex;

  justify-content: start;
  flex-direction: column;
  top: 15%;
  left: 10%;
  .portfolio-sub {
    color: ${style.colors.lightergreen};
    font-style: italic;
    font-weight: 500;
  }
`;

export const ProjectWrapper = styled.div`
  /* border: 5px green solid;
  margin-top: 100px;
  position: relative;
  display: flex;
  justify-content: start; */
`;

export const TextProjectWrapper = styled.div`
  border: 10px teal solid;
  margin-top: 10em;
`;
