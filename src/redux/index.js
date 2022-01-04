import { combineReducers } from "redux";
import LocationReducer from './reducers/Location'
import ProductReducer from './reducers/ListProduct'
import ProductDetailReducer from './reducers/ProductDetail'
import LoginReducer from './reducers/Login'
import UserManagerReducer from './reducers/UserManager'

const rootReducer = combineReducers ({
    LocationReducer,
    ProductReducer,
    ProductDetailReducer,
    LoginReducer,
    UserManagerReducer
})

export default rootReducer