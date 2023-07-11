import React from "react";
import { Col, Row, Image } from "react-bootstrap";

import IMAGE from "../../../assets/images/facilities.png";
import CHECK from "../../../assets/icons/blue-check.svg";

import styles from "./index.module.css";
import Button from "../../../lib/Button";
import { Link } from "react-router-dom";
const Facilities = () => {
  return (
    <div className={`${styles.container} section-padding my-5`}>
      <Row className={`${styles.row}`}>
        <Col className={`${styles.img}`} xl={5} lg={5} md={12} sm={12}>
          <Image src={IMAGE} alt="" />
        </Col>
        <Col xl={7} lg={6} md={12} sm={12}>
          <span className="">
            <h3 className="h-3">State-of-the-Art Facilities:</h3>
            <h3 className="h-3 light-blue w-75">
              Enriching Learning Environment for Students.
            </h3>
          </span>
          <p className=" mt-4 w-100 text-left light-black s-1">
            Modern Facilities for Holistic Development: Providing students with
            a nurturing environment equipped with state-of-the-art
            infrastructure, dedicated spaces for sports, arts, and sciences, and
            cutting-edge technology to support their overall growth.
          </p>
          <div className={`${styles.list} mb-4`}>
            <ListItem item="Classroom" />
            <ListItem item="Computer Lab" />
            <ListItem item="Library" />
            <ListItem item="Sports" />
            <ListItem item="Transportation" />
            <ListItem item="Hygiene" />
          </div>
          <Link to="/contact-us">
            <Button>Contact Us</Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Facilities;

const ListItem = ({ item }) => {
  return (
    <span className="d-flex align-items-center gap-2">
      <Image src={CHECK} alt="" />
      <span className="p-2">{item}</span>
    </span>
  );
};
