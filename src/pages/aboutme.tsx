import type { NextPage } from "next";
import { NavBar } from "../components/Navbar/navbar.component";
import { MainLayout } from "../layouts/main-layout/main-layout.component";
import { Text } from "../components/Text/text.component";
import * as S from "../styles/aboutme.style";
import FadeIn from "react-fade-in";

const AboutMe: NextPage = () => {
  return (
    <MainLayout>
      <NavBar />
      <S.AboutMe>
        <S.Container>
          <S.TextWrap>
            <FadeIn delay={200} transitionDuration={500}>
              <Text textType="h1" className="topTitle">
                LIFE BEFORE CODING
              </Text>
            </FadeIn>
            <FadeIn delay={400} transitionDuration={700}>
              <Text className="first-bio">
                I had always had an interest in technology however I had the
                preconceived notion that you had to have a STEM background or
                excell in Maths in order to pursue a path in tech. I went on to
                study Criminology and Sociology at the university. Throughout
                the course, we taught how to conduct a research using SPSS
                (Social Package for the Social Sciences) which is software that
                allows you to record, edit and analyse all sorts of data. I fell
                in love with working with the data and this made me want to
                pursue a career in Tech. I ended up researching on how to get
                myself onto this path. I was lucky to have a friend who taught
                me the basic HTML and CSS which fueled my passion even further.
                I ended up in dilemma whether to teach myself, enroll in a
                conversion Master degree at the University or enroll at a
                Bootcamp.
              </Text>
            </FadeIn>
            <FadeIn delay={600} transitionDuration={1800}>
              <Text className="first-bio">
                I ended up researching on how to get myself onto this path. I
                was lucky to have a friend who taught me the basic HTML and CSS
                which fuel my passion even further. I ended up in dilemma
                whether to teach myself, enroll in a conversion Master degree at
                the University or enroll at a Bootcamp.
              </Text>
            </FadeIn>
            <FadeIn delay={1000} transitionDuration={1800}>
              <Text textType="h1" className="topTitle">
                School of Code
              </Text>
            </FadeIn>{" "}
            <FadeIn delay={1500} transitionDuration={1800}>
              <Text className="first-bio">
                I ended up finding School of Code on Google. I watched their
                videos on their YouTube channel, read their testimonials and I
                was sold. I loved that they emphasises on working with people
                from various backgrounds, different ages as well as having no
                coding background which made me feel I would be part of the
                team. I immediately applied and my life has not been the same
                since then. I was selected one of the 180+ out of over 1800
                applicants.
              </Text>
            </FadeIn>
            <FadeIn delay={1800} transitionDuration={2000}>
              <Text className="first-bio">
                It taught me not only programming languages, but equipping me
                with the skills I needed to step into the Tech. They covered
                from JavaScript to React to UX/UI to PostgreSQL to agile
                methodologies. Each week, I met different people from the course
                and had the chance to communicate, utilise Pair-Programming and
                participate weekly Hackathons whenever possible.
              </Text>
            </FadeIn>
          </S.TextWrap>
        </S.Container>
      </S.AboutMe>
    </MainLayout>
  );
};

export default AboutMe;
