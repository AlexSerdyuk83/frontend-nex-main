import React from "react";
import clsx from "clsx";
import styles from "../styles/Partners.module.css";
import Image from "next/image";
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
          <div className={clsx(styles.partners_item, 'p-1')}>
            <Image src={google_partners}/>
          </div>
          <div className={clsx(styles.partners_item, 'p-1')}>
            <Image src={trustpilot}/>
          </div>
          <div className={clsx(styles.partners_item, 'p-1')}>
            <Image src={google}/>
          </div>
        </div>
      </div>
    </div>
  )
}