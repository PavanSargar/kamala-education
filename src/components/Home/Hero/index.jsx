import React from "react";

import styles from "./index.module.css";
import { Image } from "react-bootstrap";

import IMAGE from "../../../assets/landing/Images.png";
import Button from "../../../lib/Button";

const Hero = () => {
  return (
    <div className={`${styles.container} d-flex gap-2`}>
      <div className={`${styles.left} d-flex align-items-center`}>
        <div className={`${styles.content}`}>
          <p className="b-3">MARKAPUR’S FIRST EVER CBSE SCHOOL</p>
          <span>
            <h3 className="h-1">
              Empowering Minds, Shaping Futures: Welcome to
            </h3>
            <h3 className="h-1 navy">Kamala High School!</h3>
          </span>
          <p className="p-1 light-black fw-medium">
            Our mission is to provide a transformative educational experience
            that empowers students to achieve academic excellence, cultivate
            personal growth, <span className="navy fw-bold">see more...</span>
          </p>
          <div className="d-flex align-items-center gap-3">
            <Button outline>Contact Us!</Button>
            <Button>Admission Form</Button>
          </div>
        </div>
      </div>

      <div className={`${styles.image}`}>
        <Image src={IMAGE} alt="kamala education" />
      </div>
    </div>
  );
};

export default Hero;
