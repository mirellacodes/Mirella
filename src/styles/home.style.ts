import styled from "styled-components";
import style from "./style.config.json";

export const Container = styled.div`
  /* border: 2px solid salmon;
  background-color: blue; */
  /* position: relative; */
  width: 50%;
`;

export const HomeWrapper = styled.div`
  /* border: 2px solid red; */
  background-color: ${style.colors.primary};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  /* flex-direction: column; */
  top: 30%;

  .intro {
    color: ${style.colors.mauve};
    /* border: 2px solid blue;
    background-color: lime; */
  }

  .title {
    color: white;
    /* border: 2px solid blue;
    background-color: pink; */
    font-style: italic;
    font-size: 40px;
    margin-top: -5px;
  }

  .subtitle {
    color: white;
    /* border: 2px solid blue;
    background-color: black; */
    /* position: relative; */
    /* right: 70px; */
    font-style: italic;
    font-weight: 500;
    margin-top: -10px;
  }

  .bio {
    color: white;
    /* border: 2px solid blue;
    background-color: black; */

    text-align: center;
    font-style: italic;
    text-align: left;
  }
`;
