import React from "react";
import { Col, Image, Row } from "react-bootstrap";

import styles from "./index.module.css";

import IMG1 from "../../../assets/management/3.png";

const Principal = () => {
  return (
    <div className={`${styles.container} section-padding my-5`}>
      <Row className="align-items-center">
        <Col lg={6} md={12}>
          <div>
            <q className="p-2 fw-medium">
              The highest education is that which does not merely give us
              information but makes our life in harmony with existence.
            </q>
          </div>
          <div className={`${styles.quote}`}>
            <p className="p-2 fw-medium float-right pb-0 pe-0">
              Rabindranath Tagore
            </p>
          </div>

          <p className="p-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <p className="p-2">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit.
          </p>
          <h5 className="h-5 text-dark text-left">Mr. Ravi Kishan</h5>
          <span className="p-2 fw-medium text-left">2012- Present Day</span>
        </Col>
        <Col lg={6} md={12}>
          <Image fluid src={IMG1} alt="" />
        </Col>
      </Row>
    </div>
  );
};

export default Principal;
