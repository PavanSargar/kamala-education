import React from "react";

import styles from "./index.module.css";

const OurSuccess = () => {
  return (
    <div className={`${styles.container} section-padding my-5 py-5`}>
      <div className="mb-4">
        <h3 className="h-3 text-center">Measuring Our Success</h3>
        <p className="text-center p-1 fw-medium light-black">
          Learn More About Our School's Statistics and Accomplishments
        </p>
      </div>
      <div
        className={`${styles.cards} d-flex align-items-center justify-content-center flex-wrap gap-3`}
      >
        <Card title="Students Enrolled" number="4000+" />
        <Card title="Graduation Rate" number="100%" />
        <Card title="Alumni Success Rate" number="99%" />
      </div>
    </div>
  );
};

export default OurSuccess;

const Card = ({ title, number }) => {
  return (
    <div
      className={`${styles.card} d-flex align-items-center justify-content-center flex-column`}
    >
      <span className="p-1 fw-medium text-center">{title}</span>
      <span className="h-3 text-center">{number}</span>
    </div>
  );
};
