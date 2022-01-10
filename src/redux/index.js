import { combineReducers } from "redux";
import LocationReducer from './reducers/Location'
import ProductReducer from './reducers/ListProduct'
import ProductDetailReducer from './reducers/ProductDetail'
import LoginReducer from './reducers/Login'
import UserInfoReducer from './reducers/UserInfo'

const rootReducer = combineReducers ({
    LocationReducer,
    ProductReducer,
    ProductDetailReducer,
    LoginReducer,
    UserInfoReducer,
})

export default rootReducer