import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar mb-4">
      <a className="navbar-brand" href="/">
        <span id="g1">G</span>
        <span id="o1">O</span>
        <span id="o2">O</span>
        <span id="g2">G</span>
        <span id="l1">L</span>
        <span id="e1">E</span>
        <span id="subBooks">&#32;&#32;&#32;BOOKS</span>

      </a>
      <div className="navbar-nav right">
        <a className="nav-link" href="/">Search</a>
        <a className="nav-link" href="/saved">Saved</a>
      </div>
    </nav>

  );
}

export default Nav;
