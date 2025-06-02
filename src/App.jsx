import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar className="h-[80px] z-5" />
      <Hero className="mt-[80px]" />
    </>
  );
}

export default App;
