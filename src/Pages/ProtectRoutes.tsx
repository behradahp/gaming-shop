// React Stuff
import { JSX } from "react";
import { Navigate, Outlet } from "react-router-dom";

// Context
import { useStore } from "../context/store";

export const ProtectRoutes: React.FC = (): JSX.Element => {
  const { store } = useStore();
  return store.user.isAuthenticated ? <Outlet /> : <Navigate to='/login' />;
};
