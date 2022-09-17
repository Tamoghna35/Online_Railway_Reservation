import React, { useState, useEffect, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { TicketPrice } from "./TicketPrice";
import { useLocation, Link, useNavigate } from "react-router-dom";
import TrainStore from "../../store/trainStore-context";
import { Formik, Field, Form, useFormik } from "formik";

import service from "../../Services/Train";

export default function TrainBooking() {
  let price;
  const history = useNavigate();
  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), name: "", age: "", gender: "", seatNo: 0 },
  ]);
  const trainCtx = useContext(TrainStore);

  const [isData, setIsData] = useState({});

  const location = useLocation();
  const data = location.state;

  // console.log(trainCtx.train_data);

  const trainRun = () => {
    service
      .getTrainById(data.train_no)
      .then((res) => {
        // console.log(res.data);
        setIsData(res.data);

        if (res.status === 200) {
          return res.data;
        } else {
          return res.data.then((data) => {});
        }
      })
      .then((data) => {})
      .catch((err) => {
        alert(err.message);
      });
  };

  useEffect(() => {
    trainRun();
    // console.log(data.train_class);
    // console.log(data.train_no);
  }, []);

  if (data.train_class === "SL") {
    price = isData.price_sleeper;
  }

  if (data.train_class === "3A") {
    price = isData.price_ac3;
  }

  if (data.train_class === "2A") {
    price = isData.price_ac2;
  }

  if (data.train_class === "1A") {
    price = isData.price_ac1;
  }
  console.log(price);

  //   const to = props.items.to;

  // console.log(data.train_class);
  // console.log(data.train_no);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("InputFields", inputFields);
  };

  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setInputFields(newInputFields);
  };

  const handleAddFields = () => {
    setInputFields([
      ...inputFields,
      { id: uuidv4(), name: "", age: "", gender: "", seatNo: 0 },
    ]);

    // console.log(inputFields.length);
  };

  const handleRemoveFields = (id) => {
    const values = [...inputFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );

    setInputFields(values);
  };

  const TrainBookingReview = {
    trainData: isData,
    train_class:data.train_class,
    price:price,
    passengerDetail: inputFields,
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
        <div className="active step">
          <i className="clipboard check icon"></i>
          <div className="content">
            <div className="title">Review Journey</div>
          </div>
        </div>
        <div className="disabled step">
          <i className=" payment icon"></i>
          <div className="content">
            <div className="title">Payment</div>
          </div>
        </div>
      </div>
      {/* {progress bar end} */}

      <div className="ui segment  ">
        <div className="ui segments">
          <h1 className="ui left aligned tertiary segment">
            {(isData.train_name || " ").toUpperCase()} ( {data.train_no})
          </h1>

          <div>
            <p>CLASS : {data.train_class}</p>
          </div>
          <div className="ui secondary segment">
            <div>
              <p className="p1">
                <p className="p1">
                  {(isData.from_station || " ").toUpperCase()}
                </p>
                <i className="arrow right icon"></i>
              </p>
              <p className="p1">{(isData.to_station || "").toUpperCase()} |</p>
              <p className="p1">{data.train_class}</p>
              <p className="p1">Quota</p>
              <p className="p1">time</p>
            </div>
          </div>
        </div>
      </div>

      {/* {passenger section and payment section start} */}
      <div className="ui internally celled grid">
        <div className="row">
          <div className="twelve wide column">
            <div className="ui segment">
              <p>Passenger Details</p>

              {/* add Passenger details */}
              <div className="ui segment">
                <button
                  className="ui button labeled icon"
                  onClick={handleAddFields}
                  disabled={inputFields.length >= 6 ? true : false}
                >
                  <i className="plus icon"></i>
                  Add Passenger Details
                </button>
              </div>

              {inputFields.map((inputField) => (
                <div key={inputField.id}>
                  <div className="ui form  segment">
                    <div className="five fields">
                      <div className="field">
                        <input
                          type="text"
                          placeholder="Name"
                          name="name"
                          value={inputField.name}
                          onChange={(event) =>
                            handleChangeInput(inputField.id, event)
                          }
                        />
                      </div>
                      <div className="field">
                        <input
                          type="text"
                          placeholder="Age"
                          name="age"
                          onChange={(event) =>
                            handleChangeInput(inputField.id, event)
                          }
                          value={inputField.age}
                        />
                      </div>
                      <div className="ui selection  ">
                        <select
                          class="ui fluid dropdown"
                          type="text"
                          placeholder="Gender"
                          name="gender"
                          onChange={(event) =>
                            handleChangeInput(inputField.id, event)
                          }
                          value={inputField.gender}
                        >
                          <option value="">Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                        {/* <input
                          type="text"
                          placeholder="Gender"
                          name="gender"
                          onChange={(event) =>
                            handleChangeInput(inputField.id, event)
                          }
                          value={inputField.gender}
                        /> */}
                      </div>
                      <div className="field">
                        <input
                          type="text"
                          placeholder="Seat No."
                          name="seatNo"
                          onChange={(event) =>
                            handleChangeInput(inputField.id, event)
                          }
                          value={inputField.seatNo}
                        />
                      </div>
                      <div className="field">
                        <button
                          className="ui button labeled icon"
                          onClick={() => handleRemoveFields(inputField.id)}
                          disabled={inputFields.length < 1 ? true : false}
                        >
                          <i className="trash icon"></i>
                          remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* <button
                className="ui button"
                onClick={handleSubmit}
                disabled={inputFields.length < 1 ? true : false}
                style={{ marginTop: "1%" }}
              >
                submit
              </button> */}

              {/* submit or back button start */}
              <button
                onClick={() => history(-1)}
                className="ui labeled icon button"
              >
                <i className="left arrow icon"></i>
                Back
              </button>

              <button
                onClick={handleSubmit}
                disabled={inputFields.length < 1 ? true : false}
                style={{ marginTop: "1%" }}
                className="ui right labeled icon button"
              >
                <i className="right arrow icon"></i>
                <Link
                  to="/train-review"
                  style={{ color: "grey" }}
                  state={TrainBookingReview}
                >
                  Continue
                </Link>
              </button>

              {/* submit or back button end */}
              {/* add Passenger details */}
            </div>
          </div>
          <div className="four wide column">
            <div className="ui segment">
              <TicketPrice priceData={price} />
            </div>
          </div>
        </div>
      </div>
      {/* user detail start*/}

      <div className="ui segment"></div>
    </div>
  );
}