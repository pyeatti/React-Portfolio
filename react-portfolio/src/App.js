import React from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div>
        <Nav />
        <About />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/React-Portolio/about">
            <About />
          </Route>
          <Route path="/React-Portolio/portfolio">
            <Portfolio />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}
