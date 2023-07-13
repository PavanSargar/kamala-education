import React from "react";

import styles from './index.module.css'

const ContactDetails = () => {
  return (
    <>
      <div
        className={`${styles.details} d-flex align-items-center justify-content-between flex-wrap gap-4`}
      >
        <div className="">
          <h6 className="t-1 fw-bold mb-2">Address</h6>
          <p className="t-2 light-black p-0">Tarlupadu Rd,</p>
          <p className="t-2 light-black p-0">Near Poleramma Temple,</p>
          <p className="t-2 light-black p-0">
            Markapur, Andhra Pradesh, 523316.
          </p>
        </div>
        <div className="">
          <h6 className="t-1 fw-bold mb-2">Phone</h6>
          <p className="t-2 light-black p-0">Tel: 08596-223339</p>
          <p className="t-2 light-black p-0">Mob: 8142425888</p>
          <p className="t-2 light-black p-0">
            Markapur, Andhra Pradesh, 523316.
          </p>
        </div>
        <div className="">
          <h6 className="t-1 fw-bold mb-2">Email</h6>
          <p className="t-2 light-black p-0">Sample.mail@gmail.com</p>
          <p className="t-2 light-black p-0">Sample.mail@gmail.com</p>
          <p className="t-2 light-black p-0">Sample.mail@gmail.com</p>
        </div>
      </div>

      <div
        className={`${styles.hr} my-4 d-flex align-items-center gap-2 w-100`}
      >
        <div></div>
        <span>Or</span>
        <div></div>
      </div>
    </>
  );
};

export default ContactDetails;
