import { useRef, useState, useEffect, useCallback } from "react";
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
import { FaArrowUp } from "react-icons/fa6";

const App = () => {
  const detailsRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });
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

  // Scroll progress + scroll-to-top visibility
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.pageYOffset / totalHeight) * 100;
      setScrollProgress(progress);
      setShowScrollTop(window.pageYOffset > 500);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mouse tracking for cursor glow
  const handleMouseMove = useCallback((e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  const scrollToTop = () => {
    smoothScrollTo(0, 800);
  };

  return (
    <div className="min-h-screen relative">
      {/* Scroll Progress Bar */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      {/* Cursor Glow (hidden on mobile) */}
      <div
        className="cursor-glow hidden lg:block"
        style={{ left: mousePos.x, top: mousePos.y }}
      />

      <ParallaxBackground />
      <div className="relative z-10">
        <Header scrollToSection={scrollToSection} scroll={scroll} />
        <div className="pt-24 w-11/12 mx-auto space-y-24">
          <div id="about" ref={sectionRef.about}>
            <AboutME scroll={scroll} />
          </div>
          <div ref={detailsRef}>
            <MyDetails />
          </div>
          <div id="skills" ref={sectionRef.skills}>
            <Skills />
          </div>
          <div id="experience" ref={sectionRef.experience}>
            <Experience />
          </div>
          <div id="projects" ref={sectionRef.projects}>
            <Projects />
          </div>
          <div id="education" ref={sectionRef.education}>
            <Education />
          </div>
          <div id="contact" ref={sectionRef.contact}>
            <ContactMe />
          </div>
        </div>
        <Footer scrollToSection={scrollToSection} scroll={scroll} />
      </div>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </div>
  );
};

export default App;
