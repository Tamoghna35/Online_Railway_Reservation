import { useContext,useState, useEffect } from "react";

import {
  BrowserRouter,Routes,Route,Switch,Navigate,useNavigate,
} from "react-router-dom";

import { history } from "./helpers/history";

import Navbar from "./components/Navbar/Navbar";

import Home from "./Main";

import "./App.css";

import About from "./components/StaticHomePage/About";
import Contact from "./components/StaticHomePage/Contact";
import FindTrain from "./components/SearchTrain/FindTrain";
import Signin from "./components/Auth/Signin";
import Signup from "./components/Auth/Signup";
import Profile from "./components/Auth/profile";
import AuthContext from "./store/auth-context";
import TrainList from "./components/SearchTrain/TrainList";
import TrainBooking from "./components/Booking/TrainBooking";
import { Review } from "./components/Booking/Review";
import { PnrInfo } from "./components/SearchTrain/PnrSearchPages/PnrInfo";
import SigninAdmin from "./components/Auth/SigninAdmin";
import { NavbarAdmin } from "./components/Navbar/NavbarAdmin";
import { AdminHome } from "./components/Admin/AdminHome";
import { AddTrain }from "./components/Admin/AddTrain";
import { UpdateTrain } from "./components/Admin/UpdateTrain";

const App = () => {
  const authCtx = useContext(AuthContext);
  const [isUser, setIsUser] = useState("USER");

  let check;
  console.log(authCtx.role);
  useEffect(() => {
    setIsUser("USER");
    // check = authCtx.roles === "ADMIN" ? setIsUser("ADMIN") : setIsUser("USER");
    if (localStorage.getItem("role")) {
      setIsUser(localStorage.getItem("role"));
    }
  });

  return (
    <BrowserRouter history={history}>
      <div className="App">
        <Routes>
        <Route
            path="/"
            element={isUser === "USER" ? <Navbar /> : <NavbarAdmin />}
          >
            <Route
              index
              element={isUser === "USER" ? <Home /> : <AdminHome />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/find-train" element={<FindTrain />} />

            {!authCtx.isLoggedIn && (
              <Route path="/signin" element={<Signin />} />
            )}
            {!authCtx.isLoggedIn && (
              <Route path="/signup" element={<Signup />} />
            )}
            {/* {authCtx.isLoggedIn && (
              <Route path="/profile" element={<Profile />} />
            )} */}
            <Route
              path="/profile" element={ authCtx.isLoggedIn ? ( <Profile /> ) : 
              (<Navigate replace to={"/signin"} />
                )
              }
            />

            <Route path="/train-list" element={<TrainList />} />

            <Route path="/train-booking" element={<TrainBooking />} />
            <Route path="train-review" element={<Review/>}/>
            <Route path="/train-pnr" element={<PnrInfo />} />
            {!authCtx.isLoggedIn && (
              <Route path="/admin" element={<SigninAdmin />} />
            )}
            <Route
              path="/add-train"
              element={
                isUser === "ADMIN" ? (
                  <AddTrain />
                ) : (
                  <Navigate replace to={"/signin"} />
                )
              }
            />
          
          <Route
              path="/update-train"
              element={
                isUser === "ADMIN" ? (
                  <UpdateTrain />
                ) : (
                  <Navigate replace to={"/signin"} />
                )
              }
            />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;