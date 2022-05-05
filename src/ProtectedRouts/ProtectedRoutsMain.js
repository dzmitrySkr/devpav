import { Outlet, Navigate } from "react-router-dom";

const ProtectedRouteMain = () => {
  let localstore = localStorage.getItem("token");

  if (!localstore) {
    return <Navigate replace to="/" />;
  }
  return <Outlet />;
};

export default ProtectedRouteMain;
