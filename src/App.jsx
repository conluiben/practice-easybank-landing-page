import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Benefits from "./components/Benefits";

function App() {
  return (
    <div className="">
      <Navbar className="h-[60px] md:h-[80px] z-5" />
      <Hero className="mt-[60px] md:mt-[80px]" />
      <Benefits />
    </div>
  );
}

export default App;
