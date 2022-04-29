import { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRouteMain = ({ children }) => {
  let localstore = localStorage.getItem("token");

  if (!localstore) {
    return <Navigate replace to="/" />;
  }
  return <Outlet />;
};

export default ProtectedRouteMain;
