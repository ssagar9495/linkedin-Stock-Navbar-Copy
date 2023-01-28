import LoginReducer from "./auth";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  LoginReducer,
});

export default rootReducer;
