import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark mb-3">
      <a className="navbar-brand" href="/">
        <span id="g1">G</span>
        <span id="o1">O</span>
        <span id="o2">O</span>
        <span id="g2">G</span>
        <span id="l1">L</span>
        <span id="e1">E</span>

      </a>
      <div className="navbar-nav right">
        <a className="nav-link" href="/">Search</a>
        <a className="nav-link" href="/saved">Saved</a>
      </div>
    </nav>
  );
}

export default Nav;
