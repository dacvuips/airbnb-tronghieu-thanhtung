import api from "../../util/apiUtils";
import { loginAction } from "./Login";

const TIME_EXP = 3600000;
export const registerAction = (user, props) => {
  return (dispatch) => {
    api
      .post(`/api/auth/register`, user)
      .then((result) => {
        const date = new Date().getTime;
        const exp = date + TIME_EXP;
        localStorage.setItem("USER_LOGIN", JSON.stringify(result.data));
        localStorage.setItem("exp", exp);
        alert(" Chúc mừng bạn đã đăng ký thành công");
        dispatch(loginAction({ email: user.email, password: user.password }));
        props.goBack();
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
