import { useState, useRef, useEffect } from "react";
import service from "../../Services/Train";
import { useNavigate } from "react-router-dom";

export const AddTrain = (props) => {
  const history = useNavigate();
  const [trainId, setTrainId] = useState("");
  const [trainName, setTrainName] = useState("");
  const [trainSource, setTrainSource] = useState("");
  const [trainDest, setTrainDest] = useState("");

  const [trainSlSeat, setTrainSlSeat] = useState("");
  const [trainAc3Seat, setTrainAc3Seat] = useState("");
  const [trainAc2Seat, setTrainAc2Seat] = useState("");
  const [trainAc1Seat, setTrainAc1Seat] = useState("");

  const [trainSlPrice, setTrainSlPrice] = useState("");
  const [trainAc3Price, setTrainAc3Price] = useState("");
  const [trainAc2Price, setTrainAc2Price] = useState("");
  const [trainAc1Price, setTrainAc1Price] = useState("");

  const [distance, setDistance] = useState("");
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [duration, setDuration] = useState("");

  console.log(trainId);

  const submitHandler = (event) => {
    event.preventDefault();

    console.log(trainId);

    const TrainData = {
      train_id: trainId,
      total_Seat_sleeper: trainSlSeat,
      total_Seat_ac3: trainAc3Seat,
      total_Seat_ac2: trainAc2Seat,
      total_Seat_ac1: trainAc1Seat,
      train_name: trainName,
      from_station: trainSource,
      to_station: trainDest,
      duration: duration,
      departureTime: departure,
      arrivalTime: arrival,
      price_sleeper: trainSlPrice,
      price_ac3: trainAc3Price,
      price_ac2: trainAc2Price,
      price_ac1: trainAc1Price,
      distance: distance,
      runs_on: [],
    };
    console.log(TrainData);

    service
      .addTrain(TrainData)
      .then((res) => {
        console.log(res.data);

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
      <h1>AddTrain</h1>

      <div class="ui form">
        <div class=" five fields">
          <div class="field">
            <label>Train Id</label>
            <input
              type="text"
              placeholder="Train Id"
              name="Train Id"
              onChange={(e) => setTrainId(e.target.value)}
            />
          </div>
          <div class="field">
            <label>Train Name</label>
            <input
              type="text"
              placeholder="Train Name"
              onChange={(e) => setTrainName(e.target.value)}
            />
          </div>
          <div class="field">
            <label>Source</label>
            <input
              type="text"
              placeholder="Source"
              onChange={(e) => setTrainSource(e.target.value)}
            />
          </div>

          <div class="field">
            <label>Destination</label>
            <input
              type="text"
              placeholder="Destination"
              onChange={(e) => setTrainDest(e.target.value)}
            />
          </div>
        </div>
      </div>
      {/* second form */}
      <div class="ui form">
        <div class="five fields">
          <div class="field">
            <label>Total Sleeper seats</label>
            <input
              type="text"
              placeholder="Total Sleeper seats"
              onChange={(e) => setTrainSlSeat(e.target.value)}
            />
          </div>
          <div class="field">
            <label>Total AC3 seats</label>
            <input
              type="text"
              placeholder="Total AC3 seats"
              onChange={(e) => setTrainAc3Seat(e.target.value)}
            />
          </div>
          <div class="field">
            <label>Total AC2 seats</label>
            <input
              type="text"
              placeholder="Total AC2 seats"
              onChange={(e) => setTrainAc2Seat(e.target.value)}
            />
          </div>
          <div class="field">
            <label>Total AC1 seats</label>
            <input
              type="text"
              placeholder="Total AC1 seats"
              onChange={(e) => setTrainAc1Seat(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* third form */}
      <div class="ui form">
        <div class="five fields">
          <div class="field">
            <label>Sleeper Price</label>
            <input
              type="text"
              placeholder="Sleeper Price"
              onChange={(e) => setTrainSlPrice(e.target.value)}
            />
          </div>
          <div class="field">
            <label>AC3 Price</label>
            <input
              type="text"
              placeholder="AC3 Price"
              onChange={(e) => setTrainAc3Price(e.target.value)}
            />
          </div>
          <div class="field">
            <label>AC2 Price</label>
            <input
              type="text"
              placeholder="AC2 Price"
              onChange={(e) => setTrainAc2Price(e.target.value)}
            />
          </div>
          <div class="field">
            <label>AC1 Price</label>
            <input
              type="text"
              placeholder="AC1 Price"
              onChange={(e) => setTrainAc1Price(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* fourth form */}
      <div class="ui form">
        <div class="five fields">
          <div class="field">
            <label>Distance</label>
            <input
              type="text"
              placeholder="Distance"
              onChange={(e) => setDistance(e.target.value)}
            />
          </div>
          <div class="field">
            <label>Duration</label>
            <input
              type="text"
              placeholder="Duration"
              onChange={(e) => setDuration(e.target.value)}
            />
          </div>
          <div class="field">
            <label>Departure Time</label>
            <input
              type="text"
              placeholder="Departure Time"
              onChange={(e) => setDeparture(e.target.value)}
            />
          </div>
          <div class="field">
            <label>Arrival Time</label>
            <input
              type="text"
              placeholder="Arrival Time"
              onChange={(e) => setArrival(e.target.value)}
            />
          </div>
        </div>
      </div>

      <button class="positive ui button" onClick={submitHandler}>
        Add
      </button>
    </div>
  );
};