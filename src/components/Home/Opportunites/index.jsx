import React from "react";
import { Image, Row, Col } from "react-bootstrap";
import Button from "../../../lib/Button";
import IMAGE from "../../../assets/images/teacher-student.png";

import styles from "./index.module.css";

const Opportunities = () => {
  return (
    <div className={`${styles.container} section-padding my-5`}>
      <Row className="align-items-center">
        <Col lg={6} md={12}>
          <p className="t-1 fw-bold mb-3 light-black">
            MARKAPUR’S FIRST EVER CBSE SCHOOL
          </p>
          <h3 className="h-3 mb-3 text-dark">
            Be a part of a community that values education and growth - join us!
          </h3>
          <p className="t-2 light-black mb-5">
            At Kamala High School, we believe that education is the key to
            unlocking a better future for ourselves and our communities. That's
            why we are committed to creating a learning environment that values
            growth, learning, and personal development. As a member of our team,
            you will have the opportunity to work with talented educators,
            staff, and students who share your passion for education. You will
            be supported by a community that is dedicated to providing a
            supportive and collaborative work environment. We offer a range of
            professional development opportunities, as well as competitive
            compensation and benefits packages. Whether you're a seasoned
            educator or just starting your career, we are excited to welcome you
            to our community and to support your professional growth and
            success. Join us and be a part of a community that is transforming
            lives through education.
          </p>
          <Button>Explore Opportunities</Button>
        </Col>
        <Col className="d-flex justify-content-end" lg={6} md={12}>
          <Image className="object-fit-cover fluid " src={IMAGE} alt="" />
        </Col>
      </Row>
    </div>
  );
};

export default Opportunities;
