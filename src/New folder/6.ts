// import DashboardWrapper from "../view/Dashboard/DashboardWrapper";
// import NavigateToLogin from "../view/Auth/NavigateToLogin";
// import { Navigate } from "react-router-dom";
// import { MyDevices } from "../components/my-devices/MyDevices";
// import MyCredentials from "../components/my-credentials";
// import { Dashboard } from "../components/dashboard";
// import GamesAndActivities from "../components/gamesAndActivity";
// import { Login } from "../components/login";
// import { Signup } from "../components/signup";
// import { ConfirmAccount } from "../components/confirmAccount";
// import { SocialLoginSuccess } from "../components/socialLogin/socialLoginSuccess";
// import { EmailExists } from "../components/emailExists";
// import { PageNotFound, Error } from "esstart-components";

// // console.log
// export const routes = (isLoggedIn: number, userInfoData: any) => [
//   {
//     path: "/",
//     element:
//       isLoggedIn === 1 ? (
//         <DashboardWrapper authStatus={isLoggedIn} headerShow={true} />
//       ) : (
//         <NavigateToLogin />
//       ),
//     children: [
//       { path: "/", element: <Navigate to="/dashboard" /> },
//       {
//         path: "dashboard",
//         index: true,
//         element: <Dashboard userInfoData={userInfoData} />,
//       },
//       {
//         path: "mydevices",
//         index: true,
//         element: <MyDevices />,
//       },
//       {
//         path: "allproducts",
//         index: true,
//         element: <GamesAndActivities />,
//       },
//       {
//         path: "credentials",
//         index: true,
//         element: <MyCredentials />,
//       },
//       {
//         path: "*",
//         index: true,
//         element: <PageNotFound />,
//       },
//     ],
//   },
//   {
//     path: "/",
//     element:
//       isLoggedIn === 1 ? (
//         <Navigate to="/dashboard" />
//       ) : (
//         <DashboardWrapper authStatus={isLoggedIn} headerShow={false} />
//       ),
//     children: [
//       {
//         path: "login",
//         index: true,
//         element: <Login />,
//       },
//       {
//         path: "signup",
//         index: true,
//         element: <Signup />,
//       },
//       {
//         path: "confirm-account",
//         index: true,
//         element: <ConfirmAccount />,
//       },
//       {
//         path: "social-login-success",
//         index: true,
//         element: <SocialLoginSuccess />,
//       },
//       {
//         path: "emailExists",
//         index: true,
//         element: <EmailExists />,
//       },
//       {
//         path: "error",
//         index: true,
//         element: <Error />,
//       },
//       {
//         path: "*",
//         index: true,
//         element: <PageNotFound />,
//       },
//     ],
//   },
// ];
