import clsx from 'clsx';
import styles from '../styles/Pricing.module.css'
import Image from "next/image";
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
    <div className={clsx(styles.pricing_container)}>
      <Image src={bg_header}/>

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

      <Image src={bg_footer}/>
    </div>


    // <>
    //   <div style={{ backgroundColor: "#1B1464" }} className="text-center pt-5">
    //     <h1 style={{ color: "#016ECC" }} className="py-3">
    //       Pricing
    //     </h1>
    //     <h2 className={clsx(styles.price_desc, "py-2")}>
    //       Increase deal velocity, <br /> save money or both!
    //     </h2>
    //     <h3
    //       style={{ color: "#D12B2B", fontWeight: "bold", fontSize: "36px" }}
    //       className={clsx(styles.price_offer, "py-3")}
    //     >
    //       NOW! Limited time and users! <br /> FREE to sign-up and process 1 file
    //       up to 3,000 records.
    //     </h3>
    //     <div
    //       className={clsx(
    //         styles.container,
    //         "row my-3 p-4 d-flex justify-content-evenly"
    //       )}
    //     >
    //       <div
    //         style={{ width: "350px", borderRadius: "20px" }}
    //         className="col-12 col-sm-12 col-md-4 col-lg-4 p-4 my-2 shadow-sm bg-white"
    //       >
    //         <h2 style={{ color: "#1B1464" }} className="text-center">
    //           Solo
    //         </h2>
    //         <p style={{ fontSize: "16px", fontWeight: "bold", opacity: 0.7 }}>
    //           {" "}
    //           Casual investor
    //         </p>
    //         <div className="d-flex text-start">
    //           <ul style={{ fontSize: "18px", opacity: 0.8 }}>
    //             <li>$129 per month</li>
    //             <li>No commitment, cancel any time</li>
    //             <li>2,400 records processed a month</li>
    //             <li>Savings of over $650 a month!</li>
    //             <li>Supports DataTree & Prycd data feeds</li>
    //           </ul>
    //         </div>
    //       </div>
    //       <div
    //         style={{ width: "340px", borderRadius: "20px" }}
    //         className="col-12 col-sm-12 col-md-4 col-lg-4 p-4 my-2 shadow-sm  bg-white"
    //       >
    //         <h2 style={{ color: "#1B1464" }} className="text-center">
    //           Pro
    //         </h2>
    //         <p style={{ fontSize: "16px", fontWeight: "bold", opacity: 0.7 }}>
    //           {" "}
    //           Full time
    //         </p>
    //         <div className="d-flex text-start">
    //           <ul style={{ fontSize: "18px", opacity: 0.8 }}>
    //             <li>$289 per month</li>
    //             <li>No commitment, cancel any time</li>
    //             <li>8,000 records processed a month</li>
    //             <li>Savings over $2,300 a month!</li>
    //             <li>Supports DataTree & Prycd data feeds</li>
    //           </ul>
    //         </div>
    //       </div>
    //       <div
    //         style={{ width: "340px", borderRadius: "20px" }}
    //         className="col-12 col-sm-12 col-md-4 col-lg-4 p-4 my-2 shadow-sm  bg-white"
    //       >
    //         <h2 style={{ color: "#1B1464" }} className="text-center">
    //           Enterprise
    //         </h2>
    //         <p style={{ fontSize: "16px", fontWeight: "bold", opacity: 0.7 }}>
    //           {" "}
    //           Multi Purpose Firm
    //         </p>
    //         <div className="d-flex text-start">
    //           <ul style={{ fontSize: "18px", opacity: 0.8 }}>
    //             <li>$412 per month</li>
    //             <li>No commitment, cancel any time</li>
    //             <li>12,000 records processed a month</li>
    //             <li>Savings over $3,400 a month!</li>
    //             <li>Supports DataTree, Prycd & custom data feeds</li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
};
