import api from "utils/apiUtils";
import { USER_LOGOUT } from "./../constants/Login";
import * as ActionType from "../constants/Login"

const TIME_EXP = 3600000;
const loginAction = (user, history) => {
  return (dispatch) => {
    api
      .post(`/api/auth/login`, user)
      .then((result) => {
        const date = new Date().getTime;
        const exp = date + TIME_EXP;
        localStorage.setItem("exp", exp);
        alert("Đăng nhập thành công");

        if (result.data.user.type === "CLIENT") {
          const user = JSON.stringify(result.data);
          localStorage.setItem("USER_LOGIN", user);
          dispatch(actLoginSuccess(result))
          history.goBack();
        }
        if (result.data.user.type === "ADMIN") {
          const user = JSON.stringify(result.data);
          localStorage.setItem("USER_ADMIN", user);
          localStorage.setItem("USER_LOGIN", user);
          localStorage.setItem("token", JSON.stringify(result.data.token));
          dispatch(actLoginSuccess(result))

          history.replace("/admin/dashboard");
        }
      })
      .catch((err) => {
        alert(Response.message);
      });
  };
};

const clearUser = (history) => {
  localStorage.removeItem("USER_ADMIN");
  localStorage.removeItem("USER_LOGIN");
  localStorage.removeItem("exp");
  history.replace("/login");
  return {
    type: USER_LOGOUT,
  };
};

const actLoginSuccess = (data) => ({type: ActionType.POST_USER_LOGIN_SUCCESS,payload: data})

export { loginAction, clearUser,actLoginSuccess };
