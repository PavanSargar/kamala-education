import React from "react";

import IMG1 from "../../../assets/objectives/1.svg";

import styles from "./index.module.css";
import { Image } from "react-bootstrap";

const Objectives = () => {
  return (
    <div
      className={`${styles.container} d-flex align-items-center justify-content-center my-5`}
    >
      <Image src={IMG1} alt="" />
      <div className={`${styles.heading} d-flex align-items-center justify-content-center flex-column`}>
        <h3 className="h-3 text-center text-white">Objectives</h3>
        <p className="text-center p-1 fw-medium text-white w-50">
          Education with Purpose, Success with Passion
        </p>
      </div>
    </div>
  );
};

export default Objectives;
