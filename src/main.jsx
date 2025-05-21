import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Prewedding from "./pages/Prewedding.jsx";
import Weddings from "./pages/Weddings.jsx";
import Shoots from "./pages/Shoots.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/preweddings" element={<Prewedding />} />
        <Route path="/weddings" element={<Weddings />} />
        <Route path="/shoots-events" element={<Shoots />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
