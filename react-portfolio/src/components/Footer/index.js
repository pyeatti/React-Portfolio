import React from "react";
import Icons from "../Icons";
import github from "../../assets/githubb.png";
import linkedin from "../../assets/linkedinb.png";
import instagram from "../../assets/instagramb.png";
import twitter from "../../assets/twitterb.png";

export default function Footer() {
  return (
    <nav className="navbar navbar-light bg-transparent mt-5 pt-4 fixed-bottom">
      <p className="text-dark nav-item">IAN PYEATT ©</p>
      <ul className="nav">
        <li className="nav-item pl-3 pb-2">
          <a href="https://github.com/pyeatti">
            <img
              className="icon  justify-content-center"
              src={github}
              alt="github icon"
            />
          </a>
        </li>
        <li className="nav-item pl-3 pb-2">
          <a href="https://linkedin.com">
            <img className="icon" src={linkedin} alt="linkedin icon" />
          </a>
        </li>
        <li className="nav-item pl-3 pb-2">
          <a href="https://instagram.com/ianpyeatt">
            <img className="icon" src={instagram} alt="instagram icon" />
          </a>
        </li>
        <li className="nav-item pl-3 pb-2">
          <a href="https://twitter.com/ianpyeatt">
            <img className="icon" src={twitter} alt="twitter icon" />
          </a>
        </li>
      </ul>
    </nav>
  );
}
