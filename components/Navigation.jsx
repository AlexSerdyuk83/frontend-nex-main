import clsx from "clsx";
import styles from "../styles/Navigation.module.css";
import logo from "../public/assests/reworked-rei.png";
import React from 'react';
import {Button} from './Button';

const navItem = [
  {
    title: "Home",
    to: "/",
    active: true,
  },
  {
    title: "Product",
    to: "#product",
    active: true,
  },
  {
    title: "Process",
    to: "#processes",
    active: true,
  },
  {
    title: "Pricing",
    to: "#pricing",
    active: false,
  },
  {
    title: "Contact",
    to: "#contacts",
    active: true,
  }
];

export const Navigation = () => {
  return (
    <nav className={clsx(styles.navigation_container, "navbar navbar-expand-lg")}>
      <div className="navbar-brand" href="#">
        <img className={clsx(styles.nav_logo)} src={logo.src} alt="Logo"/>
      </div>

      <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
        <ul className="navbar-nav align-items-center">
          {
            navItem.map((item) => (
              <li key={item.title} className={clsx(styles.nav_font, "nav-item")}>
                <a className="nav-link" aria-current="page" href={item.to}>{item.title}</a>
              </li>
            ))
          }
          <li>
            <Button
              title={"Login"}
              customClass={clsx(styles.header_btn)}
            />
          </li>
        </ul>
      </div>
  </nav>
  )
}