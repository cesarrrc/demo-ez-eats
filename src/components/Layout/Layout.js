import classes from "./Layout.module.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

export default function Layout(props) {
  return (
    <div className={classes.layout_container}>
      <NavBar />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}
