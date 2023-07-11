import React from "react";

import styles from "./index.module.css";
import { Form } from "react-bootstrap";

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
}) => {
  return (
    <div className={`${styles.input} d-block w-100`}>
      <label htmlFor={label}>
        {label}{" "}
        {required && <span className="text-danger p-1 fw-medium">*</span>}{" "}
      </label>
      {textarea ? (
        <textarea
          placeholder={placeholder}
          type={type}
          onChange={onChange}
          value={value}
          rows={rows}
        />
      ) : select ? (
        <Form.Select value={value} onChange={onChange}>
          <option defaultValue={placeholder}>
            {placeholder}
          </option>
          {options?.map((item) => (
            <option value={item.id}>{item.value}</option>
          ))}
        </Form.Select>
      ) : (
        <input
          className={`${type === "date" && styles.date}`}
          placeholder={placeholder}
          type={type}
          onChange={onChange}
          value={value}
        />
      )}
    </div>
  );
};

export default Input;
