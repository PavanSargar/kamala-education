import React from "react";

import { FaArrowRightLong } from "react-icons/fa6";
import styles from "./index.module.css";
import Input from "../../../lib/Input";
import Accordion from "../../../lib/Accordion";
import Button from "../../../lib/Button";

const JobOpening = () => {
  const dummyOptions = [
    { id: 1, value: "OPTION 1" },
    { id: 2, value: "OPTION 1" },
    { id: 3, value: "OPTION 1" },
  ];
  return (
    <div className={`${styles.container} section-padding my-5`}>
      <div className="d-flex align-items-center gap-5">
        <Input
          value={""}
          primary
          options={dummyOptions}
          placeholder="Select Role..."
          select
          label="Role"
        />
        <Input
          primary
          options={dummyOptions}
          placeholder="Select Type..."
          select
          label="Type/Class"
        />
        <Input
          primary
          options={dummyOptions}
          placeholder="Select Location..."
          select
          label="Location"
        />
      </div>
      <div className="mt-5">
        <Accordion job type="X" location="Pune" normal title={"Maths"}>
          <span className="light-black t-1 fw-medium">Description:</span>
          <p className="t-1 fw-medium text-dark">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className=" w-100 d-flex align-items-center justify-content-center">
            <Button>
              Apply{" "}
              <span className="ms-2">
                <FaArrowRightLong />
              </span>
            </Button>
          </div>
        </Accordion>
        <Accordion job type="X" location="Pune" normal title={"Maths"}>
          <span className="light-black t-1 fw-medium">Description:</span>
          <p className="t-1 fw-medium text-dark">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className=" w-100 d-flex align-items-center justify-content-center">
            <Button>
              Apply{" "}
              <span className="ms-2">
                <FaArrowRightLong />
              </span>
            </Button>
          </div>
        </Accordion>
        <Accordion job type="X" location="Pune" normal title={"Maths"}>
          <span className="light-black t-1 fw-medium">Description:</span>
          <p className="t-1 fw-medium text-dark">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className=" w-100 d-flex align-items-center justify-content-center">
            <Button>
              Apply{" "}
              <span className="ms-2">
                <FaArrowRightLong />
              </span>
            </Button>
          </div>
        </Accordion>
        <Accordion job type="X" location="Pune" normal title={"Maths"}>
          <span className="light-black t-1 fw-medium">Description:</span>
          <p className="t-1 fw-medium text-dark">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className=" w-100 d-flex align-items-center justify-content-center">
            <Button>
              Apply{" "}
              <span className="ms-2">
                <FaArrowRightLong />
              </span>
            </Button>
          </div>
        </Accordion>
      </div>
    </div>
  );
};

export default JobOpening;
