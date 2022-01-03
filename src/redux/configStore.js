import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { UserManagerReducer } from "./reducers/UserManagerReducer";
import { LocalManagerReducer } from "./reducers/LocalManagerReducer";
// import { LoginReduce } from "./reducers/LoginReduce";
const rootReducer = combineReducers({
  UserManagerReducer,
  LocalManagerReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
