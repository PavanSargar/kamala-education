import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/partials/Header";

import Input from "../../lib/Input";
import Button from "../../lib/Button";
import ContactDetails from "../../components/partials/ContactDetails";

import styles from "./index.module.css";

const CareerDetail = () => {
  const { id } = useParams();

  const dummyOptions = [
    { id: 1, value: "OPTION1" },
    { id: 2, value: "OPTION2" },
    { id: 3, value: "OPTION3" },
  ];

  return (
    <>
      <Header title={`CAREER < ${id}`} />

      <div className={`${styles.container} section-padding my-5`}>
        <ContactDetails />
        <div className={`${styles.form} bg-light-blue`}>
          <div className="mb-4">
            <h3 className="h-3 text-center">Share your Details</h3>
            <p className="text-center t-1 fw-medium mt-1 light-black">
              Someone from our team will connect with you.
            </p>
          </div>

          <form>
            <div className={`${styles["form-group"]}`}>
              <Input
                label="Full Name"
                required
                placeholder="Enter Full Name..."
              />
              <Input
                label="Phone Number"
                required
                placeholder="Enter Phone Number..."
              />
            </div>
            <div className={`${styles["form-group"]}`}>
              <Input
                type={"email"}
                label="Email"
                required
                placeholder="Enter Email..."
              />
              <Input
                label="Position"
                required
                select
                options={dummyOptions}
                placeholder="Enter Phone Number..."
              />
            </div>

            <div className={`${styles["form-group"]}`}>
              <Input
                label="No. of Year Experience"
                placeholder="Enter No. of Year Experience..."
              />
              <Input
                label="Expected Salary"
                placeholder="Enter Expected Salary..."
              />
            </div>

            <div className={`${styles["form-group"]}`}>
              <Input
                type="file"
                label="No. of Year Experience"
                required
                placeholder="Enter No. of Year Experience..."
              />
            </div>
            <div className={`${styles["form-group"]}`}>
              <Input
                textarea
                rows={6}
                label="Query"
                required
                placeholder="Enter your Query..."
              />
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <Button width={"156px"}>Send</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CareerDetail;
