import React, { useState, useEffect, useContext } from "react";
import { connect } from "react-redux";
import { TicketPrice } from "./TicketPrice";
import { useLocation, Link, useNavigate } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import PassengerCard from "./passengerCard";
import service from "../../Services/booking";
import { v4 as uuidv4 } from "uuid";


export const Review = (props) => {
  const history = useNavigate();

  const location = useLocation();
  const data = location.state;

  console.log(data);
  const authCtx = useContext(AuthContext);

  console.log(authCtx.userId);

  const submitHandler = (event) => {
    event.preventDefault();

    let passList = [];
    let pnr = Date.now().toString();

    for (var i = 0; i < data.passengerDetail.length; i++) {
      let obj = {
        id: data.passengerDetail.at(i).id,
        pnr: pnr,
        name: data.passengerDetail.at(i).name,
        age: data.passengerDetail.at(i).age,
        seatNo: data.passengerDetail.at(i).seatNo,
        gender: data.passengerDetail.at(i).gender,
        time: new Date(),
        id_number: "7719341441",
      };
      passList.push(obj);
    }
    console.log(passList);

    const bookingData = {
      bookingDetails: {
        id: data.trainData.train_id.toString(),
        pnr: Date.now().toString(),
        train_no: data.trainData.train_id,
        from_station: data.trainData.from_station,
        to_station: data.trainData.to_station,
        clas: data.train_class,
        quota: "genral",
        status: "conform",
        no_of_seats: 10,
        time: new Date(),
      },
      passengerList: passList,

      user: {
        username: "vikash1",
        password: "12345678",
        email: "vik@gmail.com",
      },
      price: data.price.toString(),
      status: "conform",
    };

    service
      .createBooking1(bookingData)
      .then((res) => {
        console.log(res.data);
        console.log("success");
        if (res.status === 200) {
          return res.data;
        } else {
          return res.data.then((data) => {
            console.log(data);
          });
        }
      })
      .then((data) => {
        history("/", { replace: true });
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div>
      <div className="ui three steps">
        <div className="completed step">
          <i className="user icon"></i>
          <div className="content">
            <div className="title">Passenger Details</div>
          </div>
        </div>
        <div className="completed step">
          <i className="clipboard check icon"></i>
          <div className="content">
            <div className="title">Review Journey</div>
          </div>
        </div>
        <div className="active step">
          <i className=" payment icon"></i>
          <div className="content">
            <div className="title">Payment</div>
          </div>
        </div>
      </div>
      <div class="ui segment">
        <p></p>
      </div>
      <div class="ui internally celled grid">
        <div class="twelve wide column">
          <div class="ui segment">
            <p></p>
            <div class="ui segment">
            <p>
                Train Name: {(data.trainData.train_name || " ").toUpperCase()}
              </p>
              <div>
                <p>CLASS : {data.train_class}</p>
              </div>
            </div>
            <div class="ui secondary segment">
              <div>
                <p className="p1">
                  <p className="p1">
                    {/* {(isData.from_station || " ").toUpperCase()} */}
                    {(data.trainData.from_station|| " ").toUpperCase()}
                  </p>
                  <i className="arrow right icon"></i>
                </p>
                <p className="p1">
                  {/* {(isData.to_station || "").toUpperCase()} | */}
                  {(data.trainData.to_station ||" ").toUpperCase()}
                </p>
                <p className="p1">{data.train_class}</p>
                <p className="p1">Quota</p>
                <p className="p1">time</p>
              </div>
            </div>
          </div>

          <div class="ui segment">
            <p></p>
            <table class="ui four column table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Seat No.</th>
                </tr>
              </thead>
            </table>

            {data.passengerDetail.map((detail) => (
              <PassengerCard passengerData={detail} />
            ))}
          </div>

          <div class="ui segment">
            <p></p>
          </div>

          <div class="ui buttons">
            <button class="ui labeled icon button" onClick={() => history(-1)}>
              <i className="left arrow icon"></i>Back
            </button>
            <div class="or"></div>
            <button
              class="ui positive labeled icon button"
              onClick={submitHandler}
            >
              <i class="rupee sign icon"></i>
            </button>
          </div>
        </div>
        <div class="four wide column">
          <div class="ui segment">
          <TicketPrice
              priceData={data.price * data.passengerDetail.length}
            ></TicketPrice>
          </div>
        </div>
      </div>
      <div class="ui segment">
        <p></p>
      </div>
    </div>
  );
};