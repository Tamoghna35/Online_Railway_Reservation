import "./TrainList.css";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import service from "../../Services/Train";
import TrainDataCard from "./TrainData/TrainDataCard";

import React from "react";
import { Grid, Image, Segment } from "semantic-ui-react";

const TrainList = (props) => {
  const [isData, setIsData] = useState([]);
  const location = useLocation();

  const data = location.state;

  const trainRun = () => {
    service
      .getTrains(data.from, data.to)
      .then((res) => {
  
        setIsData(res.data);
       
        if (res.status === 200) {
          
          return res.data;
        } else {
          return res.data.then((data) => {
            
          });
        }
      })
      .then((data) => {
       
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  useEffect(() => {
    trainRun();
  }, []);

 
  return (
   
    <div>
      <div className="ui segment ">
        <h2 className="ui  header">
          <div className="ui tertiary segment">
            {data && (
              <div>
                <div className="p1">
                  <p className="p1">{data.from.toUpperCase()}</p>

                  <p className="p1">
                    <i className="arrow right icon"></i>
                  </p>
                </div>
                <p className="p1"> {data.to.toUpperCase()} |</p>
                <p className="p1">date: {data.dates} |</p>
                <p className="p1"> {data.classes} |</p>
                <p className="p1"> {data.category} </p>
              </div>
            )}
          </div>
        </h2>
        <div className="ui clearing divider"></div>
        <div className="ui padded segment">
          {isData.map((train, i) => (
            <TrainDataCard trainData={train} key={i} />
          ))}

         
        </div>
      </div>
    </div>
  );
};
export default TrainList;