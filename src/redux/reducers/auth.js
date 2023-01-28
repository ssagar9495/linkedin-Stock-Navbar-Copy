import { AUTH_TYPE } from "../actions/type";

const initialState = {
  email: "",
  password: "",
  loading: false,
  isLogged: false,
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_TYPE.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        isLogged: false,
      };
    case AUTH_TYPE.LOGIN_SUCCESS:
      return {
        ...state,
        email: action?.payload?.email,
        password: action?.payload?.password,
        isLogged: true,
        loading: false,
      };
    case AUTH_TYPE.LOGIN_FAIL:
      return {
        ...state,
        isLogged: false,
        loading: false,
      };

    case AUTH_TYPE.LOGOUT_SUCCESS:
      return {
        ...state,
        email: null,
        password: null,
        isLogged: false,
        loading: false,
      };

    default:
      return state;
  }
};

export default LoginReducer;
