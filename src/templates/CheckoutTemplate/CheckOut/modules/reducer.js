import * as ActionType from "./constants";

const initialState = {
  loading: false,
  data: null,
  error: null,
  danhSachDatGhe: [],
  thongTinDatVe: {},
};

const datveReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.DAT_VE_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case ActionType.DAT_VE_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };

    case ActionType.DAT_VE_FAILED:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };
    case ActionType.DAT_VE:
      let danhSachGheCapNhat = [...state.danhSachDatGhe];
      let index = danhSachGheCapNhat.findIndex(
        (gheDD) => gheDD.maGhe === action.gheDuocChon.maGhe
      );
      if (index !== -1) {
        danhSachGheCapNhat.splice(index, 1);
      } else {
        danhSachGheCapNhat.push(action.gheDuocChon);
      }

      state.danhSachDatGhe = action.payload;
      return { ...state, danhSachDatGhe: danhSachGheCapNhat };

    case ActionType.THONG_TIN_DAT_VE_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case ActionType.THONG_TIN_DAT_VE_SUCCESS:
      state.loading = false;
      state.thongTinDatVe = action.payload;
      state.error = null;
      return { ...state };

    default:
      return { ...state };
  }
};

export default datveReducer;
