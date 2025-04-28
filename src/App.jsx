import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <div className="mx-5 sm:mx-15 h-screen border-l-2 border-r-2 border-zinc-400">
        <Herosection />
      </div>
    </div>
  );
}

export default App;
