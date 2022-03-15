import type { NextPage } from "next";
import { NavBar } from "../components/Navbar/navbar.component";
import { MainLayout } from "../layouts/main-layout/main-layout.component";
import { Text } from "../components/Text/text.component";
import * as S from "../styles/portfolio.style";
import { ProjectCard } from "../components/ProjectCard/projectcard.component";

const Portfolio: NextPage = () => {
  return (
    <>
      <NavBar />
      <MainLayout>
        <S.Portfolio>
          <Text textType="h3" className="portfolio-sub">
            View My Projects
          </Text>
          {/* <S.ProjectWrapper>
            <ProjectCard
              projectCard={"Emily Dickinson"}
              description={"This is my first project using only HTML and CSS"}
            />
          </S.ProjectWrapper> */}
        </S.Portfolio>
      </MainLayout>
    </>
  );
};
export default Portfolio;
