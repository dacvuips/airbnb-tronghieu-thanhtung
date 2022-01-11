import * as ActionType from '../constants/ListProduct'
import api from '../../utils/apiUtils'

export const actProduct =  ( skip, pageSize, pageSizeCurrent, id) => {
    return (dispatch) => {
        dispatch(actProductRequest())
        api
        .get(!id ? `api/rooms/?skip=${skip}&limit=${pageSize}`: `/api/rooms?locationId=${id}&skip=${skip}&limit=${pageSize}`)
        .then((result) => {
            if (skip === 0 && pageSize === 0) {
                const length = result.data.length;
                dispatch(actProductSuccess(result.data.slice(0, pageSize === 0 ? pageSizeCurrent : pageSize),length))
            } else {
                dispatch(actProductSuccess(result.data))
            }
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

const actProductSuccess = (data, length = 0) => {
    let payload = null;
    if (length) {
        payload = {data, length}
    } else {
        payload = {data}
    }
    return {
        type : ActionType.PRODUCT_SUCCESS,
        payload 
    }
}

const actProductFailed = (error) => {
    return {
        type : ActionType.PRODUCT_FAILED,
        payload : error
    }
}