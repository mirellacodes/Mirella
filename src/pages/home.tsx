import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { NavBar } from "../components/Navbar/navbar.component";
import { MainLayout } from "../layouts/main-layout/main-layout.component";
import styles from "../styles/Home.module.css";
import { Text } from "../components/Text/text.component";
import * as S from "../styles/home.style";
import { Buttons } from "../components/Buttons/buttons.component";
import FadeIn from "react-fade-in";
import Portfolio from "./portfolio";
import router from "next/router";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mirella's Portfolio | Home</title>
        <html lang="en" />
      </Head>
      <MainLayout>
        <NavBar />

        <S.HomeWrapper>
          <S.Container>
            <FadeIn delay={200} transitionDuration={500}>
              <Text className="intro"> My name is</Text>
            </FadeIn>
            <FadeIn delay={400} transitionDuration={700}>
              <Text className="title" textType="h1">
                MIRELLA NATHINA....
              </Text>
            </FadeIn>
            <FadeIn delay={600} transitionDuration={1000}>
              <Text className="subtitle" textType="h2">
                I enjoy building apps
              </Text>
            </FadeIn>
            <FadeIn delay={800} transitionDuration={1500}>
              <Text className="bio">
                A software engineer based in Surrey, UK. I have built Front-End
                and Back-End apps. During my time at School of Code, I
                participated weekly Hackathons, delivered MVP during Project
                Week in an agile team of 4, learnt various tools and
                technologies such as JavaScript, React, Node.js, PostgreSQL,
                Agile Methodologies, Pair Programming and many more. This
                website is created with NextJs and TypeScript.
              </Text>
            </FadeIn>
            <FadeIn delay={1000} transitionDuration={1800}>
              <Text className="finalSentence">
                This website is created with NextJs and TypeScript.
              </Text>
            </FadeIn>

            <FadeIn delay={1500} transitionDuration={2000}>
              <Buttons
                onClick={() => router.push("https://linktr.ee/mirellacodes")}
                className="contactMe"
              >
                Contact Me
              </Buttons>
            </FadeIn>
          </S.Container>
        </S.HomeWrapper>
      </MainLayout>
    </>
  );
};

export default Home;
