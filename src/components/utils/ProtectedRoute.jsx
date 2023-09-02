import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Context } from "../MainComponents/context/Context";

const ProtectedRoutes = () => {
  const { id } = useContext(Context);

  return id ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
