import "./Card.css";
import img1 from "../../assets/train5.jpg";
import img2 from "../../assets/train6.jpg";
import img3 from "../../assets/train7.jpg";
import img4 from "../../assets/train8.jpg";
import img5 from "../../assets/train9.jpg";
import img6 from "../../assets/train10.jpg";

const Card = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <h1 align="center" style={{ color: "#2B3080" }}>
        Some Scenic Train Routes !
      </h1>
      <br />
      <div className="box">
        <div className="card">
          <div className="imgBx">
            <img src={img1} alt="images" />
          </div>
          <div className="details">
            <h2>
            Unicorn
              <br />
              <span>Siliguri to Darjeeling</span>
            </h2>
          </div>
        </div>

        <div className="card">
          <div className="imgBx">
            <img src={img2} alt="images" />
          </div>
          <div className="details">
            <h2>
                The Tachypomp
              <br />
              <span>Kolkata To Mumbai</span>
            </h2>
          </div>
        </div>

        <div className="card">
          <div className="imgBx">
            <img src={img3} alt="images" />
          </div>
          <div className="details">
            <h2>
              MilkyWay
              <br />
              <span>Vasco Da Gama to Londa</span>
            </h2>
          </div>
        </div>


        <div className="card">
          <div className="imgBx">
            <img src={img4} alt="images" />
          </div>
          <div className="details">
            <h2>
              Sea Driller
              <br />
              <span>Kanyakumari to Thiruvananthapuram</span>
            </h2>
          </div>
        </div>

        <div className="card">
          <div className="imgBx">
            <img src={img5} alt="images" />
          </div>
          <div className="details">
            <h2>
             Rock Climber
              <br />
              <span>Matheran Hill Railway</span>
            </h2>
          </div>
        </div>

        <div className="card">
          <div className="imgBx">
            <img src={img6} alt="images" />
          </div>
          <div className="details">
            <h2>
             Joy of Darjeeling
              <br />
              <span>New Jalpaiguri to Darjeeling</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
