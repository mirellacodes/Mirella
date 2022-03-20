import type { NextPage } from "next";
import { NavBar } from "../components/Navbar/navbar.component";
import { MainLayout } from "../layouts/main-layout/main-layout.component";
import { Text } from "../components/Text/text.component";
import * as S from "../styles/aboutme.style";

const AboutMe: NextPage = () => {
  return (
    <>
      <MainLayout>
        <NavBar />
        <S.TextWrap>
          <Text className="tobebuilt"> Yet to be build</Text>
        </S.TextWrap>
      </MainLayout>
    </>
  );
};

export default AboutMe;
