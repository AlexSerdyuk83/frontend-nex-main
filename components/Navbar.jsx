import clsx from "clsx";
import Image from "next/image";
import styles from "../styles/Landing.module.css";
import React from "react";
import reworkedlogo from "../public/assests/reworked-rei.png";
import Link from "next/link";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0";
import {Button} from './Button';

const navItem = [
  {
    title: "Home",
    to: "/",
    active: true,
  },
  {
    title: "Product",
    to: "/",
    active: true,
  },
  {
    title: "Process",
    to: "/",
    active: true,
  },
  {
    title: "Pricing",
    to: "/",
    active: false,
  },
  {
    title: "Contact",
    to: "/",
    active: true,
  },
  {
    title: "Login",
    to: "/api/auth/login",
    active: false,
  },
];

export const Navbar = () => {
  const router = useRouter();
  const { user, isLoading } = useUser();

  return (
    <div className={clsx(styles.bg_container, 'shadow')}>
      <div className={clsx(styles.container)}>
        <nav className="d-flex justify-content-between align-items-center">
          <div className={clsx(styles.nav_logo)}>
            <Image onClick={()=>{window.location.href='/'}} src={reworkedlogo} alt="logo" />
          </div>
          <div className="d-none d-lg-block d-xl-block">
            <ul className={clsx(styles.nav_ul, "d-flex")}>
            {navItem.map((item, i) => {
                return (
                  <Link key={i} href={item.title === "Login" && user ? '/api/auth/logout':item.to}>
                    <a
                      id="item_nav_link"
                      className={clsx(
                        router.pathname == item.to ? styles.active : "",
                        styles.nav_font,
                        'ms-0'
                      )}
                    >
                      <li
                        className={
                          `list-unstyled
                          ${item.title !== 'Login'
                            ? 'h-100 px-3 d-flex flex-column justify-content-center'
                            : 'p-0 ms-4'}`
                        }
                      >
                        {
                          item.title === 'Login'
                            ? <Button
                              title={item.title === "Login" && user ? "Logout" : item.title}
                              customClass={clsx(styles.header_btn)}
                            />
                            : `${item.title === "Login" && user ? "Logout" : item.title}`
                        }
                      </li>
                    </a>
                  </Link>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
