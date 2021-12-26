import { combineReducers } from "redux";
import LocationReducer from './reducers/Location'
import ProductReducer from './reducers/Product'

const rootReducer = combineReducers ({
    LocationReducer,
    ProductReducer,
})

export default rootReducer