import React from "react";
import clsx from "clsx";
import { Pricing } from "../components/Pricing";
import banner from '../public/assests/banner-1.svg'
import landing_ft_bg_img from '../public/assests/home-ft-bg-img.png'
import bottle from '../public/assests/fm-bottle.png'
import icon from '../public/assests/fm-@.png'
import diagram from '../public/assests/fm-diagram.png'
import fox from '../public/assests/fm-fox.png'
import lighting from '../public/assests/fm-lightning.png'
import logo_lg from '../public/assests/fm-logo.png'
import number from '../public/assests/fm-number.png'
import tv from '../public/assests/fm-tv.png';
import gradient from '../public/assests/gradient-block.png';
import styles from "../styles/Landing.module.css";
import {AboutAs} from '../components/AboutAs';
import {Processes} from '../components/Processes';
import {Product} from '../components/Product';
import {TotalData} from '../components/TotalData';
import {PartnersBlock} from '../components/PartnersBlock';
import {InvitingBlock} from '../components/InvitingBlock';
import {Footer} from '../components/Footer';
import {ContactsBlock} from '../components/ContactsBlock';
import {Navigation} from '../components/Navigation';
import {Button} from '../components/Button';


const logos = [
  bottle,
  number,
  tv,
  fox,
  diagram,
  lighting,
  icon,
  logo_lg
];

export default function Home() {
    return (
        <>
            <div className={styles.bg_container}>
                <div className={clsx(styles.container)}>

                  <Navigation/>

                    <div className="row px-5">
                        <div className="col-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center align-items-center align-items-sm-center align-items-lg-start ">
                            <p className={clsx(styles.first_title)}>Innovating REI</p>
                            <p
                              className={clsx(styles.second_title, styles.banner_heading,
                                'mt-2 mb-0')
                              }
                            >
                                Game Changing AI to Real Estate Investing!
                            </p>
                            <p
                              className={clsx(styles.third_title, styles.banner_heading, 'mt-2 mb-0')}
                            >
                                Harnassing AI to hyper target your potential clients
                            </p>
                          <Button
                            title={"Learn More"}
                            customClass={clsx(styles.header_btn)}
                          />
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 text-center">
                            <div className={styles.banner_image}>
                              <img src={banner.src} alt="Banner"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img className={clsx(styles.landing_ft)} src={landing_ft_bg_img.src} alt=""/>
                </div>
            </div>

            <div className={
              clsx(styles.landing_logos, 'd-flex align-items-center')
              }
            >
                <div className={clsx(styles.container, 'w-100 d-flex align-items-center justify-content-between')}>
                    {
                      logos.map((logo, idx) => (
                        <div key={idx}>
                          <img src={logo.src} alt="Logo"/>
                        </div>
                      ))
                    }
                </div>
            </div>

            <AboutAs/>

            <Processes/>

            <div className={clsx(styles.gradient_block)}>
              <img src={gradient.src} alt=""/>
            </div>

            <Product/>

            <TotalData/>

            <Pricing/>

            <PartnersBlock/>

            <InvitingBlock/>

            <ContactsBlock/>

            <Footer/>
        </>
    );
}
