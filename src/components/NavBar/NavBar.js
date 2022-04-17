import React, { useState } from "react";
import classes from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { IconButton, Button, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import MailIcon from "@mui/icons-material/Mail";
import EventIcon from "@mui/icons-material/Event";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function NavBar() {
  const [drawer, setDrawer] = useState(false);

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  return (
    <div className={classes.nav_container}>
      <div className={classes.logo_container}>
        <Link to="/">
          <Button className={classes.button_logo}>
            <img src={"/img/banner.png"} alt="EZ Eatz" />
          </Button>
        </Link>
      </div>
      <div className={classes.logo_container_2}>
        <Link to="/">
          <Button className={classes.button_logo}>
            <img src={"/img/small-logo.png"} alt="EZ Eatz" />
          </Button>
        </Link>
      </div>
      <nav className={classes.nav}>
        <Link to="/">
          <Button className={classes.button_main}>
            <HomeIcon style={{ fontSize: "20px" }} />
            &nbsp;Home
          </Button>
        </Link>
        <Link to="/">
          <Button className={classes.button_main}>
            <LocationOnIcon style={{ fontSize: "20px" }} />
            &nbsp;Locations
          </Button>
        </Link>
        <Link to="/">
          <Button className={classes.button_main}>
            <MenuBookIcon style={{ fontSize: "20px" }} />
            &nbsp;Menus
          </Button>
        </Link>
        <Link to="/">
          <Button className={classes.button_main}>
            <EventIcon style={{ fontSize: "20px" }} />
            &nbsp;Events
          </Button>
        </Link>
        <Link to="/">
          <Button className={classes.button_main}>
            <EmojiPeopleIcon style={{ fontSize: "20px" }} />
            &nbsp;About
          </Button>
        </Link>
        <Link to="/">
          <Button className={classes.button_main}>
            <MailIcon style={{ fontSize: "20px" }} />
            &nbsp;Contact
          </Button>
        </Link>
      </nav>
      <nav className={classes.nav_2}>
        <IconButton
          className={classes.hamburger}
          color="inherit"
          onClick={toggleDrawer}
        >
          <MenuIcon fontSize="large" />
        </IconButton>
      </nav>
      <Drawer
        open={drawer}
        onClose={toggleDrawer}
        anchor="right"
        classes={{ paper: classes.drawer }}
      >
        <nav className={classes.drawer_nav}>
          <Link to="/">
            <Button
              className={classes.button}
              onClick={toggleDrawer}
              style={{ color: "black" }}
            >
              <HomeIcon />
              &nbsp;Home
            </Button>
          </Link>
          <Link to="/menu">
            <Button
              className={classes.button}
              onClick={toggleDrawer}
              style={{ color: "black" }}
            >
              <MenuBookIcon />
              &nbsp;Menu
            </Button>
          </Link>
          <Link to="/events">
            <Button
              className={classes.button}
              onClick={toggleDrawer}
              style={{ color: "black" }}
            >
              <EventIcon />
              &nbsp;Events
            </Button>
          </Link>
          <Link to="/locations">
            <Button
              className={classes.button}
              onClick={toggleDrawer}
              style={{ color: "black" }}
            >
              <LocationOnIcon />
              &nbsp;Locations
            </Button>
          </Link>
          <Link to="/contact">
            <Button
              className={classes.button}
              onClick={toggleDrawer}
              style={{ color: "black" }}
            >
              <MailIcon />
              &nbsp;Contact
            </Button>
          </Link>
          <Link to="/about">
            <Button
              className={classes.button}
              onClick={toggleDrawer}
              style={{ color: "black" }}
            >
              <EmojiPeopleIcon />
              &nbsp;About
            </Button>
          </Link>
        </nav>
      </Drawer>
    </div>
  );
}
