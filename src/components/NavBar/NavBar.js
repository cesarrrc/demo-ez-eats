import React from "react";
import classes from "./NavBar.module.css";
// import banner from "../../img/banner.png";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className={classes.nav_container}>
      <div className={classes.logo_container}>
        <Link to="/">
          <img src={'/img/banner.png'} alt="EZ Eatz" />
        </Link>
      </div>
      <nav>
        <Link to='/'>About</Link>
        <Link to='/'>Contact</Link>
      </nav>
    </div>
  );
}
