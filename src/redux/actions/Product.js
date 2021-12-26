import * as ActionType from '../constants/Product'
import api from '../../utils/apiUtils'


export const actProduct = () => {
    return (dispatch) => {
        dispatch(actProductRequest())
        api
        .get('/api/rooms')
        .then((result) => {
            dispatch(actProductSuccess(result.data))
        })
        .catch((error) => {
            dispatch(actProductFailed(error))
        })
    }
}

const actProductRequest = () => {
    return {
        type : ActionType.PRODUCT_REQUEST
    }
}

const actProductSuccess = (data) => {
    return {
        type : ActionType.PRODUCT_SUCCESS,
        payload : data
    }
}

const actProductFailed = (error) => {
    return {
        type : ActionType.PRODUCT_FAILED,
        payload : error
    }
}