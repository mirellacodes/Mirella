import type { NextPage } from "next";
import { NavBar } from "../components/Navbar/navbar.component";
import { MainLayout } from "../layouts/main-layout/main-layout.component";
import { Text } from "../components/Text/text.component";
import * as S from "../styles/portfolio.style";
import { ProjectCard } from "../components/ProjectCard/projectcard.component";
import { Buttons } from "../components/Buttons/buttons.component";
import FadeIn from "react-fade-in";

const Portfolio: NextPage = () => {
  return (
    <>
      <MainLayout>
        <NavBar />
        <S.Portfolio>
          <FadeIn delay={200} transitionDuration={1000}>
            <S.TextProjectWrapper>
              <Text textType="h3" className="portfolio-sub">
                View My Projects
              </Text>
            </S.TextProjectWrapper>
          </FadeIn>
          <FadeIn delay={600} transitionDuration={2500}>
            <S.ProjectWrapper>
              <ProjectCard />
            </S.ProjectWrapper>
          </FadeIn>
        </S.Portfolio>
      </MainLayout>
    </>
  );
};
export default Portfolio;
