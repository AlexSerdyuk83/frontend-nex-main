import React from "react";
import clsx from "clsx";
import styles from "../styles/ContactsBlock.module.css";

export const ContactsBlock = () => {
  return (
    <div id="contacts" className={clsx(styles.contacts_container)}>
      <div className={clsx(styles.main_container)}>
        <div className={clsx(
          styles.inside_container,
          'd-flex justify-content-between'
        )}>

          <div className={clsx(
            styles.contacts_block_card,
            'd-flex flex-column justify-content-between'
          )}>
            <div className={clsx(styles.contacts_block_card_item)}>
              <div className={clsx(styles.block_card_item_title)}>
                About Us
              </div>
              <div className={clsx(styles.block_card_item_text, styles.custom_width, 'mt-4')}>
                ReWorkedREI is an app that helps customers
              </div>
            </div>
            <div className={clsx(styles.contacts_block_card_item, styles.custom_height)}>
              <div className={clsx(styles.block_card_item_title)}>
                Payments Accepted
              </div>
              <div className={clsx(styles.block_card_item_text, 'd-flex mt-4')}>
                <div className={clsx(styles.card_item_text)}>PayPal</div>
                <div className={clsx(styles.card_item_text)}>Visa</div>
                <div className={clsx(styles.card_item_text)}>MasterCard</div>
              </div>
            </div>
          </div>

          <div className={clsx(
            styles.contacts_block_card,
            'd-flex flex-column justify-content-between'
          )}>
            <div className={clsx(styles.contacts_block_card_item)}>
              <div className={clsx(styles.block_card_item_title)}>
                Contact Info
              </div>
              <div className={clsx(styles.block_card_item_text, styles.title_first, 'mt-4')}>
                admin@reworkedrei.com
              </div>
            </div>
            <div className={clsx(styles.contacts_block_card_item, styles.custom_height)}>
              <div className={clsx(styles.block_card_item_title)}>
                Be Social
              </div>
            </div>
          </div>

          <div className={clsx(
            styles.contacts_block_card,
            'd-flex flex-column justify-content-between'
          )}>
            <div className={clsx(styles.contacts_block_card_item)}>
              <div className={clsx(styles.block_card_item_title)}>
                Recent Posts
              </div>
            </div>

            <div className={clsx(styles.contacts_block_card_item)}>
              <div className={clsx(styles.block_card_item_title, 'mt-3')}>
                <p className={clsx(styles.title_first, 'mb-0')}>Banking With Digital Currency</p>
                <p className={clsx(styles.title_second)}>March 1, 2021</p>
              </div>
            </div>

            <div className={clsx(styles.contacts_block_card_item)}>
              <div className={clsx(styles.block_card_item_title)}>
                <p className={clsx(styles.title_first, 'mb-0')}>Can I Mine And Is It Worth It?</p>
                <p className={clsx(styles.title_second)}>February 18, 2021</p>
              </div>
            </div>

            <div className={clsx(styles.contacts_block_card_item)}>
              <div className={clsx(styles.block_card_item_title)}>
                <p className={clsx(styles.title_first, 'mb-0')}>How Blockchain Is Redefining Trust</p>
                <p className={clsx(styles.title_second)}>February 14, 2021</p>
              </div>
            </div>

            <div className={clsx(styles.contacts_block_card_item)}>
              <div className={clsx(styles.block_card_item_title)}>
                <p className={clsx(styles.title_first, 'mb-0')}>Effective Product Promo Videos</p>
                <p className={clsx(styles.title_second)}>February 10, 2021</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
