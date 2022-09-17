import "./Signin-signup.css";

import { useState, useRef, useContext } from "react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { isEmail } from "validator";
import AuthContext from "../../store/auth-context";
import service from "../../Services/service";

// const required = (value) => {
//   if (!value) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         This field is required!
//       </div>
//     );
//   }
// };
// const email = (value) => {
//   if (!isEmail(value)) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         This is not a valid email.
//       </div>
//     );
//   }
// };

const Signup = () => {
  const history = useNavigate();
  const usernameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState("");

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const username = usernameInputRef.current.value;
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    // console.log(enteredUsername);
    // console.log(enteredPassword);

    // optional: Add validation

    setIsLoading(true);
    const User = { username, email, password };

    service
      .create(User)
      .then((res) => {
        // console.log(res.data);
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
        authCtx.login(data.token);
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
            required
            ref={usernameInputRef}
          />
          <input
            type="email"
            placeholder="email"
            required
            ref={emailInputRef}
          />
          <input
            type="password"
            placeholder="password"
            required
            ref={passwordInputRef}
          />
          {!isLoading && <button>Sign Up</button>}
          {isLoading && <p>Sending request...</p>}
          <p className="message">
            Already registered? <a href="#">Sign In</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
