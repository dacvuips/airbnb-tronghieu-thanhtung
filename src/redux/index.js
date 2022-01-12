import { combineReducers } from "redux";
import LocationReducer from "./reducers/Location";
import ProductReducer from "./reducers/ListProduct";
import ProductDetailReducer from "./reducers/ProductDetail";
import LoginReducer from "./reducers/Login";
import { UserManagerReducer } from "./reducers/UserManagerReducer";
import { LocalManagerReducer } from "./reducers/LocalManagerReducer";
import { roomManagerReducer } from "./reducers/RoomManagerReducer";
import { CardReducer } from "./reducers/CardReducer";

const rootReducer = combineReducers({
  LocationReducer,
  ProductReducer,
  ProductDetailReducer,
  LoginReducer,
  UserManagerReducer,
  LocalManagerReducer,
  roomManagerReducer,
  CardReducer,
});

export default rootReducer;
