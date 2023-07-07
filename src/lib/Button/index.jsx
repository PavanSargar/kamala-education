import React from "react";

import styles from "./index.module.css";

const Button = ({ children, outline }) => {
  return (
    <button className={`${styles.button} ${outline && styles.outline} b-2`}>
      {children}
    </button>
  );
};

export default Button;
