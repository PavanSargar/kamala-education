import React from "react";

import styles from "./index.module.css";

const Header = ({ title }) => {
  return (
    <div className={` ${styles.container} section-padding`}>
      <h3 className="h-3 text-white">{title}</h3>
    </div>
  );
};

export default Header;
