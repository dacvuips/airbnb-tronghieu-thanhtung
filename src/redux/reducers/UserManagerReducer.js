import { GET_USER_REQUEST } from "redux/types/UserManagerType";

const stateDefault = {
  userData: [],
};

export const UserManagerReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      state.userData = action.userData;
      return { ...state };
    default:
      return { ...state };
  }
};
