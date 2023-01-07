import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Componant/Header/Header";

const DashBoard = ({ headerShow }) => {
  return (
    <>
      {headerShow && <Header />}
      <Outlet />
    </>
  );
};
export default DashBoard;
