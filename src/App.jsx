import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import { PivotStrip, WhyPM } from "./components/Positioning";
import CaseStudy from "./components/CaseStudy";
import {
  Projects,
  Experience,
  Builder,
  Contact,
  Footer,
} from "./components/Sections";

const App = () => {
  return (
    <>
      <Nav />
      <Hero />
      <PivotStrip />
      <WhyPM />
      <CaseStudy />
      <Projects />
      <Experience />
      <Builder />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
