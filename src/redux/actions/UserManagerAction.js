import { GET_USER_REQUEST } from "redux/types/UserManagerType";

import api from "../../util/apiUtils";
const getUserManagerAction = () => {
  return async (dispatch) => {
    api
      .get(`api/users/pagination`)
      .then((result) => {
        console.log(result.data);
        dispatch({
          type: GET_USER_REQUEST,
          userData: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const deleteUserManagerAction = (id) => {
  return (dispatch) => {
    api
      .delete(`/api/users/${id}`)
      .then((result) => {
        alert("Xóa người dùng thành công");

        dispatch(getUserManagerAction());
      })
      .catch((err) => {
        alert(err);
      });
  };
};

export { getUserManagerAction, deleteUserManagerAction };
