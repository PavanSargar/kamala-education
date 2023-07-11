import React from "react";
import Hero from "../../components/Home/Hero";
import News from "../../components/Home/News";
import WhyKamala from "../../components/Home/WhyKamala";
import OurSuccess from "../../components/Home/OurSuccess";
import Facilities from "../../components/Home/Facilities";
import Activities from "../../components/Home/Activities";
import Objectives from "../../components/Home/Objectives";
import Management from "../../components/Home/Management";
import Admission from "../../components/Home/Admission";
import Opportunities from "../../components/Home/Opportunites";

const Home = () => {
  return (
    <>
      <Hero />
      <News />
      <WhyKamala />
      <OurSuccess />
      <Facilities />
      <Activities />
      <Objectives />
      <Management />
      <Admission />
      <Opportunities />
    </>
  );
};

export default Home;
