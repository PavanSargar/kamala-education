import React from "react";

import Input from "../../../lib/Input";
import Button from "../../../lib/Button";

import styles from "./index.module.css";


const Admission = () => {
  return (
    <div
      className={`${styles.container} section-padding my-5 bg-light-blue d-flex align-items-center py-5`}
    >
      <div className={`${styles.heading} w-75`}>
        <span>
          <h2 className="h-1 text-white ">
            Join Our <br /> Educational Journey:
          </h2>
          <h2 className="h-1">
            Complete the <br /> Admission Form <br />
            and <br /> Begin Your Path to <br /> Success!
          </h2>
        </span>
      </div>
      <div className={`${styles.form}`}>
        <form className="w-100">
          <div
            className={`${styles["form-group"]} mb-3 gap-3 d-flex align-items-center justify-content-center`}
          >
            <Input
              placeholder="Enter Student First Name..."
              type="text"
              label="Student First Name"
              required
            />
            <Input
              placeholder="Enter Student Last Name..."
              type="text"
              label="Student Last Name"
              required
            />
          </div>
          <div
            className={`${styles["form-group"]} mb-3 gap-3 d-flex align-items-center justify-content-center`}
          >
            <Input
              placeholder="Enter Mother's Full Name..."
              type="text"
              label="Mother's Full Name"
              required
            />
            <Input
              placeholder="Enter Father's Full Name..."
              type="text"
              label="Father's Full Name"
              required
            />
          </div>
          <div
            className={`${styles["form-group"]} mb-3 gap-3 d-flex align-items-center justify-content-center`}
          >
            <Input
              placeholder="Select Gender..."
              select
              label="Gender"
              required
              options={[
                { id: "01", value: "Male" },
                { id: "02", value: "Female" },
              ]}
            />
            <Input
              placeholder="Select Grade..."
              select
              label="Admission Grade"
              required
              options={[
                { id: "01", value: "VI" },
                { id: "02", value: "X" },
              ]}
            />
          </div>
          <div
            className={`${styles["form-group"]} mb-3 mb-3 gap-3 d-flex align-items-center justify-content-center`}
          >
            {" "}
            <Input placeholder="Enter DOB..." type="date" label="DOB" />
            <Input
              placeholder="Enter Mobile Number..."
              type="text"
              label="Contact Number"
              required
            />
          </div>

          <div className={`${styles["form-group"]} mb-3 `}>
            <Input placeholder="Primary Email ID..." label="Email Id" />
          </div>

          <div className={`${styles["form-group"]} mb-3`}>
            <Input
              rows={3}
              placeholder="Enter Address..."
              textarea
              label="Address"
            />
          </div>

          <div
            className={`${styles["form-group"]} mb-3  d-flex align-items-center justify-content-center`}
          >
            <Button width={"156px"}>Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Admission;
