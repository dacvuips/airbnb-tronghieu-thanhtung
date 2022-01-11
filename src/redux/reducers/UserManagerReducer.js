import {
  GET_USER_REQUEST,
  GET_USER_ID_REQUEST,
} from "redux/types/UserManagerType";

const stateDefault = {
  userData: [],
  userID: {},
};

export const UserManagerReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      state.userData = action.userData;
      return { ...state };
    case GET_USER_ID_REQUEST:
      state.userID = action.userID;
      return { ...state };
    default:
      return { ...state };
  }
};
