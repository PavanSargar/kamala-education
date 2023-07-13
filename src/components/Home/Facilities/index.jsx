import React from "react";
import { Col, Row, Image } from "react-bootstrap";
import { Carousel } from "react-bootstrap";

import IMAGE1 from "../../../assets/Facilities/1.png";
import IMAGE2 from "../../../assets/Facilities/2.png";
import IMAGE3 from "../../../assets/Facilities/3.png";
import IMAGE4 from "../../../assets/Facilities/4.png";

import CHECK from "../../../assets/icons/blue-check.svg";

import Button from "../../../lib/Button";
import { Link } from "react-router-dom";

import styles from "./index.module.css";

const Facilities = () => {
  return (
    <div className={`${styles.container} section-padding my-5`}>
      <Row className={`${styles.row} align-items-center`}>
        <Col className={`${styles.img}`} xl={6} lg={5} md={12} sm={12}>
          <Carousel
            className="slider__container"
            touch
            slide
            controls={false}
            indicators
          >
            <Carousel.Item interval={1500}>
              <Image src={IMAGE1} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <Image src={IMAGE2} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <Image src={IMAGE3} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <Image src={IMAGE4} alt="" />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col xl={6} lg={6} md={12} sm={12}>
          <span className="">
            <h3 className="h-3">State-of-the-Art Facilities:</h3>
            <h3 className="h-3 light-blue w-100">
              Enriching Learning Environment for Students.
            </h3>
          </span>
          <p className=" mt-3 w-100 text-left light-black s-1">
            Modern Facilities for Holistic Development: Providing students with
            a nurturing environment equipped with state-of-the-art
            infrastructure, dedicated spaces for sports, arts, and sciences, and
            cutting-edge technology to support their overall growth.
          </p>
          <div className={`${styles.list} mb-3`}>
            <ListItem item="Classroom" />
            <ListItem item="Computer Lab" />
            <ListItem item="Library" />
            <ListItem item="Sports" />
            <ListItem item="Transportation" />
            <ListItem item="Hygiene" />
          </div>
          <Link className="text-decoration-none" to="/contact-us">
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
