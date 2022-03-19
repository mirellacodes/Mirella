import styled from "styled-components";
import styles from "../../styles/style.config.json";

export const Wrapper = styled.div`
  position: relative;
  /* border: green solid 5px; */
  /* display: flex; */
  /* align-items: center; */
  /* flex-direction: column; */
  padding-left: 3%;
  padding-right: 3%;

  .project {
    /* border: 4px green solid; */
    flex-grow: 1;
  }
`;

export const ProjCard = styled.div`
  width: 700px;
  height: 700px;
  background-color: white;
  border-radius: 22px;
  padding: 10px;
  padding-top: 30px;
  padding-bottom: 20px;
  box-shadow: 5px 5px 5px rgba(14, 23, 27, 0.4);
  margin-bottom: 20px;
  /* border: pink solid 5px; */
  text-align: center;
  color: ${styles.colors.purple};
  font-style: italic;
  font-weight: 600;
  /* position: relative; */

  .text {
    color: ${styles.colors.mauve};
    font-weight: 500;
  }
`;
