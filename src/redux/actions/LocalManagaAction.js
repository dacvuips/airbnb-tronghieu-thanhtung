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
        console.log(err);
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
        console.log(err);
      });
  };
};

const deleteLocalAction = (id) => {
  return async (dispatch) => {
    api
      .delete(`/api/locations/${id}`)
      .then((result) => {
        alert("Xóa địa điểm thành công");
        // dispatch(getLocalAction());
      })
      .catch((err) => {
        alert("Xoa không thành công");
        console.log(err);
      });
  };
};

const addLocalAction = (local) => {
  return async (dispatch) => {
    api
      .post(`/api/locations`, local)
      .then((result) => {
        alert("Tạo vị trí thành công");
        // dispatch(getLocalAction());
      })
      .catch((err) => {
        alert("Tạo không thành công");
        console.log(err);
      });
  };
};

const UpdateLocalImage = (id, image) => {
  return async (dispatch) => {
    api
      .post(`/api/locations/upload-images/${id}`, image)
      .then((result) => {
        alert("Cập nhật ảnh thành công");
      })
      .catch((err) => {
        alert("Cập nhật không thành công");
        console.log(err);
      });
  };
};

const UpdateLocalAction = (id, local) => {
  return async (dispatch) => {
    api
      .put(`/api/locations/${id}`, local)
      .then((result) => {
        alert("Cập nhật thành công");
      })
      .catch((err) => {
        alert("Cập nhật không thành công");
        console.log(err);
      });
  };
};

const getLocalRateAction = (value) => {
  return async (dispatch) => {
    api
      .get(`/api/locations/by-valueate?valueate=${value}`)
      .then((result) => {
        dispatch({
          type: GET_LOCAL_REQUES,
          local: result.data,
        });
      })
      .catch((err) => {
        alert("Không tìm thấy");
        console.log(err);
      });
  };
};

export {
  UpdateLocalImage,
  UpdateLocalAction,
  getLocalAction,
  getLocalIDAction,
  deleteLocalAction,
  addLocalAction,
  getLocalRateAction,
};
