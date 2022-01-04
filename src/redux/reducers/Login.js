import * as ActionType from "./../constants/Login";

const stateDefault = {
  loading: null,
  error: null,
};

const LoginReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case ActionType.POST_USER_LOGIN:
      state.loading = action.loading;
      return { ...state };

    case ActionType.POST_USER_LOGIN_ERROR:
      state.error = action.error;
      return { ...state };

    default:
      return { ...state };
  }
};

export default LoginReducer