import {
  GET_LOCALID_REQUES,
  GET_LOCAL_RATE,
  GET_LOCAL_REQUES,
} from "redux/types/LocalManagerType";

const localState = {
  local: [],
  localID: [],
  searchRate: [],
};

export const LocalManagerReducer = (state = localState, action) => {
  switch (action.type) {
    case GET_LOCAL_REQUES:
      state.local = action.local;
      return { ...state };
    case GET_LOCALID_REQUES:
      state.localID = action.localID;
      return { ...state };
    case GET_LOCAL_RATE:
      state.searchRate = action.searchRate;
      return { ...state };

    default:
      return { ...state };
  }
};
