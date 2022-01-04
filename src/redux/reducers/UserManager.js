import { GET_USER_REQUEST } from "./../constants/UserManager";

const stateDefault = {
  userData: [],
};

const UserManagerReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      state.userData = action.userData;
      return { ...state };
    default:
      return { ...state };
  }
}

export default UserManagerReducer