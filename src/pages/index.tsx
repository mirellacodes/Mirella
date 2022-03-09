import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { NavBar } from "../components/Navbar/navbar.component";
import { MainLayout } from "../layouts/main-layout/main-layout.component";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <MainLayout>
        <NavBar />
      </MainLayout>
    </>
  );
};

export default Home;
