import * as ActionType from './../constants/ProductDetail'
import api from 'utils/apiUtils'

export const actProdctDetail = (id) => {
    return (dispatch) => {
        dispatch(actProdctDetailRequest())
        api
        .get(`/api/rooms/${id}`)
        .then((result) => {
            dispatch(actProdctDetailSuccess(result.data))
        })
        .catch((error) => {
            dispatch(actProdctDetailFailed(error))
        })
    }
}

const actProdctDetailRequest = () => {
    return {
        type : ActionType.PRODUCTDETAIL_REQUEST
    }
}

const actProdctDetailSuccess = (data) => {
    return {
        type : ActionType.PRODUCTDETAIL_SUCCESS,
        payload : data
    }
}

const actProdctDetailFailed = (error) => {
    return {
        type : ActionType.PRODUCTDETAIL_FAILED,
        payload : error
    }
}

