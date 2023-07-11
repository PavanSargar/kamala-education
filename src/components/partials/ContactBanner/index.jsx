import React from "react";

import Button from "../../../lib/Button";

const ContactBanner = () => {
  return (
    <div className={` section-padding mb-3`}>
      <p className="text-center p-3 pb-0 fw-medium light-black">
        1st CBSE School in Markapur
      </p>
      <h3 className="h-3 mb-4 text-dark text-center">
        Take a wiser step now for your child's brighter future and give them a
        world <br />
        of opportunities - apply today!
      </h3>
      <div className="d-flex justify-content-center">
        <Button>Contact Us!</Button>
      </div>
    </div>
  );
};

export default ContactBanner;
