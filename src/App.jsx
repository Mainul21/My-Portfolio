import { useRef } from "react";
import AboutME from "./Components/AboutME";
import Header from "./Components/Header";
import MyDetails from "./Components/MyDetails";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";

const App = () => {
  const detailsRef = useRef(null);
  const sectionRef = {
    skills: useRef(null),
    projects: useRef(null),
    education: useRef(null)
  };
  const scrollToSection = (section) => {
    sectionRef[section].current.scrollIntoView({ behavior: "smooth" });
  };

  const scroll = () => {
    detailsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Header scrollToSection={scrollToSection}></Header>
      <div className="w-11/12 mx-auto space-y-5">
        <AboutME scroll={scroll}></AboutME>
        <div ref={detailsRef}>
          <MyDetails></MyDetails>
        </div>
        <div ref={sectionRef.skills}>
          <Skills></Skills>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
