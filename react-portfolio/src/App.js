import React from "react";
import Gif from "./assets/IP.gif";

import Welcome from "./components/Welcome";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Pdf from "./assets/IP_Resume.pdf";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <div>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
          <Link
            className="navbar-brand text-dark font-weight-bold float-center"
            to="/"
          >
            <img src={Gif} className="gif" alt="IP" />
          </Link>
          <button
            className="navbar-toggler justify-content-end"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link font-weight-bold text-dark"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link font-weight-bold text-dark"
                  to="/portfolio"
                >
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link font-weight-bold text-dark"
                  href="mailto:pyeatt08@gmail.com"
                >
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link font-weight-bold text-dark"
                  href={Pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resumé
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/">
            <Welcome />
          </Route>
          <Route>
            <Gif />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}
