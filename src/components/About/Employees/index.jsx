import React from "react";

import IMG1 from "../../../assets/management/3.png";
import IMG2 from "../../../assets/management/2.png";
import IMG3 from "../../../assets/management/3.png";

import ImageCard from "../../../lib/ImageCard";

const Employees = () => {
  return (
    <div className={` section-padding my-5 `}>
      <div className="mb-5">
        <h3 className="h-3 mb-4 text-center">Management</h3>
        <div className="d-flex align-items-center justify-content-around flex-wrap">
          <ImageCard img={IMG1} />
          <ImageCard img={IMG2} />
          <ImageCard img={IMG3} />
        </div>
      </div>

      <h3 className="h-3 mb-4 text-center">Departments</h3>

      <div className="mb-5">
        <h3 className="h-5 mb-4 text-center">Department of Biology</h3>

        <div className="d-flex align-items-center justify-content-around flex-wrap">
          <ImageCard img={IMG1} />
          <ImageCard img={IMG2} />
          <ImageCard img={IMG3} />
        </div>
      </div>

      <div className="">
        <h3 className="h-5 mb-4 text-center">Department of Chemistry</h3>

        <div className="d-flex align-items-center justify-content-around flex-wrap">
          <ImageCard img={IMG1} />
          <ImageCard img={IMG2} />
          <ImageCard img={IMG3} />
        </div>
      </div>
    </div>
  );
};

export default Employees;
