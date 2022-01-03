import api from "../../util/apiUtils";
import {
  GET_LOCALID_REQUES,
  GET_LOCAL_REQUES,
} from "redux/types/LocalManagerType";
const getLocalAction = () => {
  return async (dispatch) => {
    api
      .get(`/api/locations`)
      .then((result) => {
        dispatch({
          type: GET_LOCAL_REQUES,
          local: result.data,
        });
      })
      .catch((err) => {
        alert(err);
      });
  };
};

const getLocalIDAction = (id) => {
  return async (dispatch) => {
    api
      .get(`/api/locations/${id}`)
      .then((result) => {
        dispatch({
          type: GET_LOCALID_REQUES,
          localID: result.data,
        });
      })
      .catch((err) => {
        alert(err);
      });
  };
};

const deleteLocalAction = (id) => {
  return async (dispatch) => {
    api
      .delete(`/api/locations/${id}`)
      .then((result) => {
        alert("Xóa địa điểm thành công");
        dispatch(getLocalAction());
      })
      .catch((err) => {
        alert(err);
      });
  };
};

const addLocalAction = (local) => {
  return async (dispatch) => {
    api
      .post(`/api/locations`, local)
      .then((result) => {
        alert("Tạo vị trí thành công");
        dispatch(getLocalAction());
      })
      .catch((err) => {
        alert(err);
      });
  };
};

export { getLocalAction, getLocalIDAction, deleteLocalAction, addLocalAction };
