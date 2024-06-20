import React, { useContext } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Navigate, Outlet } from "react-router";
import "./layout.scss";
import { AuthContext } from "../context/AuthConext";

const Layout = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export const RequireAuth = () => {
  const { currentUser } = useContext(AuthContext);
  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    currentUser && (
      <div className="layout">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    )
  );
};

export default Layout;
