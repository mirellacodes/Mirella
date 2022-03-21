import styled from "styled-components";
import styles from "../styles/style.config.json";

export const AboutMe = styled.div`
  margin: 0;
  height: 100vh;
  overflow: auto;
  display: flex;
  /* border: 4px blue solid; */
  padding-right: 30px;
`;

export const TextWrap = styled.div`
  .topTitle {
    /* border: 4px grey solid; */
    text-align: center;
    color: ${styles.colors.lightergreen};
  }

  .first-bio {
    text-align: left;
    color: white;
    /* border: 4px grey solid; */
  }
`;

export const Container = styled.div`
  display: flex;
  text-align: center;
  /* border: 7px chocolate solid; */
  width: 50%;
  margin-top: 10%;
  margin-left: 27%;
`;
