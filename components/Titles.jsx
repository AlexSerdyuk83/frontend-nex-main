import React from "react";
import clsx from "clsx";
import styles from "../styles/Titles.module.css";

export const Titles = ({
   firstTitle,
   secondTitle,
   thirdTitle,
   firstTitleClass,
   secondTitleClass,
   thirdTitleClass
}) => {
  return (
    <div className={clsx(styles.content_description)}>
      <p className={clsx(styles.description_first, firstTitleClass)}>
        { firstTitle }
      </p>
      <p className={clsx(styles.description_second, secondTitleClass)}>
        { secondTitle }
      </p>
      <p className={clsx(styles.description_third, thirdTitleClass)}>
        { thirdTitle }
      </p>
    </div>
  );
};
