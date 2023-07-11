import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import IMG1 from "../../../assets/about/1.png";
import IMG2 from "../../../assets/about/2.png";

import styles from "./index.module.css";

const Mission = () => {
  return (
    <div className={`${styles.container} section-padding my-5`}>
      <div className="d-flex align-items-center justify-content-center flex-column mb-3">
        <h3 className="h-3 text-dark text-center w-50">
          Discover Our Mission: Empowering Students to Succeed Through
          Education.
        </h3>
        <p className="t-1 fw-medium light-black text-center">
          Empowering students to succeed through a safe and inclusive learning
          environment, high-quality education, and engaging curriculum.
        </p>
      </div>
      <Row className={` align-items-center`}>
        <Col lg={6} md={12}>
          <div className=" gap-3 d-flex align-items-center justify-content-center flex-column">
            <Image fluid src={IMG1} alt="" />
            <div className="d-flex justify-content-center flex-column">
              <h5 className="h-5 text-dark text-center">Our Mission</h5>
              <span className="p-1 pt-0 text-center light-black">
                Our mission is to provide a transformative educational
                experience that empowers students to achieve academic
                excellence, cultivate personal growth, and become responsible,
                compassionate contributors to society. We are committed to
                delivering a comprehensive and innovative curriculum, fostering
                a nurturing and inclusive environment, and inspiring a lifelong
                love of learning.
              </span>
            </div>
          </div>
        </Col>
        <Col lg={6} md={12}>
          <div className=" gap-3 d-flex align-items-center justify-content-center flex-column">
            <Image fluid src={IMG2} alt="" />
            <div className="d-flex justify-content-center flex-column">
              <h5 className="h-5 text-dark text-center">Our Vision</h5>
              <span className="p-1 pt-0 text-center light-black">
                Our vision is to create a dynamic and inclusive learning
                community that inspires and empowers students to become lifelong
                learners, compassionate individuals, and responsible global
                citizens. We strive to foster a culture of academic excellence,
                creativity, and critical thinking, where every student is
                supported and challenged to reach their highest potential.
              </span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Mission;
