// import React from "react";
// import { Outlet, useNavigate } from "react-router-dom";
// import { Header, navData, getCookie, Footer } from "esstart-components";

// const DashboardWrapper = ({ authStatus, headerShow }: any) => {
//   const username: any = getCookie("username");
//   const navigate = useNavigate();

//   return (
//     <>
//       {headerShow && (
//         <Header
//           navData={navData}
//           username={username}
//           navigate={navigate}
//           authStatus={authStatus}
//         />
//       )}
//       <Outlet />
//       {headerShow && (
//         <>
//           <Footer />
//         </>
//       )}
//     </>
//   );
// };
// export default DashboardWrapper;
