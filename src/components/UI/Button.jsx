import styles from "./Button.module.css";

function Button({ value, clickHandler }) {
  return (
    <button
      type="button"
      className={styles["control-btn"]}
      onClick={clickHandler}
    >
      {value}
    </button>
  );
}

export default Button;
