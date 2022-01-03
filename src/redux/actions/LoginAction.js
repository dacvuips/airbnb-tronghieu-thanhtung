import { USER_LOGOUT } from "redux/types/LoginType";
import api from "../../util/apiUtils";

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
        console.log(result);
        if (result.data.user.type === "CLIENT") {
          const user = JSON.stringify(result.data);
          localStorage.setItem("USER_LOGIN", user);
          history.goBack();
        }
        if (result.data.user.type === "ADMIN") {
          const user = JSON.stringify(result.data);
          localStorage.setItem("USER_ADMIN", user);
          localStorage.setItem("USER_LOGIN", user);
          localStorage.setItem("token", JSON.stringify(result.data.token));

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
  localStorage.removeItem("token");
  history.replace("/login");
  return {
    type: USER_LOGOUT,
  };
};
export { loginAction, clearUser };
