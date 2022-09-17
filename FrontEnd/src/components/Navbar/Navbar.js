import ReactDOM from "react-dom/client";
import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import AuthContext from "../../store/auth-context";

const Navbar = () => {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
    // optional: redirect the user
  };

  return (
    <div>
      <div className="ui teal inverted segment" style={{ margin: "0" }}>
        <div className="ui  secondary  menu">
          <Link className="active item" to="/">
            {/* {
              <a className="active item"> */}
            <h4>Home</h4>
            {/* </a>
            } */}
          </Link>
          <Link className="item" to="/">
            {/* {
              <a className="item"> */}
            <h4>Book Ticket</h4>
            {/* </a>
            } */}
          </Link>
          <Link className="item" to="/about">
            {/* {
              <a className="item"> */}
            <h4>About Us</h4>
            {/* </a>
            } */}
          </Link>
          <Link className="item" to="/find-train">
            {/* {
              <a className="item"> */}
            <h4>Search Train</h4>
            {/* </a>
            } */}
          </Link>
          <Link className="item" to="/contact">
            {/* {
              <a className="item"> */}
            <h4>Contact Us</h4>
            {/* </a>
            } */}
          </Link>
          <div className="right menu">
            {isLoggedIn && (
              <Link className="item" to="/profile">
                {/* {
                  <a className="ui item"> */}
                <h4>Profile</h4>
                {/* </a>
                } */}
              </Link>
            )}
            {!isLoggedIn && (
              <Link className=" ui item" to="/signin">
                {/* {
                  <a className="ui item"> */}
                <h4>Sign in</h4>
                {/* </a>
                } */}
              </Link>
            )}
            {!isLoggedIn && (
              <Link className="ui item" to="/signup">
                {/* {
                  <a className="ui item"> */}
                <h4>Sign up</h4>
                {/* </a>
                } */}
              </Link>
            )}
            {isLoggedIn && (
              <div>
                <a className="ui item" onClick={logoutHandler}>
                  <h4>Logout</h4>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;