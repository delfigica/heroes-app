import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/heroes-app/login" element={<LoginScreen />} />
        <Route path="/*"  element={<DashboardRoutes/>} />
      </Routes>
    </BrowserRouter>
  );
};
