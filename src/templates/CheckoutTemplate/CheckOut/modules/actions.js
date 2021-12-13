import * as ActionType from "./constants";
import api from "./../../../../utils/apiUtils";

export const actDatVe = (maLichChieu) => {
  return (dispatch) => {
    dispatch(actDatVeRequest());

    api
      .get(`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)
      .then((result) => {
        dispatch(actDatVeSuccess(result.data.content));
      })
      .catch((error) => {
        dispatch(actDatVeFailed(error));
      });
  };
};

const actDatVeRequest = () => {
  return {
    type: ActionType.DAT_VE_REQUEST,
  };
};

const actDatVeSuccess = (data) => {
  return {
    type: ActionType.DAT_VE_SUCCESS,
    payload: data,
  };
};

const actDatVeFailed = (error) => {
  return {
    type: ActionType.DAT_VE_FAILED,
    payload: error,
  };
};

export const actDanhSachDatVe = (data) => {
  return {
    type: ActionType.DAT_VE,
    gheDuocChon: data,
  };
};

export const actThongTinDatVe = (thongTinDatVe) => {
  return (dispatch) => {
    dispatch(actThongTinDatVeRequest());

    api
      .post("QuanLyDatVe/DatVe", thongTinDatVe)
      .then((result) => {
        // actThongTinDatVeSuccess();
        alert("Đặt vé thành công");
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const actThongTinDatVeRequest = () => {
  return {
    type: ActionType.THONG_TIN_DAT_VE_REQUEST,
  };
};

// const actThongTinDatVeSuccess = (data) => {
//   return {
//     type: ActionType.THONG_TIN_DAT_VE_SUCCESS,
//     payload: data,
//   };
// };
