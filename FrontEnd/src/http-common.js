import axios from "axios";

axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

export default axios.create({
  //baseURL: "http://localhost:8010/api/auth",
 // baseURL: "http://localhost:8001",
   baseURL: "http://localhost:8010/api",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",

  },
  withCredentials: false,
});
