import React from "react";

import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className="w-full h-full">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
