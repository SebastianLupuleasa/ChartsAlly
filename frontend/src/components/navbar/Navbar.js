import React from "react";

import "./Navbar.css";

function Navbar() {
  return (
    <section className="navbar">
      <a href="/" className="navbar-item">
        Home
      </a>
      <a href="/about" className="navbar-item">
        About
      </a>
      <a href="/charts" className="navbar-item">
        Charts
      </a>
      <a href="/import" className="navbar-item">
        Import
      </a>
    </section>
  );
}

export default Navbar;
