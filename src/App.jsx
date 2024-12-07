import AboutME from "./Components/AboutME";
import Header from "./Components/Header";

const App = () => {
  return (
    <div>
      <Header></Header>
      <div className="w-11/12 mx-auto">
      <AboutME></AboutME>
      </div>
    </div>
  );
};

export default App;