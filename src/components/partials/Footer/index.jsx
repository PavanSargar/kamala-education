import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import LOGO from "../../../assets/logo/logo.svg";

import styles from "./index.module.css";

const Footer = () => {
  return (
    <div className={`${styles.container} section-padding bg-light-blue py-5`}>
      <Row>
        <Col md={12} lg={6}>
          <Image src={LOGO} alt="" />
          <h3 className="h-3 mt-3 navy ps-0 text-left">Kamala High School</h3>
          <span className="p-3 ps-0 fw-medium text-dark text-left">
            Markapur, Prakasam(Dt), A.P - 523316.
          </span>
        </Col>
        <Col md={12} lg={2}>
          <div className="mb-2">
            <h6 className="p-2 ps-0 fw-medium">Landline</h6>
            <span className="p-3 ps-0">08596-223339</span>
          </div>
          <div className="">
            <h6 className="p-2 ps-0 fw-medium">Contact</h6>
            <span className="p-3 ps-0">08142425888</span>
          </div>
        </Col>
        <Col md={12} lg={2}>
          <h6 className="p-2 ps-0 fw-medium">Explore</h6>

          <div className="d-flex flex-column gap-2">
            <Link className="text-decoration-none text-dark">Home</Link>
            <Link className="text-decoration-none text-dark">About Us</Link>
            <Link className="text-decoration-none text-dark">
              Academic Calendar
            </Link>
            <Link className="text-decoration-none text-dark">Career</Link>
            <Link className="text-decoration-none text-dark">Contact</Link>
          </div>
        </Col>
        <Col md={12} lg={2}>
          <h6 className="p-2 ps-0 fw-medium">Emails</h6>

          <div className="d-flex flex-column gap-2">
            <Link className="text-decoration-none text-dark">
              name@email.com
            </Link>
            <Link className="text-decoration-none text-dark">
              name@email.com
            </Link>
            <Link className="text-decoration-none text-dark">
              name@email.com
            </Link>
            <Link className="text-decoration-none text-dark">
              name@email.com
            </Link>
            <Link className="text-decoration-none text-dark">
              name@email.com
            </Link>
          </div>
        </Col>
      </Row>
      <div className={`${styles.line}`}></div>
      <div className="d-flex align-items-center justify-content-center">
        <span className="p-3">
          © Copyright {new Date().getFullYear()}, Kamala High School. Designed
          by Taurus Design Studio and Developed by Dinesh Chandu
        </span>
      </div>
    </div>
  );
};

export default Footer;
