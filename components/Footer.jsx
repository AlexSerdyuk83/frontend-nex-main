import React from "react";
import clsx from "clsx";
import styles from "../styles/Footer.module.css";

export const Footer = () => {
  return (
    <div className={clsx(styles.footer_container)}>
      <div className={clsx(styles.main_container)}>
        <div className={clsx(
          styles.inside_container,
          'd-flex justify-content-center align-items-center py-4'
        )}>
          <p className="mb-0">
            Copyright © 2022 reworkedREI All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  )
}