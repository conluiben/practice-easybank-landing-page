import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="">
      <Navbar className="h-[80px] z-5" />
      <Hero className="mt-[80px]" />
    </div>
  );
}

export default App;
