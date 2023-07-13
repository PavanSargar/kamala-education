import React from "react";

import { FaChevronDown } from "react-icons/fa6";

import styles from "./index.module.css";
import { Form } from "react-bootstrap";
import Accordion from "../Accordion";

const Input = ({
  label,
  type,
  value,
  placeholder,
  textarea,
  select,
  onChange,
  required,
  rows,
  options,
  primary,
}) => {
  const selectStyle = {
    color: value !== placeholder ? "black" : "red",
  };
  return (
    <div className={`${styles.input} d-block w-100`}>
      <label htmlFor={label}>
        {label}{" "}
        {required && <span className="text-danger p-1 fw-medium">*</span>}{" "}
      </label>
      <div className={`${styles["input-container"]}`}>
        {textarea ? (
          <textarea
            placeholder={placeholder}
            type={type}
            onChange={onChange}
            value={value}
            rows={rows}
            className={`${primary && styles.primary}`}
          />
        ) : select ? (
          <Form.Select
            className={`${primary && styles.primary}`}
            value={value}
            onChange={onChange}
            defaultValue={placeholder}
            style={{ color: value ? "black" : "gray" }}
          >
            <option defaultValue={placeholder}>{placeholder}</option>
            {options?.map((item) => (
              <option value={item.id}>{item.value}</option>
            ))}
          </Form.Select>
        ) : (
          <input
            className={`${type === "date" && styles.date} ${
              primary && styles.primary
            }`}
            placeholder={placeholder}
            type={type}
            onChange={onChange}
            value={value}
          />
        )}
      </div>
    </div>
  );
};

export default Input;
