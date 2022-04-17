import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Trailer from "./pages/Trailer/Trailer";
import BeerWine from "./pages/BeerWine/BeerWine";
import EzEatzKitchen from "./pages/EZ-eatz-kitchen/EzEatzKitchen";
import MealPrep from "./pages/MealPrep/MealPrep";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/trailer" element={<Trailer />} />
      <Route path="/kitchen" element={<EzEatzKitchen />} />
      <Route path="/beer&wine" element={<BeerWine />} />
      <Route path="/mealprep" element={<MealPrep />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
