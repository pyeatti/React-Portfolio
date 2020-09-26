import React from "react";
import "./style.css";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";

export default function Icons() {
  return (
    <ul className="nav">
      <li className="nav-item">
        <a href="https://github.com">
          <img className="icon" src={github} alt="github icon" />
        </a>
      </li>
      <li className="nav-item">
        <a href="https://linkedin.com">
          <img className="icon" src={linkedin} alt="linkedin icon" />
        </a>
      </li>
      <li className="nav-item">
        <a href="https://instagram.com">
          <img className="icon" src={instagram} alt="instagram icon" />
        </a>
      </li>
      <li className="nav-item">
        <a href="https://twitter.com">
          <img className="icon" src={twitter} alt="twitter icon" />
        </a>
      </li>
    </ul>
  );
}
