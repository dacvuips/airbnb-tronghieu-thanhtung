import { POST_USER_LOGIN, POST_USER_LOGIN_ERROR } from "redux/types/LoginType";

const stateDefault = {
  loading: null,
  error: null,
};

export const LoginReduce = (state = stateDefault, action) => {
  switch (action.type) {
    case POST_USER_LOGIN:
      state.loading = action.loading;
      return { ...state };

    case POST_USER_LOGIN_ERROR:
      state.error = action.error;
      return { ...state };

    default:
      return { ...state };
  }
};
