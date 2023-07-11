import React from "react";
import { Image } from "react-bootstrap";

import styles from "./index.module.css";

const ImageCard = ({
  img,
  name = "Mr. First Name Last Name",
  email = "firstname.lastname@gmail.com",
  timeline = "04/05/2012 - present",
}) => {
  return (
    <div className={`${styles.img}`}>
      <Image src={img} alt="" />
      <div className={`${styles.description}`}>
        <h5 className="h-5">{name}</h5>
        <p className="t-1  fw-medium">{email}</p>
        <span className="p-2 ps-0 text-dark">{timeline}</span>
      </div>
    </div>
  );
};

export default ImageCard;
