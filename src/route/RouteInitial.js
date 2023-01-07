import React, { useContext } from "react";
import { useRoutes } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { Route } from "./Route";

// default routes
const RouteInitial = () => {
  const { authStatus } = useContext(AuthContext);
  const routing = useRoutes(Route(authStatus));
  return <>{routing}</>;
};

export default RouteInitial;
