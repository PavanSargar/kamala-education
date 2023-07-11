import React from "react";

import styles from "./index.module.css";

const TextButton = ({ children }) => {
  return <button className={`${styles.button}`}>{children}</button>;
};

export default TextButton;
