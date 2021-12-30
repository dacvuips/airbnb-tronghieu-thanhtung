import * as ActionType from '../constants/ListProduct'

const initialState = {
    error : null,
    listProduct : null,
    length: 0,
}

const ProductReducer = (state = initialState , action) => {
    switch (action.type) {
        case ActionType.PRODUCT_REQUEST:
            state.error = null
            state.listProduct = null
            return {...state}
        case ActionType.PRODUCT_SUCCESS: 
            state.error = null
            state.listProduct = action.payload.data
            state.length = action.payload.length ? action.payload.length : state.length
            return {...state}
        case ActionType.PRODUCT_FAILED:
            state.error = action.payload
            state.listProduct = null
            return {...state}
    
        default:
            return {...state};
    }
}

export default ProductReducer