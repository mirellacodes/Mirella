import type { NextPage } from "next";
import { NavBar } from "../components/Navbar/navbar.component";
import { MainLayout } from "../layouts/main-layout/main-layout.component";
import { Text } from "../components/Text/text.component";
import * as S from "../styles/contactme.style";
import Head from "next/head";
import { Buttons } from "../components/Buttons/buttons.component";

const ContactMe: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mirella's Portfolio | Home</title>
        <html lang="en" />
      </Head>
      <MainLayout>
        <NavBar />
        <S.Wrapper>
          <S.ContactButtonWrapper>
            <Buttons
              onClick={() => window.open("https://linktr.ee/mirellacodes")}
              className="contact"
            >
              Contact Me
            </Buttons>
          </S.ContactButtonWrapper>
        </S.Wrapper>
      </MainLayout>
    </>
  );
};

export default ContactMe;
