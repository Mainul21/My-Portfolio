import { useRef } from "react";
import AboutME from "./Components/AboutME";
import Header from "./Components/Header";
import MyDetails from "./Components/MyDetails";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
import Projects from "./Components/Projects/Projects";
import Education from "./Components/Education/Education";
import ContactMe from "./Components/ContactMe";
import Experience from "./Components/Experience/Experience";

import ParallaxBackground from "./Components/ParallaxBackground";

const App = () => {
  const detailsRef = useRef(null);
  const sectionRef = {
    skills: useRef(null),
    projects: useRef(null),
    education: useRef(null),
    contact: useRef(null),
    experience: useRef(null),
    about: useRef(null),
  };
  const smoothScrollTo = (targetPosition, duration = 1000) => {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    const easeInOutCubic = (t) => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutCubic(progress);
      
      window.scrollTo(0, startPosition + distance * ease);
      
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  const scrollToSection = (section) => {
    const element = sectionRef[section].current;
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      smoothScrollTo(y, 800);
    }
  };

  const scroll = () => {
    const element = detailsRef.current;
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      smoothScrollTo(y, 800);
    }
  };

  return (
    <div className="min-h-screen relative">
      <ParallaxBackground />
      <div className="relative z-10">
        <Header scrollToSection={scrollToSection} scroll={scroll} />
      <div className="pt-24 w-11/12 mx-auto space-y-20">
        <div ref={sectionRef.about}>
          <AboutME scroll={scroll}></AboutME>
        </div>
        <div ref={detailsRef}>
          <MyDetails></MyDetails>
        </div>
        <div ref={sectionRef.skills}>
          <Skills></Skills>
        </div>
        <div ref={sectionRef.experience}>
          <Experience></Experience>
        </div>
        <div ref={sectionRef.projects}>
          <Projects></Projects>
        </div>
        <div ref={sectionRef.education}>
          <Education></Education>
        </div>
        <div ref={sectionRef.contact}>
          <ContactMe></ContactMe>
        </div>
      </div>
      <Footer scrollToSection={scrollToSection} scroll={scroll}></Footer>
      </div>
    </div>
  );
};

export default App;
