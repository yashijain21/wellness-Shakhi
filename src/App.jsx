import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./Components/HeroSection";
import Risk from "./Pages/Risk"; // <-- make sure this file exists
import RhCompatibilityModal from "./Components/RHCompatibilityModal";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/protect" element={<HeroSection />} />
        <Route path="/risk" element={<Risk />} />
        <Route path="/check-RhCompatibility" element={<RhCompatibilityModal />} />
      </Routes>
    </Router> 
  );
};

export default App;
