import React from "react";
import Header from "../../components/partials/Header";
import Mission from "../../components/About/Mission";
import Principal from "../../components/About/Principal";
import Employees from "../../components/About/Employees";
import ContactBanner from "../../components/partials/ContactBanner";

const About = () => {
  return (
    <>
      <Header title="ABOUT US" />
      <Mission />
      <Principal />
      <Employees />
      <ContactBanner />
    </>
  );
};

export default About;
