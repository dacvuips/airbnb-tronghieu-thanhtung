import * as ActionType from './../../redux/constants/UserInfo'


const initialState = {
  error : null,
  data : null
}

const UserInfoReducer = (state = initialState , action) => {
    switch (action.type) {
      case ActionType.GET_USER_REQUEST:
        state.error = null;
        state.data = null;
        return {...state}
      case ActionType.GET_USER_SUCCESS:
        state.error = null;
        state.data = action.payload;
        return {...state}
      case ActionType.GET_USER_FAILED:
        state.error = action.payload;
        state.data = null;
        return {...state}
      default:
        return {...state}
    }
}



export default UserInfoReducer