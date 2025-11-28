import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import ServicePage from "./Pages/ServicePage";
import IndustriesPage from "./Pages/IndustriesPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<LandingPage/>} />
           <Route path="/service" element={<ServicePage/>} />
           <Route path="/industries" element={<IndustriesPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
