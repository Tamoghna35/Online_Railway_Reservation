import SearchTrain from "./components/SearchTrain/NewSearchTrain";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/StaticHomePage/Card";
import Services from "./components/StaticHomePage/Services";
import ImageSlider from "./components/Navbar/ImageSlider";
import { Outlet, Link } from "react-router-dom";
import { Footer } from "./components/StaticHomePage/Footer";
import "./App.css";
import img1 from "./assets/train5.jpg";
import img2 from "./assets/train6.jpg";
import img3 from "./assets/train7.jpg";
import img4 from "./assets/train8.jpg";

const slides = [
  { url: img1, title: "train5" },
  { url: img2, title: "train6" },
  { url: img3, title: "train7" },
  { url: img4, title: "train8" },
  { url: img1, title: "train5" },
];
const containerStyles = {
  width: "100%",
  height: "480px",
  margin: "0 auto",
};

const Main = () => {
  return (
    <div className="App">
      <div className="container" style={containerStyles}>
        <ImageSlider slides={slides} />
        <Link to="/find-train">
          {<button className="btn">CHARTS / VACANCY</button>}
        </Link>
      </div>

      <SearchTrain className="cont"></SearchTrain>
      <Card></Card>
      <Services></Services>
      {/* <Footer/> */}
    </div>
  );
};

export default Main;
