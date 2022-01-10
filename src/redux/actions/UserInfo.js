import * as ActionType from './../../redux/constants/UserInfo'

export const actUserInfo = () => {
    return (dispatch) => {
        dispatch(actUserInfoRequest())
        api.post('/api/users/upload-avatar', user)
        .then((result) => {
            console.log(result)
            dispatch(actUserInfoSuccess(result.data))
        })
        .catch((error) => {
            dispatch(actUserInfoFailed(error))
        })
    }
}

const actUserInfoRequest = () => {
    return {
        type: ActionType.GET_USER_REQUEST
    }
}

const actUserInfoSuccess = (data) => {
    return {
        type: ActionType.GET_USER_SUCCESS,
        payload : data
    }
}

const actUserInfoFailed = (error) => {
    return {
        type: ActionType.GET_USER_FAILED,
        payload : error
    }
}
