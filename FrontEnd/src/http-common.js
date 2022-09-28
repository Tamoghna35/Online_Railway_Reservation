import axios from "axios";

axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

export default axios.create({
 
   baseURL: "http://localhost:8001",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",

  },
  //withCredentials: false,
});
