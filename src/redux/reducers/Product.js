import * as ActionType from '../constants/Product'

const initialState = {
    error : null,
    listProduct : null,
}

const ProductReducer = (state = initialState , action) => {
    switch (action.type) {
        case ActionType.PRODUCT_REQUEST:
            state.error = null
            state.listProduct = null
            return {...state}
        case ActionType.PRODUCT_SUCCESS: 
            state.error = null
            state.listProduct = action.payload
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