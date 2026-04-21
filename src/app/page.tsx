"use client";

import { useScrollFade } from "@/components/useScrollFade";
import Cursor     from "@/components/Cursor";
import Navbar     from "@/components/Navbar";
import Hero       from "@/components/Hero";
import Ticker     from "@/components/Ticker";
import Skills     from "@/components/Skills";
import Projects   from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact    from "@/components/Contact";
import Footer     from "@/components/Footer";

export default function Home() {
  useScrollFade();

  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        {/* <Ticker /> */}
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
