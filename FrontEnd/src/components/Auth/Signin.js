import { useState, useRef, useContext } from "react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Navigate } from "react-router-dom";
import "./Signin-signup.css";
import AuthContext from "../../store/auth-context";
import service from "../../Services/service";

const Signin = (props) => {
  const history = useNavigate();
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);

  // const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState("");

  // const switchAuthModeHandler = () => {
  //   setIsLogin((prevState) => !prevState);
  // };

  const submitHandler = (event) => {
    event.preventDefault();

    const username = usernameInputRef.current.value;
    const password = passwordInputRef.current.value;

    // console.log(enteredUsername);
    // console.log(enteredPassword);

    // optional: Add validation

    setIsLoading(true);
    const User = { username, password };

    service
      .getToken(User)
      .then((res) => {
        // console.log(res.data.accessToken);
        console.log(res.data);
        setIsLoading(false);
        if (res.status === 200) {
          // console.log(res.data.accessToken);
          // console.log(res.status);
          return res.data;
        } else {
          return res.data.then((data) => {
            console.log(data);
            let errorMessage = "Authentication failed!";
            // if (data && data.error && data.error.message) {
            //   errorMessage = data.error.message;
            // }

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.accessToken);
        authCtx.userIdData(data);
        history("/", { replace: true });
      })
      .catch((err) => {
        alert(err.message);
      });
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
            // value={username}
            // onChange={onChangeUsername}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            required
            ref={passwordInputRef}
            // value={password}
            // onChange={onChangePassword}
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
