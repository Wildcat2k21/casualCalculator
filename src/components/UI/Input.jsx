import { forwardRef } from "react";
import styles from "./Input.module.css";

const Input = forwardRef(
  ({ value, onChange, onKeyDown, onBlur, labelledby }, ref) => (
    <input
      ref={ref}
      onChange={onChange}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
      className={styles["input-cell"]}
      aria-labelledby={labelledby}
      type="text"
      maxLength={6}
      value={value}
    />
  ),
);

export default Input;
