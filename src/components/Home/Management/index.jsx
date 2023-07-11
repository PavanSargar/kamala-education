import React from "react";

import IMG1 from "../../../assets/management/1.png";
import IMG2 from "../../../assets/management/2.png";
import IMG3 from "../../../assets/management/3.png";

import styles from "./index.module.css";
import { Image } from "react-bootstrap";
import TextButton from "../../../lib/TextButton";
import ImageCard from "../../../lib/ImageCard";

const Management = () => {
  return (
    <div className={`${styles.container} section-padding my-5`}>
      <div className="mb-4">
        <h3 className="h-3 text-center">Managmement</h3>
        <p className="text-center p-1 pt-0 fw-medium light-black">
          Education with Purpose, Success with Passion
        </p>
      </div>
      <div
        className={`${styles.images} d-flex align-items-center justify-content-center gap-4 flex-wrap`}
      >
        <ImageCard img={IMG1} />
        <ImageCard img={IMG2} />
        <ImageCard img={IMG3} />
      </div>
      <div className={`${styles.btn} mt-4`}>
        <TextButton>See More...</TextButton>
      </div>
    </div>
  );
};

export default Management;
