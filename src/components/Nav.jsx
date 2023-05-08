import React, { useState } from "react";
import '../css/styles.css'
import iiitsLogo from '../assets/images/logos/iiits.png'
import useScrollAnimation from "../functions/useScrollAnimation";
import { smoothScroll } from "../functions/smoothScroll";
import CheckToggle from "../functions/CheckToggle";


const Nav = () => {

  useScrollAnimation();
  const [active, setActive] = useState(null);
  const handleClick = (event) => {
    const hash = event.currentTarget.hash;

    if (hash !== '') {
      smoothScroll(hash, event);
    }
  };





  return (
    <nav id="nav-1" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            id="navBtn"
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#myNavbar"
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#myPage">
            {" "}
            <img src={iiitsLogo} alt="Logo" />{" "}
          </a>
        </div>
        <div
          className="collapse navbar-collapse "
          id="myNavbar"
          onclick="checkToggle()"
        >
          <ul className="nav navbar-nav navbar-right">
            <li
              data-key="home"
            >
              <a className="about-nav" href="#about"
                onClick={handleClick}
              >
                ABOUT
              </a>
            </li>
            <li
              data-key="speakers"
            >
              <a className="speakers-nav" href="#speakers"
                onClick={handleClick}
              >
                SPEAKERS
              </a>
            </li>
            <li
              data-key="committee"
            >
              <a className="committee-nav" href="#committee"
                onClick={handleClick}
              >
                COMMITTEE
              </a>
            </li>

            <li
              data-key="program"
            >
              <a className="program-nav" href="#program"
                onClick={handleClick}
              >
                PROGRAM
              </a>
            </li>
            <li
              data-key="registration"
            >
              <a className="registration-nav" href="#registration"
                onClick={handleClick}
              >
                REGISTRATION
              </a>
            </li>
            <li
              data-key="sponsors"
            >
              <a className="organizer-nav" href="#sponsors"
                onClick={handleClick}
              >
                SPONSORS
              </a>
            </li>
            <li
              id="organizers"
              data-key="sponsors-organizers"
            >
              <a className="organizer-nav" href="#sponsors-organizers"
                onClick={handleClick}
              >
                ORGANIZERS
              </a>
            </li>
            <li
              data-key="location"
            >
              <a className="location-nav" href="#location"
                onClick={handleClick}
              >
                WADLA 1.0
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
