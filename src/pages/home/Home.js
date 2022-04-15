import React from "react";
import ButtonNavigation from "../../components/ButtonNavigation/ButtonNavigation";
import classes from "./Home.module.css";

export default function Home() {
  return (
      <div className={classes.grid_container}>
        <ButtonNavigation
          content="Trailers/Food Tents"
          img={"/img/foodtrailer.png"}
          path="/trailer"
        />
        <ButtonNavigation
          content="Beer & Wine Dinners"
          img={"/img/beer-wine.png"}
          path="/beer&wine"
        />
        <ButtonNavigation
          content="EZ Eatz Kitchen"
          img={"/img/catering.png"}
          path="/kitchen"
        />
        <ButtonNavigation
          content="Meal Prep"
          img={"/img/meal-prep.png"}
          path="/mealprep"
        />
      </div>
  )
}
