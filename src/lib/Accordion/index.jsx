import React from "react";
import {
  Accordion as BAccordion,
  Col,
  Row,
  useAccordionButton,
} from "react-bootstrap";
import TextButton from "../TextButton/index";
import { FaArrowRightLong } from "react-icons/fa6";

const Accordion = ({ id, children, title, normal, job, type, location }) => {
  return (
    <BAccordion className="baccordion__container mb-1">
      <BAccordion.Item eventKey={id}>
        {!normal ? (
          <div className="custom__accordion-header d-flex align-items-center justify-content-between">
            <h5>{title}</h5>
            <CustomToggle eventKey={id} />
          </div>
        ) : (
          <BAccordion.Header as="div">
            {job ? (
              <Row className="d-flex justify-content-between w-100">
                <Col>
                  {" "}
                  <h5>{title}</h5>
                </Col>
                <Col className="ms-5">
                  <h5 className="">{type}</h5>
                </Col>
                <Col>
                  <h5 className="ms-5">{location}</h5>
                </Col>
              </Row>
            ) : (
              <h5>{title}</h5>
            )}
          </BAccordion.Header>
        )}
        <BAccordion.Body>{children}</BAccordion.Body>
      </BAccordion.Item>
    </BAccordion>
  );
};

export default Accordion;

const CustomToggle = ({ children, eventKey }) => {
  const handleOnClick = useAccordionButton(eventKey);
  return (
    <TextButton classnames="navy t-2 fw-mediumn" onClick={handleOnClick}>
      <span className="text-decoration-underline">Open</span>{" "}
      <FaArrowRightLong size={18} />
    </TextButton>
  );
};
