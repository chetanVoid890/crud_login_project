// import React from "react";
// import { Navigate } from 'react-router-dom';

// const NavigateToLogin = () => {
//   const location = window.location;
//   const params = new URLSearchParams(location.search);
//   const queryString = params.toString();

//   if (location.href.includes('/mydevices?tvCode')) {
//     localStorage.setItem("next", `/${(location?.pathname + location.search).substring(1)}`)
//   }

//   if (location.href.includes('/login?productId')) {
//     localStorage.setItem("queryString", queryString);
//   }

//   const getLoginRoute = () => {
//     let url = '/login';
//     if (queryString) {y
//       url += `?${queryString}`;
//     }
//     return url;
//   }

//   return (<Navigate to={getLoginRoute()} />)
// }
// export default NavigateToLogin;
