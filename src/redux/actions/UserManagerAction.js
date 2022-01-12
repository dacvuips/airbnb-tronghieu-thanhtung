import {
  GET_USER_ID_REQUEST,
  GET_USER_REQUEST,
} from "./../../redux/constants/UserManagerType";

import api from "../../utils/apiUtils";
const getUserManagerAction = () => {
  return async (dispatch) => {
    api
      .get(`api/users/pagination`)
      .then((result) => {
        dispatch({
          type: GET_USER_REQUEST,
          userData: result.data,
        });
      })
      .catch((err) => {
        alert(err);
      });
  };
};

const getUserIDAction = (id) => {
  return async (dispatch) => {
    api
      .get(`/api/users/${id}`)
      .then((result) => {
        dispatch({
          type: GET_USER_ID_REQUEST,
          userID: result.data,
        });
      })
      .catch((err) => {
        alert(err);
      });
  };
};
const updateUserAction = (id, user) => {
  return async (dispatch) => {
    api
      .put(`/api/users/${id}`, user)
      .then((result) => {
        dispatch(getUserManagerAction);
        alert("Cập nhật người dùng thành công");
      })
      .catch((err) => {
        alert("err");
      });
  };
};

const addAdminAction = (user) => {
  return async (dispatch) => {
    api
      .post(`/api/users`, user)
      .then((result) => {
        alert("Thêm quản trị viên thành công");
      })
      .catch((err) => {
        alert(err);
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

export {
  updateUserAction,
  getUserManagerAction,
  deleteUserManagerAction,
  getUserIDAction,
  addAdminAction,
};
