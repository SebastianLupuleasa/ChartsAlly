import React from "react";
import "./Header.css";
import Navbar from "../navbar/Navbar";
import logo from "./chartsally_logo.PNG";

function Header() {
  return (
    <section className="header">
      <section className="header-top">
        <section className="header-top__logo">
          <a href="/" className="header-logo">
            <img src={logo} />
          </a>
        </section>
        <section className="header-top__navbar">
          <section className="header-top__navigation">
            <Navbar />
          </section>
          <hr className="header-top__seperator" />
        </section>
      </section>
      <section className="header-bottom">
        <section className="header-bottom__user">User:lupuleasa</section>
        <section className="header-bottom__email">
          Email:lupuleasas@gmail.com
        </section>
        <section className="header-bottom__logout">Logout</section>
      </section>
    </section>
  );
}

export default Header;
