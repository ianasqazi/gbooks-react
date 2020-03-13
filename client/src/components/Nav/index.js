import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
      <a className="navbar-brand" href="/">
      <div id="logo">
    <div class="g-line"></div>
    <span class="red"></span>
    <span class="yellow"></span>
    <span class="green"></span>
    <span class="blue"></span>
  </div>
  <p>oogle Logo</p>      </a>
      <div className="navbar-nav">
        <a className="nav-link" href="/">Search</a>
        <a className="nav-link" href="/saved">Saved</a>
      </div>
    </nav>
  );
}

export default Nav;
