import React from "react";
import { Route, Routes } from "react-router-dom";

// partials
import Navbar from "./components/partials/Navbar";
import Footer from "./components/partials/Footer";

// pages
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
  return (
    <>
      <Navbar />
      <div style={{ height: "100px" }}></div>
      <Routes>
        <Route path="/" element={<Home animation="fade-down" />} />
        <Route path="/about" element={<About animation="fade-down" />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
