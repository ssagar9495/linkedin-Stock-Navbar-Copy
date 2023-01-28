import React, { Fragment } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { ROUTES } from "./routes";
import { useSelector } from "react-redux";

export const PrivateLayout = () => {
  let isLoggedIn = useSelector((state) => state.LoginReducer.isLogged);

  console.log("isLoggedIn===>", isLoggedIn);

  return isLoggedIn ? (
    <Fragment>
      <div className="main-wraper">
        <Outlet />
      </div>
    </Fragment>
  ) : (
    <Navigate to={ROUTES.LOGIN} />
  );
};

export const PublicLayout = () => {
  let isLoggedIn = useSelector((state) => state.LoginReducer.isLogged);
  return isLoggedIn ? <Navigate to={ROUTES.MAIN_PAGE} /> : <Outlet />;
};
