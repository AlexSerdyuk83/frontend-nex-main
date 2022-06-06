import React from "react";
import clsx from "clsx";
import styles from "../styles/Product.module.css";
import {Titles} from './Titles';
import {Card} from './Card';

const cardsContent = [
  {
    title: 'Data Validation',
    text: 'Garbage in garbage out, working to ensure the targeted clients will receive your message',
    titleStyles: {paddingLeft: '45px', paddingRight: '45px'},
    textStyles: {padding: '0 45px'}
  },
  {
    title: 'Applied AI',
    text: 'Going beyond predictive analytics to allow the bot to learn from feedback',
    titleStyles: {padding: '0 40px'},
    textStyles: {padding: '0 35px'}
  },
  {
    title: 'Demographic Review',
    text: 'Understanding the ideal property owner composition',
    titleStyles: {},
    textStyles: {padding: '0 45px'}
  },
  {
    title: 'Confidentiality',
    text: 'No eyes see your data, the bot processes and returns all with out the aid of people',
    titleStyles: {},
    textStyles: {padding: '0 45px'}
  },
  {
    title: 'Repitition',
    text: 'With a feedback loop we are able to more accuratly predict with AI the righth targets',
    titleStyles: {padding: '0 40px'},
    textStyles: {padding: '0 35px'}
  },
  {
    title: 'Data support',
    text: 'Currently support FirstAmerican, DataTree and more!',
    titleStyles: {},
    textStyles: {padding: '0 45px'}
  }
];

export const Product = () => {
  return (
    <div className={clsx(styles.product_container)}>
      <div className={clsx(styles.main_container)}>
        <div className={clsx(styles.inside_container)}>
          <Titles
            firstTitle={'Process'}
            secondTitle={'How We Deliver Results'}
            thirdTitle={'As the industry first we are allowing AI and machine learning for every real estate investor!'}
            firstTitleClass={clsx(styles.title_first)}
            secondTitleClass={clsx(styles.title_second)}
            thirdTitleClass={clsx(styles.title_third)}
          />
          <div className={
            clsx(
              styles.content_cards,
              'd-flex flex-wrap justify-content-between mt-5'
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
    </div>
  );
};
