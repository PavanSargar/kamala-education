/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

import LOGO from "../../../assets/logo/logo.svg";

import { Image } from "react-bootstrap";

import styles from "./index.module.css";

const Menu = ({ setToggleMenu }) => {
  const [isActive, setIsActive] = useState("");
  const currentUrl = window.location.pathname;

  useEffect(() => {
    setIsActive(currentUrl.slice(1));
  }, [currentUrl]);
  return (
    <>
      <p>
        <Link
          onClick={() => {
            setIsActive("");
            setToggleMenu(false);
          }}
          className={`${!isActive.length && styles.active} s-1 `}
          to="/"
        >
          Home
        </Link>
      </p>

      <p>
        <Link
          onClick={() => {
            setIsActive("about");
            setToggleMenu(false);
          }}
          className={`${isActive === "about" && styles.active} s-1`}
          to="about"
        >
          About Us
        </Link>
      </p>

      <p>
        <Link
          onClick={() => {
            setIsActive("academic-calendar");
            setToggleMenu(false);
          }}
          className={`${isActive === "academic-calendar" && styles.active} s-1`}
          to="academic-calendar"
        >
          Academic Calendar
        </Link>
      </p>

      <p>
        <Link
          onClick={() => {
            setIsActive("resources");
            setToggleMenu(false);
          }}
          className={`${isActive === "resources" && styles.active} s-1`}
          to="resources"
        >
          Resources
        </Link>
      </p>

      <p>
        <Link
          onClick={() => {
            setIsActive("career");
            setToggleMenu(false);
          }}
          className={`${isActive === "career" && styles.active} s-1`}
          to="career"
        >
          Career
        </Link>
      </p>
      <p>
        <Link
          onClick={() => {
            setIsActive("contact");
            setToggleMenu(false);
          }}
          className={`${isActive === "contact" && styles.active} s-1`}
          to="contact"
        >
          Contact
        </Link>
      </p>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className={`${styles["__navbar"]} `}>
      <div className={styles["__navbar-links"]}>
        <div className={styles["__navbar-links_logo"]}>
          <Link
            className="d-flex h-3 align-items-center gap-2 text-decoration-none"
            to="/"
          >
            <Image src={LOGO} alt="Kamala education" />
            Kamala High School
          </Link>
        </div>
      </div>
      <div className={`${styles["__navbar-links_container"]}`}>
        <Menu />
      </div>

      <div className={styles["__navbar-menu"]}>
        {toggleMenu ? (
          <RiCloseLine
            color="000"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="000"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div
            className={`${styles["__navbar-menu_container"]} ${styles["slide-left"]}`}
          >
            <div className={styles["__navbar-menu_container-links"]}>
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
