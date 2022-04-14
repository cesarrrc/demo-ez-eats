import React from "react";
import classes from "./ButtonNavigation.module.css";
import { Link } from "react-router-dom";

export default function ButtonNavigation({ content, img, path }) {
  return (
    <div className={classes.button_nav_container}>
      <div className={classes.image_container}>
        <img src={img} alt={content} />
        <Link to={`${path}`}>
          <h3 className={classes.content}>{content}</h3>
        </Link>
      </div>
    </div>
  );
}
