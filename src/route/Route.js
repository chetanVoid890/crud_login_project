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

// import DashboardWrapper from "../view/Dashboard/DashboardWrapper";
// import NavigateToLogin from "../view/Auth/NavigateToLogin";
// import { Navigate } from 'react-router-dom';
// import { MyDevices } from '../components/my-devices/MyDevices';
// import MyCredentials from '../components/my-credentials';
// import { Dashboard } from '../components/dashboard';
// import GamesAndActivities from '../components/gamesAndActivity';
// import { Login } from '../components/login';
// import { Signup } from '../components/signup';
// import { ConfirmAccount } from "../components/confirmAccount";
// import { SocialLoginSuccess } from "../components/socialLogin/socialLoginSuccess";
// import { EmailExists } from "../components/emailExists";
// import { PageNotFound, Error } from "esstart-components";

// // console.log
// export const routes = (isLoggedIn: number, userInfoData: any) => [
//   {
//     path: "/",
//     element: isLoggedIn === 1 ? <DashboardWrapper authStatus={isLoggedIn} headerShow={true} /> : <NavigateToLogin />,
//     children: [
//       { path: '/', element: <Navigate to="/dashboard" /> },
//       {
//         path: 'dashboard',
//         index: true,
//         element: <Dashboard userInfoData={userInfoData} />,
//       },
//       {
//         path: "mydevices",
//         index: true,
//         element: <MyDevices />,
//       },
//       {
//         path: 'allproducts',
//         index: true,
//         element: <GamesAndActivities />,
//       },
//       {
//         path: 'credentials',
//         index: true,
//         element: <MyCredentials />,
//       },
//       {
//         path: '*',
//         index: true,
//         element: <PageNotFound />,
//       }
//     ],
//   },
//   {
//     path: '/',
//     element: isLoggedIn === 1 ? <Navigate to="/dashboard" /> : <DashboardWrapper authStatus={isLoggedIn} headerShow={false} />,
//     children: [
//       {
//         path: 'login',
//         index: true,
//         element: <Login />,
//       },
//       {
//         path: 'signup',
//         index: true,
//         element: <Signup />,
//       },
//       {
//         path: 'confirm-account',
//         index: true,
//         element: <ConfirmAccount />,
//       },
//       {
//         path: 'social-login-success',
//         index: true,
//         element: <SocialLoginSuccess />,
//       },
//       {
//         path: 'emailExists',
//         index: true,
//         element: <EmailExists />,
//       },
//       {
//         path: 'error',
//         index: true,
//         element: <Error />,
//       },
//       {
//         path: '*',
//         index: true,
//         element: <PageNotFound />,
//       }
//     ],
//   },
// ];

// import React from "react";
// import { Outlet, useNavigate } from "react-router-dom";
// import { Header, navData, getCookie, Footer } from "esstart-components";

// const DashboardWrapper = ({authStatus, headerShow}: any) => {
//   const username: any = getCookie('username');
//   const navigate = useNavigate();

//   return (
//     <>
//       {
//         headerShow &&
//           <Header navData={navData} username={username} navigate={navigate} authStatus={authStatus} />
//       }
//       <Outlet />
//       {
//         headerShow &&
//         <><Footer /></>
//       }
//     </>
//   )
// }
// export default DashboardWrapper;
