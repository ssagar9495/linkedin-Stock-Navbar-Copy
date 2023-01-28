import React from "react";  
import { Navigate, BrowserRouter, Routes, Route } from "react-router-dom";

import { PrivateLayout, PublicLayout } from "./layout";
import { LoginPage, MainPage } from "../pages/index";
import { ROUTES } from "./routes";

const Router = () => {
  console.log("Router");
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path={ROUTES.LOGIN} element={<LoginPage />}></Route>
        </Route>
        <Route element={<PrivateLayout />}>
          <Route path={ROUTES.MAIN_PAGE} element={<MainPage />}></Route>
        </Route>
        <Route path="*" element={<Navigate to={ROUTES.LOGIN} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
