import React from "react";
import classes from "./Footer.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { Button } from "@mui/material";

export default function Footer() {
  return (
    <footer className={classes.footer_container}>
      <div className={classes.grid_container}>
        <nav>
          <a href="https://www.instagram.com/ezeatstx/">
            <Button style={{color:'inherit'}}>
              <InstagramIcon className={classes.icon} />
            </Button>
          </a>
          <FacebookIcon className={classes.icon} />
          <AlternateEmailIcon className={classes.icon} />
        </nav>
        <p>© by Cesar Cisneros</p>
      </div>
    </footer>
  );
}
