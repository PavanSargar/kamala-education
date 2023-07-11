import React from "react";

import IMG1 from "../../../assets/activites/1.png";
import IMG2 from "../../../assets/activites/2.png";
import IMG3 from "../../../assets/activites/3.png";
import IMG4 from "../../../assets/activites/4.png";

import styles from "./index.module.css";
import { Col, Image, Row } from "react-bootstrap";

const Activities = () => {
  return (
    <div className={`${styles.container} section-padding my-5`}>
      <div className="mb-4">
        <h3 className="h-3 text-center">Activities</h3>
        <p className="text-center p-1 fw-medium light-black">
          At Kamla High School, we offer a range of social and annual activities
          to enrich our students' education. These activities help our students
          develop important life skills, such as teamwork and leadership, while
          fostering a sense of community and belonging. Our annual events,
          including sports day, cultural fest, and science fair, provide
          opportunities for our students to showcase their talents and
          creativity. We believe that these activities contribute to our
          students' overall success and prepare them for life beyond the
          classroom.
        </p>
      </div>
      <div className=" d-flex align-items-center justify-content-center gap-3 flex-wrap">
        <div className="d-flex align-items-center justify-content-center flex-column gap-3">
          <Image fluid src={IMG1} alt="" />
          <Image fluid src={IMG2} alt="" />
        </div>
        <div className="d-flex align-items-center justify-content-center flex-column gap-3">
          <Image fluid src={IMG4} alt="" />

          <Image fluid src={IMG3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Activities;
