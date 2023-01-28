import { AUTH_TYPE } from "./type";
import { AuthCheck } from "../../helper/authHelper";

export const loginHandler = (userObj) => {
  return (dispatch) => {
    dispatch({
      type: AUTH_TYPE.LOGIN_REQUEST,
    });
    if (AuthCheck(userObj)) {
      dispatch({
        type: AUTH_TYPE.LOGIN_SUCCESS,
        payload: userObj,
      });
    }
    if (!AuthCheck(userObj)) {
      dispatch({
        type: AUTH_TYPE.LOGIN_FAIL,
      });
    }
  };
};

export const logOutHandler = () => {
  return (dispatch) => {
    dispatch({
      type: AUTH_TYPE.LOGOUT_SUCCESS,
    });
  };
};
