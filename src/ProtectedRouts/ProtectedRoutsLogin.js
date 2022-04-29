import { Outlet, Navigate } from "react-router-dom";

const ProtectedRouteLogin = ({ children }) => {
  let localstore = localStorage.getItem("token");

  if (localstore) {
    return <Navigate replace to="main" />;
  }
  return <Outlet />;
};

export default ProtectedRouteLogin;
