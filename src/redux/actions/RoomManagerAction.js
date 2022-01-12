import {
  GET_ROOMID_REQUES,
  GET_ROOM_REQUES,
} from "./../../redux/constants/RoomManagerType";
import api from "../../utils/apiUtils";

const getRoomAction = () => {
  return async (dispatch) => {
    api
      .get(`/api/rooms`)
      .then((result) => {
        dispatch({
          type: GET_ROOM_REQUES,
          room: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const getRoomIDAction = (id) => {
  return async (dispatch) => {
    api
      .get(`/api/rooms/${id}`)
      .then((result) => {
        dispatch({
          type: GET_ROOMID_REQUES,
          roomID: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const deleteRoomAction = (id) => {
  return async (dispatch) => {
    api
      .delete(`/api/rooms/${id}`)
      .then((result) => {
        dispatch(getRoomAction());

        alert("Xóa Phòng thành công");
        // dispatch(getLocalAction());
      })
      .catch((err) => {
        alert("Xóa không thành công");
        console.log(err);
      });
  };
};

const addRoomAction = (room) => {
  return async (dispatch) => {
    api
      .post(`/api/rooms`, room)
      .then((result) => {
        alert("Tạo phòng thành công");
        dispatch(getRoomAction());
      })
      .catch((err) => {
        alert("Tạo không thành công");
        console.log(err);
      });
  };
};

const UpdateRoomImage = (id, image) => {
  return async (dispatch) => {
    api
      .post(`/api/rooms/upload-image/${id}`, image)
      .then((result) => {
        alert("Cập nhật ảnh thành công");
      })
      .catch((err) => {
        alert("Cập nhật không thành công");
        console.log(err);
      });
  };
};

const UpdateRoomAction = (id, room) => {
  return async (dispatch) => {
    api
      .put(`/api/rooms/${id}`, room)
      .then((result) => {
        alert("Cập nhật thành công");
      })
      .catch((err) => {
        alert("Cập nhật không thành công");
        console.log(err);
      });
  };
};

// const getLocalRateAction = (value) => {
//   return async (dispatch) => {
//     api
//       .get(`/api/locations/by-valueate?valueate=${value}`)
//       .then((result) => {
//         dispatch({
//           type: GET_LOCAL_REQUES,
//           local: result.data,
//         });
//       })
//       .catch((err) => {
//         alert("Không tìm thấy");
//         console.log(err);
//       });
//   };
// };

export {
  addRoomAction,
  UpdateRoomAction,
  getRoomAction,
  getRoomIDAction,
  deleteRoomAction,
  UpdateRoomImage,
};
