import ReactDOM from "react-dom/client";
import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import AuthContext from "../../store/auth-context";

export const NavbarAdmin = (props) => {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
    // optional: redirect the user
  };
  return (
    <div>
      <div className="ui blue inverted pointing  menu">
        <Link className="active item" to="/">
          <h4>Home</h4>
        </Link>
        <Link className="item" to="/add-Train">
          <h4>Add Train</h4>
        </Link>

        <Link className="item" to="/find-train">
          <h4>Search Train</h4>
        </Link>
        <Link className="item" to="/train-list">
          <h4>Train List</h4>
        </Link>
        <div className="right menu">
          {isLoggedIn && (
            <Link className="item" to="/admin-profile">
              <h4>Admin Profile</h4>
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

      <Outlet />
    </div>
  );
};