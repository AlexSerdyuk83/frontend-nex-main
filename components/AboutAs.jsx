import React from "react";
import clsx from "clsx";
import styles from "../styles/AboutUs.module.css";
import header_img from '../public/assests/product-hd-bg-img.png';
import footer_img from '../public/assests/product-ft-bg-img.png';
import {Card} from './Card';
import {Titles} from './Titles';

const cardsContent = [
  {
    title: 'Does the Owner Even Exist',
    text: 'Let the bot check and cross reference all the little details so you don’t have to!',
    titleStyles: {},
    textStyles: {padding: '0 45px'}
  },
  {
    title: 'Optimal Property',
    text: 'Shape, size and location/location/location, does the property have value?',
    titleStyles: {padding: '0 40px'},
    textStyles: {padding: '0 35px'}
  },
  {
    title: 'Demographic Review',
    text: 'Is this owner(s) in a position to speak about a sale?',
    titleStyles: {},
    textStyles: {padding: '0 45px'}
  }
];

export const AboutAs = () => {
  return (
    <div id="about_us" className={clsx(styles.about_us_container)}>
      <div>
        <img className={clsx(styles.hd_image, 'w-100')} src={header_img.src} alt="Image"/>
      </div>
      <div className={clsx(styles.main_container)}>
        <div
          className={clsx(
            styles.inside_container
          )}
        >
          <div className="p-2">
            <Titles
              firstTitle={'Who we are'}
              secondTitle={'Your enabler in real estate investing'}
              thirdTitle={'Giving you an edge to find the right client with the right type of property'}
              firstTitleClass={clsx(styles.title_first)}
              secondTitleClass={clsx(styles.title_second)}
              thirdTitleClass={clsx(styles.title_third)}
            />
          </div>

          <div className={
            clsx(
              styles.content_cards,
              'd-flex justify-content-between'
            )}
          >
            {
              cardsContent.map((card, idx) => (
                <Card
                  key={idx}
                  title={card.title}
                  text={card.text}
                  classContainer={clsx(styles.card)}
                  titleStyles={card.titleStyles}
                  textStyles={card.textStyles}
                />
              ))
            }
          </div>
        </div>
      </div>
      <div className="mt-4">
        <img className={clsx(styles.hd_image, 'w-100')} src={footer_img.src} alt="Image"/>
      </div>
    </div>
  )
}