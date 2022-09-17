import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";

import * as React from "react";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SearchTrainForm = (props) => {
  const history = useNavigate();
  const [toMessage, setToMessage] = useState("");
  const [fromMessage, setFromMessage] = useState("");
  const [dateMessage, setDateMessage] = useState("");
  const [classMessage, setClassMessage] = useState("All Classes");
  const [catMessage, setCatMessage] = useState("General");

  const [errAlert, setErrAlert] = useState(false);

  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleToChange = (event) => {
     // console.log(event.target.value);
    setToMessage(event.target.value);
  };

  const handleFromChange = (event) => {
    setFromMessage(event.target.value);
  };

  const handleDateChange = (event) => {
    setDateMessage(event.target.value);
  };

  const handleClassChange = (event) => {
    setClassMessage(event.target.value);
  };

  const handleCatChange = (event) => {
    setCatMessage(event.target.value);
  };

  const handleClick = (event) => {
    setErrAlert(false);
    event.preventDefault();

    if (toMessage.trim().length === 0 || fromMessage.trim().length === 0) {
      // alert("input value should NOT be empty");
      history("/", { replace: true });
      setErrAlert(true);
      setOpen(true);
      // console.log("input value is empty");
    }
  };

  const trainSearchData = {
    to: toMessage,
    from: fromMessage,
    dates: dateMessage,
    classes: classMessage,
    category: catMessage,
  };

  return (
    <form>
      {errAlert && (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            Input value should not be empty!
          </Alert>
        </Snackbar>
      )}
      <div className="ui form">
        
        <h1 className="ui header" style={{ color: "dodgerblue" }}>
          BOOK TICKET
        </h1>
        <div className="fields">
          <div className="field">
            {/* <label>From</label> */}
            <div className="ui icon input">
              <i className="paper plane icon"></i>
              <input
                type="text"
                placeholder="From"
                required="true"
                onChange={handleFromChange}
                autoComplete="off"
              />
            </div>
          </div>
          <div className="field">
            {/* <label>To</label> */}
            <div className="ui icon input">
              <i className="map marker alternate icon"></i>
              <input
                type="text"
                placeholder="To"
                required="true"
                onChange={handleToChange}
                autoComplete="off"
              />
            </div>
          </div>
        </div>
        <div className="equal width fields">
          <div className="field">
            {/* <label>Date</label> */}
            <input
              type="date"
              placeholder="date"
              onChange={handleDateChange}
              value="2022-09-07"
              // min="2022-01-01"
              // max="2023-12-31"
            />
          </div>

          <div className="field">
            {/* <label>All classNamees</label> */}

            <select className="ui search dropdown" onChange={handleClassChange}>
              <option value="All classes">All classes</option>
              <option value="SL">Sleeper (SL)</option>
              <option value="1A">AC First Class (1A)</option>
              <option value="2A">AC First Class (2A)</option>
              <option value="3A">AC First Class (3A)</option>
            </select>
          </div>
        </div>
        <div className="field">
          {/* <label>General</label> */}

          <select className="ui search dropdown" onChange={handleCatChange}>
            <option value="GENERAL">GENERAL</option>
            <option value="LADIES">LADIES</option>
            <option value="LOWER BERTH/SR CITIZEN">
              LOWER BERTH/SR CITIZEN
            </option>
            <option value="PERSON WITH DISABILITY">
              PERSON WITH DISABILITY
            </option>
            <option value="TATKAL">TATKAL</option>
            <option value="PREMIUM TATKAL">PREMIUM TATKAL</option>
          </select>
        </div>
        <button className="ui toggle button" onClick={handleClick}>
          <Link to="/train-list" state={trainSearchData}>
            {<a className="active item">Search</a>}
          </Link>
        </button>
      </div>
    </form>
  );
};

export default SearchTrainForm;