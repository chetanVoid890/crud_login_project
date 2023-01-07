import React from "react";
import Login from "../Componant/Login/Login";
import Product from "../Componant/product/Product";
import Contact from "../Componant/Contact/Contact";
import PageNotFound from "../Componant/PageNotfound/PageNotFound";
import ReturnFuncction from "../ReturnFunction/ReturnFunction";
import { Navigate } from "react-router-dom";
import Crude from "../Componant/Crude/Crude";
import DashBoard from "../DashBoard/DashBoard";
import AboutUs from "../AboutUs/AboutUs";
export const Route = (LoggedIn) => [
  {
    path: "/",
    element:
      LoggedIn === 1 ? <DashBoard headerShow={true} /> : <ReturnFuncction />,
    children: [
      {
        path: "product",
        index: true,
        element: <Product />,
      },
      {
        path: "crude",
        index: true,
        element: <Crude />,
      },
      {
        path: "about_us",
        index: true,
        element: <AboutUs />,
      },
      {
        path: "contact",
        index: true,
        element: <Contact />,
      },
    ],
  },
  {
    path: "/",
    element:
      LoggedIn === 1 ? (
        <Navigate to="/product" />
      ) : (
        <DashBoard headerShow={false} />
      ),
    children: [
      {
        path: "login",
        index: true,
        element: <Login />,
      },
      {
        path: "*",
        index: true,
        element: <PageNotFound />,
      },
    ],
  },
];
