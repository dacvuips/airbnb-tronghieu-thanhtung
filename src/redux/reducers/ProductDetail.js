import * as ActionType from './../constants/ProductDetail'

const initialState = {
    error: null,
    productDetail: null
}

const ProductDetailReducer = (state = initialState , action) => {
    switch (action.type) {
        case ActionType.PRODUCTDETAIL_REQUEST:
            state.error = null
            state.productDetail = null
            return {...state}            
        case ActionType.PRODUCTDETAIL_SUCCESS:
            state.error = null
            state.productDetail = action.payload
            return {...state}
        case ActionType.PRODUCTDETAIL_FAILED:
            state.error = action.payload
            state.productDetail = null
            return {...state}
        default:
            return {...state}
    }
}

export default ProductDetailReducer