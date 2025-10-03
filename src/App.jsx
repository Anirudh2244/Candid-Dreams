import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Plansection from "./components/Plansection";
import Footer from "./components/Footer";
import YtVideos from "./components/YtVideos";

// Pages
import Prewedding from "./pages/Prewedding";
import Weddings from "./pages/Weddings";
import Shoots from "./pages/Shoots";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Navbar />
      <div className="mx-2 sm:mx-15 border-l-2 border-r-2 border-zinc-400">
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <>
                <Herosection />
                <Services />
                <Experience />
                <Portfolio />
                <YtVideos />
                <Plansection />
              </>
            }
          />

          {/* Service Pages */}
          <Route path="/prewedding" element={<Prewedding />} />
          <Route path="/weddings" element={<Weddings />} />
          <Route path="/shoots-events" element={<Shoots />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
