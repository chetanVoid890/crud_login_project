import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../Componant/Header/Header";

const DashBoard = ({ headerShow }) => {
  const navigate = useNavigate();
  return (
    <>
      {headerShow && <Header />}
      <Outlet />
    </>
  );
};
export default DashBoard;
