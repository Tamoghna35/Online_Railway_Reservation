import { useState, useRef, useContext } from "react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Navigate } from "react-router-dom";
import "./Signin-signup.css";
import AuthContext from "../../store/auth-context";
import service from "../../Services/AdminService";

const Signin = (props) => {
  const history = useNavigate();
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState("");

  

  const submitHandler = (event) => {
    event.preventDefault();

    const username = usernameInputRef.current.value;
    const password = passwordInputRef.current.value;
    setIsLoading(true);
    
  };

  useEffect(() => {
    console.log(token);
  }, [token]);

  return (
    <div className="login-page">
      <div className="form1">
        <form className="login-form1" onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="username"
            name="username"
            required
            ref={usernameInputRef}
            
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            required
            ref={passwordInputRef}
           
          />
          {!isLoading && <button>Sign In</button>}
          {isLoading && <p>Sending request...</p>}
          <p className="message">
            Not registered? <a href="#">Create an account</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signin;