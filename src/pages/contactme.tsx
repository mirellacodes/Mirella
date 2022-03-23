import type { NextPage } from "next";
import { NavBar } from "../components/Navbar/navbar.component";
import { MainLayout } from "../layouts/main-layout/main-layout.component";
import { Text } from "../components/Text/text.component";
import * as S from "../styles/aboutme.style";
import Head from "next/head";

const ContactMe: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mirella's Portfolio | Home</title>
        <html lang="en" />
      </Head>
      <MainLayout>
        <NavBar />
        <S.TextWrap>
          <Text className="tobebuilt"> Yet to be build</Text>
        </S.TextWrap>
      </MainLayout>
    </>
  );
};

export default ContactMe;
