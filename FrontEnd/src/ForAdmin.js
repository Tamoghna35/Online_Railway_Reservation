import { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { history } from "./helpers/history";

import Navbar from "./components/Navbar/Navbar";

import Home from "./Main";

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
import { NavbarAdmin } from "./components/Navbar/NavbarAdmin";

export const ForAdmin = (props) => {
  const authCtx = useContext(AuthContext);
  return (
    // <BrowserRouter history={history}>
    //   <div className="App">
    <Routes>
      <Route path="/" element={<NavbarAdmin />}>
        {/* <Route index element={<Home />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/find-train" element={<FindTrain />} />

        {!authCtx.isLoggedIn && <Route path="/signin" element={<Signin />} />}

        <Route
          path="/profile"
          element={
            authCtx.isLoggedIn ? (
              <Profile />
            ) : (
              <Navigate replace to={"/signin"} />
            )
          }
        />

        <Route path="/train-list" element={<TrainList />} />

        <Route path="/train-booking" element={<TrainBooking />} />
        <Route path="/train-review" element={<Review />} />
        <Route path="/train-pnr" element={<PnrInfo />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
    //   </div>
    // </BrowserRouter>
  );
};