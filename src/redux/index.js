import { combineReducers } from "redux";
import LocationReducer from './reducers/Location'
import ProductReducer from './reducers/ListProduct'
import productDetailReducer from './reducers/ProductDetail'

const rootReducer = combineReducers ({
    LocationReducer,
    ProductReducer,
    productDetailReducer,
})

export default rootReducer