import { Outlet, Link } from "react-router-dom";
import logo from "/images/quiz1/logo.svg";
import about_img from "/images/quiz1/about.jpeg";
import main_img from "/images/quiz1/main.jpeg";

import {
  FaBars,
  FaFacebook,
  FaTwitter,
  FaSquarespace,
  FaWallet,
  FaTree,
  FaSocks,
  FaMap,
} from "react-icons/fa";

import Wrapper from "../../assets/wrappers/quiz1/Tour_14";

const Quiz1LayoutPage_14 = () => {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Wrapper>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <FaBars />
            </button>
          </div>
          <ul className="nav-links" id="nav-links">
            <li>
              <a href="/" className="nav-link">
                {" "}
                TKUDemo{" "}
              </a>
            </li>
            <li>
              <a
                href="#home"
                className="nav-link"
                onClick={(e) => handleScroll(e, "home")}
              >
                {" "}
                home{" "}
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="nav-link"
                onClick={(e) => handleScroll(e, "about")}
              >
                {" "}
                about{" "}
              </a>
            </li>

            <li>
              <a
                href="#services"
                className="nav-link"
                onClick={(e) => handleScroll(e, "services")}
              >
                {" "}
                services{" "}
              </a>
            </li>

            <li>
              <a
                href="#tours"
                className="nav-link"
                onClick={(e) => handleScroll(e, "tours")}
              >
                {" "}
                tours
              </a>
            </li>
          </ul>

          <ul className="nav-icons">
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer"
                className="nav-icon"
              >
                <FaFacebook />
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer"
                className="nav-icon"
              >
                <FaTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer"
                className="nav-icon"
              >
                <FaSquarespace />
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </Wrapper>
  );
};

export default Quiz1LayoutPage_14;
