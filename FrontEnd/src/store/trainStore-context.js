import React, { useState } from "react";

const TrainStore = React.createContext({
  train_class: (train_class) => {},
  train_no: (train_no) => {},
  train_data: "",
});

export const TrainStoreProvider = (props) => {
  const [trainClass, setTrainClass] = useState("");
  const [trainNo, setTrainNo] = useState();

  const getTrainClass = (train_class) => {
    setTrainClass(train_class);
  };

  const getTrainNo = (train_no) => {
    setTrainNo(train_no);
  };

  const contextValue = {
    train_class: getTrainClass,
    train_no: getTrainNo,
    train_data: trainClass,
  };

  return (
    <TrainStore.Provider value={contextValue}>
      {props.children}
    </TrainStore.Provider>
  );
};

export default TrainStore;