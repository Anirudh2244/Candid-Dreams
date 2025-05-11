import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Plansection from "./components/Plansection";
import Footer from "./components/Footer";
import YtVideos from "./components/YtVideos";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="max-w-[1440px] mx-auto">
      <Navbar />
      <div className="mx-5 sm:mx-15  border-l-2 border-r-2 border-zinc-400 ">
        <Herosection />
        <Services />
        <Experience />
        <Portfolio />
        <YtVideos />
        <Plansection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
