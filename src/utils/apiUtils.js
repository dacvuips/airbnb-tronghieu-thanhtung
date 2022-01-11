import axios from "axios";
const TOKEN_CYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAxNCIsIkhldEhhblN0cmluZyI6IjE1LzA0LzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY0OTk4MDgwMDAwMCIsIm5iZiI6MTYyMTE4NDQwMCwiZXhwIjoxNjUwMTI4NDAwfQ.43sCqLD_V6VUJP8qZLQSWO07uCIDI7bS5MGR92deYb8";

const api = axios.create({
  baseURL: "https://airbnb.cybersoft.edu.vn",
});

api.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
      tokenByClass: TOKEN_CYBERSOFT,
      token: localStorage.getItem("USER_LOGIN")
        ? JSON.parse(localStorage.getItem("USER_LOGIN")).token
        : "",
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
