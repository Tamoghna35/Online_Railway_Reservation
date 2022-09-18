import React, { useState, useRef, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";

import { TicketCard } from "../../Auth/TicketCards/TicketCard";
import service from "../../../Services/booking";

export const PnrInfo = (props) => {
  const location = useLocation();
  const data = location.state;

  const [isData, setIsData] = useState({});
  const [isDataLoading, setDataLoading] = useState(false);

  console.log(data);

  const getData = () => {
    service
      .getPnr(data)
      .then((res) => {
        console.log(res.data);
        console.log("success");
        setDataLoading(true);
        setIsData(res.data);
        if (res.status === 200) {
          return res.data;
        } else {
          return res.data.then((data) => {
            console.log(data);
          });
        }
      })
      .then((data) => {
        // history("/", { replace: true });
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {isDataLoading ? <TicketCard ticketData={isData} /> : <h1>loding....</h1>}
    </div>
  );
};