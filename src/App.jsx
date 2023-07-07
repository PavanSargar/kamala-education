import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <div style={{ height: "100px" }}></div>
      <Routes>
        <Route path="/" element={<Home animation="fade-down" />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
