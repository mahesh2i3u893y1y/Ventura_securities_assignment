import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import IpoDetails from "./components/IpoDetails";
import ScrollToTop from "./utils/ScrollToTop";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ipodetails/:ipoId" element={<IpoDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
