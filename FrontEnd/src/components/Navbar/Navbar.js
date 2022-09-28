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
  };

  return (
    <div>
      <div className="ui teal inverted segment" style={{ margin: "0" }}>
        <div className="ui  secondary  menu">
          <Link className="active item" to="/">
            <h4>Home</h4>
          </Link>
          <Link className="item" to="/">
            <h4>Book Ticket</h4>
          </Link>
          <Link className="item" to="/about">
            <h4>About Us</h4>
          </Link>
          <Link className="item" to="/find-train">
            <h4>Search Train</h4>
            
          </Link>
          <Link className="item" to="/contact">
            
            <h4>Contact Us</h4>
            
          </Link>
          <div className="right menu">
            {isLoggedIn && (
              <Link className="item" to="/profile">
                
                <h4>Profile</h4>
                
              </Link>
            )}
            {!isLoggedIn && (
              <Link className=" ui item" to="/signin">
                
                <h4>Sign in</h4>
                
              </Link>
            )}
            {!isLoggedIn && (
              <Link className="ui item" to="/signup">
                
                <h4>Sign up</h4>
                
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