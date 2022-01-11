import axios from "axios";
const TOKEN1 =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAxNCIsIkhldEhhblN0cmluZyI6IjE1LzA0LzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY0OTk4MDgwMDAwMCIsIm5iZiI6MTYyMTE4NDQwMCwiZXhwIjoxNjUwMTI4NDAwfQ.43sCqLD_V6VUJP8qZLQSWO07uCIDI7bS5MGR92deYb8";
// const token = localStorage.getItem("token");
const api = axios.create({
  baseURL: "https://airbnb.cybersoft.edu.vn",
});
api.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
      // token,
      tokenByClass: TOKEN1,
      token: localStorage.getItem("USER_LOGIN")
        ? JSON.parse(localStorage.getItem("USER_LOGIN")).token
        : "",
    };
    return config;
  },
  (errors) => {
    return Promise.reject(errors);
  }
);

export default api;
