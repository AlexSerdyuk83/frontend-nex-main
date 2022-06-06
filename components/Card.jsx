import React from "react";
import clsx from "clsx";
import styles from "../styles/Card.module.css";

export const Card = ({
  title,
  text,
  classContainer,
  titleStyles,
  textStyles
}) => {
  return (
    <div className={clsx(styles.card_item, classContainer, 'text-center')}>
      <p id="first_title" className={clsx(styles.card_item_title, 'text-center')} style={titleStyles}>
        { title }
      </p>
      <p className={clsx(styles.card_item_text, 'text-center')} style={textStyles}>
        { text }
      </p>
    </div>
  );
};
