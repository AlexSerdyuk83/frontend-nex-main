import React from "react";
import clsx from "clsx";
import styles from "../styles/TotalData.module.css";

export const TotalData = () => {
  return (
    <div className={clsx(styles.total_data_container)}>
      <div className={clsx(styles.main_container)}>
        <div className={clsx(styles.inside_container)}>
          <div className={clsx(styles.resume_content_container, 'row justify-content-center')}>
            <div className={clsx(styles.resume_content, 'me-3')}>
              <p className={clsx(styles.resume_content_count, 'text-center mb-0')}>
                72,000
              </p>
              <p className={clsx(styles.resume_content_text, 'text-center mb-0 mt-2')}>
                Rows Processed
              </p>
            </div>
            <div className={clsx(styles.resume_content, 'ms-3')}>
              <p className={clsx(styles.resume_content_count, 'text-center mb-0')}>
                36,000
              </p>
              <p className={clsx(styles.resume_content_text, 'text-center mb-0 mt-2')}>
                Mailers Saved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
