import React from "react";
import clsx from "clsx";
import styles from "../styles/InvitingBlock.module.css";
import inviting_bg from "../public/assests/inviting-hd-bg.png";
import {Button} from './Button';

export const InvitingBlock = () => {
  return (
    <div className={clsx(styles.inviting_container)}>
      <div>
        <img className={clsx(styles.header_img, 'w-100')} src={inviting_bg.src} alt=""/>
      </div>
      <div className={clsx(styles.main_container)}>
        <div className={clsx(styles.inside_container, 'd-flex justify-content-between')}>
          <p className={clsx(styles.inviting_block_text, 'mb-0')}>
            Ready make your investing more efficient? Get in touch.
          </p>
          <Button
            title={'Contact Us'}
            customClass={clsx(styles.btn)}
          />
        </div>
      </div>
    </div>
  );
};
