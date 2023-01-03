// import React, { useEffect, useState, useRef } from "react";
// import HeroLogo from "../../assets/images/web_logo.svg";
// import MobileLogo from "../../assets/images/mobile_logo.svg";
// import MobileMenu from "../../assets/images/mobile_menu.svg";
// import Account from "../../assets/images/noun_user_account.svg";
// import UserAccount from "../../assets/images/user_account.svg";
// import { removeAuthCookies, getCookie } from "../../utils/Cookies";
// import "./styleHeader.css";

// interface IProps {
//   navigate?: Function;
//   navData: any;
//   authStatus: number;
//   username: string;
// }

// const Header = ({ navigate, authStatus, navData, username }: IProps) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const { pages, accountOption } = navData;
//   const [isOpenPage, setIsOpenPage] = useState(false);
//   const [isWidth, setIsWidth] = useState(window.innerWidth);
//   const wrapperRef = useRef(null);
//   const closeAccountMenu = (ref: any) => {
//     useEffect(() => {
//       function handleClickOutside(event: any) {
//         if (ref.current && !ref.current.contains(event.target)) {
//           console.log("false");
//           setIsOpen(false);
//         }
//       }
//       document.addEventListener("mousedown", handleClickOutside);
//       return () => {
//         document.removeEventListener("mousedown", handleClickOutside);
//       };
//     }, [ref]);
//   };

//   closeAccountMenu(wrapperRef);

//   useEffect(() => {
//     function handleResize() {
//       setIsWidth(window.innerWidth);
//     }
//     window.addEventListener("resize", handleResize);
//   });

//   const handleRedirect = (route: string) => {
//     if (navigate) {
//       navigate(route);
//       setIsOpen(false);
//     } else {
//       window.location.href = `${route}`;
//     }
//   };
//   const handleAccount = () => {
//     if (isOpen) {
//       setIsOpen(false);
//     } else {
//       setIsOpen(true);
//     }
//   };
//   const handlePage = () => {
//     if (isOpenPage) {
//       setIsOpenPage(false);
//     } else {
//       setIsOpen(false);
//       setIsOpenPage(true);
//     }
//   };

//   const logoutAction = () => {
//     removeAuthCookies();
//     window.location.href = "/login";
//   };

//   return (
//     <>
//       <div className="main-header-desktop">
//         <div>
//           <img
//             src={isWidth < 992 ? MobileLogo : HeroLogo}
//             alt="Web"
//             className={isWidth < 992 ? "" : "hero_logo"}
//           />
//         </div>
//         {isWidth <= 992 ? (
//           <div className="main-page">
//             <img src={MobileMenu} alt="Menu" onClick={handlePage} />
//             {isOpenPage && (
//               <div className="page-menu">
//                 <ul>
//                   {pages.map((page: any) => (
//                     <li
//                       key={page.id}
//                       onClick={() => handleRedirect(page.route)}
//                       className={
//                         window.location.pathname === page.route ? "active" : ""
//                       }
//                     >
//                       {page.label}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>
//         ) : (
//           <div className="middle-header-desktop">
//             {pages.map((page: any) =>
//               authStatus === 1 && page.label !== "Home" ? (
//                 <p
//                   key={page.id}
//                   onClick={() => handleRedirect(page.route)}
//                   className={
//                     window.location.pathname === page.route ? "active" : ""
//                   }
//                 >
//                   {page.label}
//                 </p>
//               ) : (
//                 authStatus !== 1 &&
//                 page.label !== "My Dashboard" && (
//                   <p
//                     key={page.id}
//                     onClick={() => handleRedirect(page.route)}
//                     className={
//                       window.location.pathname === page.route ? "active" : ""
//                     }
//                   >
//                     {page.label}
//                   </p>
//                 )
//               )
//             )}
//           </div>
//         )}
//         <div style={{ display: "flex", justifyContent: "space-between" }}>
//           {authStatus === 1 ? (
//             <>
//               <div className="account-menu">
//                 <div className="account-section" onClick={handleAccount}>
//                   <img src={Account} alt="account" />
//                   <p
//                     style={{
//                       color: "#FF7200",
//                       fontSize: "18px",
//                       paddingLeft: "8px",
//                       fontWeight: 500,
//                     }}
//                   >
//                     Account
//                   </p>
//                 </div>
//                 {isOpen && (
//                   <div>
//                     <div className="dropdown" ref={wrapperRef}>
//                       <ul>
//                         <li
//                           style={{
//                             display: "flex",
//                             flexWrap: "wrap",
//                             justifyContent: "center",
//                           }}
//                         >
//                           <img
//                             src={UserAccount}
//                             alt="User Account"
//                             style={{ paddingRight: "15px" }}
//                           />
//                           <span style={{ marginTop: "15px" }}>
//                             {username ? username : "Not Set"}
//                           </span>
//                         </li>
//                         {accountOption?.map((account: any) => (
//                           <li
//                             key={account.id}
//                             className="icon_label"
//                             onClick={() => handleRedirect(account.route)}
//                           >
//                             <img src={account.iconUrl} />
//                             {account.label}
//                           </li>
//                         ))}
//                         <li
//                           className="icon_label"
//                           onClick={logoutAction}
//                           style={{
//                             marginTop: "20px",
//                             paddingBottom: "0",
//                             borderTop: "1px solid rgba(0, 0, 0, 0.12)",
//                           }}
//                         >
//                           <img
//                             src="https://d3duupwobdv9t6.cloudfront.net/icons/logout.svg"
//                             alt="esstart Logout"
//                           />
//                           Logout
//                         </li>
//                       </ul>
//                       {/* <div>
//                         <img src={UserAccount} alt="User Account" style={{ paddingRight: '15px' }} />
//                         <p style={{ marginTop: '15px' }}>{ username ? username : 'Not Set' }</p>
//                       </div>
//                       <div className='dropdown-menu'>
//                         {
//                           accountOption?.map((account: any) => (
//                             <div key={account.id} className="icon_label" onClick={() => handleRedirect(account.route)}><img src={account.iconUrl} /><p>{account.label}</p></div>
//                           ))
//                         }
//                       </div>
//                       <div className="logout_label" onClick={logoutAction}><img src="https://d3duupwobdv9t6.cloudfront.net/icons/logout.svg" alt="esstart Logout" /><span>Logout</span></div> */}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </>
//           ) : (
//             <>
//               <button
//                 style={{
//                   background: "unset",
//                   border: "unset",
//                   fontSize: "16px",
//                   color: "#202020",
//                   marginRight: "20px",
//                 }}
//                 onClick={() => (window.location.href = "/login")}
//               >
//                 LOGIN
//               </button>
//               <button
//                 style={{
//                   background: "#FF7200 0% 0% no-repeat padding-box",
//                   border: "unset",
//                   borderRadius: "20px",
//                   padding: "6px 20px",
//                   color: "#fff",
//                   fontSize: "14px",
//                 }}
//                 onClick={() => (window.location.href = "/signup")}
//               >
//                 SIGN UP
//               </button>
//             </>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;
