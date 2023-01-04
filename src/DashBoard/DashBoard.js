import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../Componant/Header/Header";
// import { Header, navData, getCookie, Footer } from "esstart-components";

const DashBoard = ({ headerShow }) => {
  //   const username = getCookie('username');
  const navigate = useNavigate();

  return (
    <>
      {headerShow && <Header />}
      <Outlet />
    </>
  );
};
export default DashBoard;
