import React from "react";
import { useEffect, useState, useRef, useContext } from "react";
import { HomeSideComponent } from "./HomeSideComponent";
import { SideBar } from "./SideBar";

export const AdminHome = (props) => {
  const [isDataNo, setIsDataNo] = useState(0);
  const dataNo = (data) => {
    setIsDataNo(data);
  };
  return (
    <div>
      <div class="ui grid">
        <div class="three wide column">
          <SideBar numb={isDataNo} />
        </div>
        <div class="ten wide column">
          <HomeSideComponent showNumb={dataNo} />
        </div>
      </div>
    </div>
  );
};