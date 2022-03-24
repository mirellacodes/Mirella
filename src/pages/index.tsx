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
import Link from "next/link";
import Home from "./home";
import Portfolio from "./portfolio";
import AboutMe from "./aboutme";

const Main: NextPage = () => {
  return (
    <>
      <Home />
      <Portfolio />
      <AboutMe />
    </>
  );
};

export default Main;
