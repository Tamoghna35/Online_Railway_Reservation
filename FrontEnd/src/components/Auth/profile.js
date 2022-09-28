import img from "../../assets/Tamoghna.JPG";
import "./profile.css";
import React, { useContext, useEffect, useState } from "react";
import authCont from "../../store/auth-context";
import service from "../../Services/booking";
import { TicketCard } from "./TicketCards/TicketCard";
const Profile = (props) => {
  const authCtx = useContext(authCont);

  const [isData, setIsData] = useState([]);

  useEffect(() => {
    service
      .getBooking(authCtx.userId.id)
      .then((res) => {
        console.log(res.data);
        setIsData(res.data);
        console.log("success");
        if (res.status === 200) {
          return res.data;
        } else {
          return res.data.then((data) => {
            console.log(data);
          });
        }
      })
      .then((data) => {})
      .catch((err) => {
        alert(err.message);
      });
  }, []);
  return (
    <div>
      <div class="ui segment">
        <div class="ui segment">
          <div class="ui grid">
            <div class="two wide column">
              <div class="ui small circular rotate left reveal image">
                <img src={img} class="visible content" />
                {/* <img src={img} class="hidden content" /> */}
              </div>
            </div>
            <div class="fourteen wide column">
              <div class="ui  segment">
                <h3>User Profile </h3>
                <div class="ui clearing divider"></div>
                <h3>Name: {authCtx.userId.username} </h3>
                <div class="ui clearing divider"></div>
                <h3>Email: {authCtx.userId.email} </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ui three item menu">
        <a class="item">All Journeys</a>
        <a class="item">Past Journeys</a>
        <a class="item active">Future Journeys</a>
      </div>
      {isData.map((ticket, i) => (
        <TicketCard ticketData={ticket} key={i} />
      ))}
      <div class="ui very padded segment">
        <p></p>
      </div>
    </div>
  );
};

export default Profile;