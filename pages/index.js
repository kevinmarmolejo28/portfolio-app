import Head from "next/head";
import React from "react";
import Nav from "components/Nav";
import Skills from "components/Skills";
import { firestore } from "controller/client";
import Projects from "components/Projects";
import AboutMe from "components/AboutMe";
import Contact from "components/Contact";
import Footer from "components/Footer";

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

      {/* Navbar */}
      <Nav />

      {/* About me */}
      <section id="about-me">
        <AboutMe />
      </section>

      {/* Skills */}
      <section className="bg-gray-dark" id="skills">
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects">
        <Projects />
      </section>

      {/* Contact */}
      <section className="bg-gray-dark" id="contact">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
