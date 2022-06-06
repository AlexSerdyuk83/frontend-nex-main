import React from "react";
import clsx from "clsx";
import styles from "../styles/Processes.module.css";
import first_img from "../public/assests/process-img-first.png";
import second_img from "../public/assests/process-img-second.png";
import {Titles} from './Titles';
import {Button} from './Button';

export const Processes = () => {
  return (
    <div id="product" className={clsx(styles.processes_container)}>
      <div className={clsx(styles.main_container)}>
        <div className={clsx(styles.inside_container)}>
          <div className="row mx-0 py-4">
            <div className="col-sm-6 ps-0">
              <img src={first_img.src} alt="Image"/>
            </div>
            <div className="col-sm-6 pe-0">
              <Titles
                firstTitle={'Bringing AI to REI'}
                secondTitle={'We utilize AI and multiple databases to Re-Work your target list for succes'}
                thirdTitle={'Going beyond the linear data base to harness AI and access multiple data bases to change your data to actionable information'}
                firstTitleClass={clsx(styles.title_first)}
                secondTitleClass={clsx(styles.title_second)}
                thirdTitleClass={clsx(styles.title_third)}
              />
              <Button
                title={'Learn more'}
                customClass={clsx(styles.first_btn, styles.btn)}
              />
            </div>
          </div>
          <div className="row mx-0 py-4">
            <div className="col-sm-6 ps-0">
              <Titles
                firstTitle={'Innnovating REI'}
                secondTitle={'A bot that continually learns'}
                thirdTitle={'Introducing, Betty, a bot that doesn’t stop learning!'}
                firstTitleClass={clsx(styles.title_first)}
                secondTitleClass={clsx(styles.title_second)}
                thirdTitleClass={clsx(styles.title_third)}
              />
              <Button
                title={'Learn more'}
                customClass={clsx(styles.second_btn, styles.btn)}
              />
            </div>
            <div className="col-sm-6 pe-0 content-image-container">
              <img src={second_img.src} alt="Image"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
