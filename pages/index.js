import Head from "next/head";
import Nav from "components/CustomNav";
import styles from "styles/Home.module.css";
import Skills from "components/Skills";
import React from "react";
import { firestore } from "controller/client";
import Projects from "components/Projects";
import AboutMe from "components/AboutMe";
import Contact from "components/Contact";
import CustomFooter from "components/CutomFooter";

export default function Home() {
  React.useEffect(() => {
    firestore
      .collection("test")
      .doc("test")
      .get()
      .then((res) => {
        console.log(res.data());
      });
  }, []);
  return (
    <>
      <Head>
        <title>Portfolio - Kevin Marmolejo</title>
        <meta name="description" content="Kevin Marmolejo Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Nav />

        {/* About me */}
        <AboutMe />

        {/* Skills */}
        <Skills />

        {/* Projects */}
        <Projects />

        {/* Contact */}
        <Contact />

        <CustomFooter />
      </main>
    </>
  );
}
