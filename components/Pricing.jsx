import clsx from 'clsx';
import styles from '../styles/Pricing.module.css'
import bg_header from "../public/assests/pricing-gradient-hd.png";
import bg_footer from "../public/assests/pricing-gradient-ft.png";
import {Titles} from './Titles';
import React from 'react';
import {Card} from './Card';

const soloCardContent = () => {
  return (
    <>
      <p className="text-start mb-4}">Casual investor</p>
      <ul>
        <li className="text-start">$129 month</li>
        <li className="text-start">No commitment, cancel any time</li>
        <li className="text-start">2,400 records processed a month</li>
        <li className="text-start">Savings of over $650 a month!</li>
        <li className="text-start">Supports DataTree & Prycd data feeds</li>
      </ul>
    </>
  );
};

const proCardContent = () => {
  return (
    <>
      <p className="text-start mb-4">Full time</p>
      <ul>
        <li className="text-start">$289 month</li>
        <li className="text-start">No commitment, cancel any time</li>
        <li className="text-start">8,000 records processed a month</li>
        <li className="text-start">Savings over $2,300 a month!</li>
        <li className="text-start">Supports DataTree & Prycd data feeds</li>
      </ul>
    </>
  );
};

const enterpriseCardContent = () => {
  return (
    <>
      <p className="text-start mb-4">Multi person firm</p>
      <ul>
        <li className="text-start">$429 month</li>
        <li className="text-start">No commitment, cancel any time</li>
        <li className="text-start">12,000 records processed a mont</li>
        <li className="text-start">Savings of over $3,400 a month!</li>
        <li className="text-start">Supports DataTree & Prycd data feeds</li>
      </ul>
    </>
  );
};




const cardsContent = [
  {
    title: 'Solo ',
    text: soloCardContent(),
    titleStyles: {paddingLeft: '45px', paddingRight: '45px', marginBottom: '35px'},
    textStyles: {padding: '0 45px'}
  },
  {
    title: 'Pro',
    text: proCardContent(),
    titleStyles: {paddingLeft: '45px', paddingRight: '45px', marginBottom: '35px'},
    textStyles: {padding: '0 45px'}
  },
  {
    title: 'Enterprise',
    text: enterpriseCardContent(),
    titleStyles: {paddingLeft: '45px', paddingRight: '45px', marginBottom: '35px'},
    textStyles: {padding: '0 45px'}
  }
];

const thirdTitleRender = () => {
  return (
    <>
      <p className="mb-0 mt-4">NOW!  Limited time and users!</p>
      <p className="pb-3">FREE to sign-up and process 1 file up to 3,000 records..</p>
    </>
  )
}

export const Pricing = () => {
  return (
    <div id="pricing" className={clsx(styles.pricing_container)}>
      <img className={clsx(styles.hd_image, 'w-100')} src={bg_header.src} alt="Image"/>

      <div className={clsx(styles.main_container)}>
        <div className={clsx(styles.inside_container)}>
          <Titles
            firstTitle={'PRICING'}
            secondTitle={'Increase deal velocity, save money or both!'}
            thirdTitle={thirdTitleRender()}
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

      <img className={clsx(styles.ft_image, 'w-100')} src={bg_footer.src} alt="Image"/>
    </div>
  );
};
