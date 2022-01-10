import * as ActionType from "./../constants/Login";

let userLogin = null;

if (localStorage.getItem("USER_LOGIN")) {
  userLogin = JSON.parse(localStorage.getItem("USER_LOGIN"))
}


const stateDefault = {
  userLogin: userLogin,
  loading: null,
  error: null,
};

const LoginReducer = (state = stateDefault, action) => {
  switch (action.type) {
    
    case ActionType.POST_USER_LOGIN_SUCCESS:
      state.userLogin = action.payload;
      return {...state}

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