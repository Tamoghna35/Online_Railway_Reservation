import React, { useState, useRef, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import service from "../../Services/booking";
const PnrSearch = (props) => {
  const history = useNavigate();
  const inputRef = useRef();
  const [isData, setIsData] = useState({});
  const [inputMessage, setInputMessage] = useState("");

  const submitHandler = () => {
    // service
    //   .getPnr(inputMessage)
    //   .then((res) => {
    //     console.log(res.data);
    //     console.log("success");
    //     setIsData(res.data);
    //     if (res.status === 200) {
    //       return res.data;
    //     } else {
    //       return res.data.then((data) => {
    //         console.log(data);
    //       });
    //     }
    //   })
    //   .then((data) => {
    //     // history("/", { replace: true });
    //   })
    //   .catch((err) => {
    //     alert(err.message);
    //   });

    console.log(isData);
  };

  // service
  //   .getPnr(inputMessage)
  //   .then((res) => {
  //     console.log(res.data);
  //     console.log("success");
  //     setIsData(res.data);
  //     if (res.status === 200) {
  //       return res.data;
  //     } else {
  //       return res.data.then((data) => {
  //         console.log(data);
  //       });
  //     }
  //   })
  //   .then((data) => {
  //     // history("/", { replace: true });
  //   })
  //   .catch((err) => {
  //     alert(err.message);
  //   });

  const handleChangeInput = (event) => {
    setInputMessage(event.target.value);
    console.log(event.target.value);
  };

  // const pnr = inputRef.current.value;
  // setInputMessage(pnr);

  useEffect(() => {
    submitHandler();
  }, []);

  return (
    <div>
      <h1 className="ui header" style={{ color: "#2B3080" }}>
        PNR SEARCH
      </h1>
      <div className="ui fluid action input">
        <input
          type="text"
          placeholder="PNR "
          ref={inputRef}
          onChange={handleChangeInput}
        />
        <Link to="/train-pnr" state={inputMessage}>
          <div className="ui button">Search</div>
        </Link>
      </div>
    </div>
  );
};

export default PnrSearch;