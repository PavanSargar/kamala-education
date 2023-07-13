import React from "react";

import styles from "./index.module.css";

const TextButton = ({ children, onClick, classnames }) => {
  return (
    <button onClick={onClick} className={`${styles.button} ${classnames}`}>
      {children}
    </button>
  );
};

export default TextButton;
