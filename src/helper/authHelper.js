import { AUTHENTICATION } from "../constant/auth";

export const AuthCheck = (data) => {
  if (
    data.email === AUTHENTICATION.EMAIL &&
    data.password === AUTHENTICATION.PASSWORD
  ) {
    return true;
  } else return false;
};
