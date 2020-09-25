import React from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
          <Link
            className="navbar-brand text-white font-weight-bold float-right"
            to="/"
          >
            IAN PYEATT
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link font-weight-bold text-light"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link font-weight-bold text-light"
                  to="/portfolio"
                >
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link font-weight-bold text-light"
                  href="https://github.com/pyeatti"
                >
                  GitHub
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link font-weight-bold text-light"
                  href="https://www.linkedin.com/in/ian-pyeatt-3682791ab/"
                >
                  LinkedIn
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link font-weight-bold text-light"
                  href="mailto:pyeatt08@gmail.com"
                >
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link font-weight-bold text-light"
                  href="./assets/IP_Resume.pdf"
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
            <About />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
