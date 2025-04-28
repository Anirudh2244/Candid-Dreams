import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import Services from "./components/Services";
import Experience from "./components/Experience";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <div className="mx-5 sm:mx-15  border-l-2 border-r-2 border-zinc-400 mb-20">
        <Herosection />
        <Services />
        <Experience />
      </div>
    </div>
  );
}

export default App;
