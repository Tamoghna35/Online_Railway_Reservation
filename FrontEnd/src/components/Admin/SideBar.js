import React from "react";

export const SideBar = (props) => {
  return (
    <div>
      <div class="ui vertical menu">
        <a class="active teal item">
          Total Trains
          <div class="ui teal left pointing label">{props.numb}</div>
        </a>
        <a class="item">
          Admins
          <div class="ui label">3</div>
        </a>
        <a class="item">
          Updates
          <div class="ui label">1</div>
        </a>
        <div class="item">
          <div class="ui transparent icon input">
            <input type="text" placeholder="Search mail..." />
            <i class="search icon"></i>
          </div>
        </div>
      </div>
    </div>
  );
};