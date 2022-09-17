import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./store/auth-context";
import { TrainStoreProvider } from "./store/trainStore-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <TrainStoreProvider>
        <App />
      </TrainStoreProvider>
    </AuthContextProvider>
  </React.StrictMode>
);