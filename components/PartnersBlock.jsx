import React from "react";
import clsx from "clsx";
import styles from "../styles/Partners.module.css";
import google from "../public/assests/google-img.png";
import google_partners from "../public/assests/google-partner-img.png";
import trustpilot from "../public/assests/trustpilot-partner-img.png";

export const PartnersBlock = () => {
  return (
    <div className={clsx(styles.partners_container)}>
      <div className={clsx(styles.main_container)}>
        <div className={clsx(styles.inside_container,
          'd-flex justify-content-evenly align-items-center'
          )}>
          <div className={clsx(styles.partners_item, styles.google_prt_size)}>
            <img src={google_partners.src} alt="Image"/>
          </div>
          <div className={clsx(styles.partners_item, 'p-1')}>
            <img src={trustpilot.src} alt="Image"/>
          </div>
          <div className={clsx(styles.partners_item, 'p-1')}>
            <img src={google.src} alt="Image"/>
          </div>
        </div>
      </div>
    </div>
  )
}