import React from "react";

import styles from "./index.module.css";

const Button = ({ children, outline, width }) => {
  return (
    <button
      style={width && { width: width }}
      className={`${styles.button} ${outline && styles.outline} b-2`}
    >
      {children}
    </button>
  );
};

export default Button;
