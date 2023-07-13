import React from "react";
import { Route, Routes } from "react-router-dom";

// partials
import Navbar from "./components/partials/Navbar";
import Footer from "./components/partials/Footer";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Calendar from "./pages/Calendar";
import Resources from "./pages/Resources";
import Career from "./pages/Career";
import CareerDetail from "./pages/CareerDetail";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <div style={{ height: "100px" }}></div>
      <Routes>
        <Route path="/" element={<Home animation="fade-down" />} />
        <Route path="/about" element={<About animation="fade-down" />} />
        <Route
          path="/academic-calendar"
          element={<Calendar animation="fade-down" />}
        />
        <Route
          path="/resources"
          element={<Resources animation="fade-down" />}
        />
        <Route path="/career" element={<Career animation="fade-down" />} />

        <Route
          path="/career/:id"
          element={<CareerDetail animation="fade-down" />}
        />

        <Route path="/contact" element={<Contact animation="fade-down" />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
