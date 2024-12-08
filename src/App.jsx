import { useRef } from "react";
import AboutME from "./Components/AboutME";
import Header from "./Components/Header";
import MyDetails from "./Components/MyDetails";

const App = () => {

  const detailsRef  = useRef(null);

  const scroll = () =>{
    detailsRef.current.scrollIntoView({behavior:"smooth"})
  }

  return (
    <div>
      <Header></Header>
      <div className="w-11/12 mx-auto space-y-5">
      <AboutME scroll={scroll}></AboutME>
      <div ref={detailsRef}><MyDetails></MyDetails></div>
      </div>
    </div>
  );
};

export default App;