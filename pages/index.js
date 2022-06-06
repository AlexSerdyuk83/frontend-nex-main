import React from "react";
import clsx from "clsx";
import { useUser } from "@auth0/nextjs-auth0";
import { Loader } from "../components/Loader";
import Upload from "./upload";
import Image from "next/image";
import Link from "next/link";
import { Pricing } from "../components/Pricing";
import banner from '../public/assests/banner-1.svg'
import landing_ft_bg_img from '../public/assests/home-ft-bg-img.png'
import bottle from '../public/assests/fm-bottle.png'
import icon from '../public/assests/fm-@.png'
import diagram from '../public/assests/fm-diagram.png'
import fox from '../public/assests/fm-fox.png'
import lighting from '../public/assests/fm-lightning.png'
import logo from '../public/assests/fm-logo.png'
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


const logos = [
  bottle,
  number,
  tv,
  fox,
  diagram,
  lighting,
  icon,
  logo
]



export default function Home() {
    const { user, isLoading } = useUser();
    if(isLoading) return <Loader/>
    if(user) {
        return <Upload/>
    }


    return (
        <>
            <div className={styles.bg_container}>
                <div className={clsx(styles.container)}>
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
                            <button className={styles.learnMore}><Link href='/api/auth/login'>Learn More</Link></button>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 text-center">
                            <div className={styles.banner_image}>
                                <Image src={banner} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={clsx(styles.landing_ft)}>
                    <Image src={landing_ft_bg_img}/>
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
                          <Image src={logo}/>
                        </div>
                      ))
                    }
                </div>
            </div>

            <AboutAs/>

            <Processes/>

            <div className={clsx(styles.gradient_block)}>
              <Image src={gradient}/>
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
