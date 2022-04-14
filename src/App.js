import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Router />
    </BrowserRouter>
  );
}

export default App;
