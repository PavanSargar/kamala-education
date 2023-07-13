import React from "react";
import Accordion from "../../../lib/Accordion";

const Documents = () => {
  return (
    <div className={`section-padding my-5`}>
      <div className="mb-5">
        <h3 className="h-3 text-dark text-center">Certificates</h3>
        <div className={`mt-3`}>
          <Accordion id={1} title={"TRUST CERTIFICATE"}>
            <p>This is the data for this accordion</p>
          </Accordion>
          <Accordion id={1} title={"TRUST CERTIFICATE"}>
            <p>This is the data for this accordion</p>
          </Accordion>
          <Accordion id={1} title={"TRUST CERTIFICATE"}>
            <p>This is the data for this accordion</p>
          </Accordion>
          <Accordion id={1} title={"TRUST CERTIFICATE"}>
            <p>This is the data for this accordion</p>
          </Accordion>
        </div>
      </div>

      <div className="mb-5">
        <h3 className="h-3 text-dark text-center">Result and Academics</h3>
        <div className={`mt-3`}>
          <Accordion id={1} title={"TRUST CERTIFICATE"}>
            <p>This is the data for this accordion</p>
          </Accordion>
        </div>
      </div>

      <div>
        <h3 className="h-3 text-dark text-center">Youtube Links</h3>
        <div className={`mt-3`}>
          <Accordion id={1} title={"TRUST CERTIFICATE"}>
            <p>This is the data for this accordion</p>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Documents;
