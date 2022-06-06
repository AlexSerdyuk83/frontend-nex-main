import clsx from "clsx";
import styles from "../styles/Button.module.css";
import React from "react";

export const Button = ({ title, customClass }) => {
  return (
    <button
      className={clsx(styles.btn_container, customClass)}
      type="button"
    >
      { title }
    </button>
  );
};
