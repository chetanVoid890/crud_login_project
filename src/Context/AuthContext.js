import React, { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
const loading = 0;
const SignedIn = 1;
const SignedOut = 2;

export const AuthStatus = {
  loading,
  SignedIn,
  SignedOut,
};

const defaultState = {
  authStatus: AuthStatus.Loading,
  setAuthStatus: (auth) => {},
};

export const AuthContext = createContext(defaultState);

export const Authprovider = (props) => {
  const accessToken = Cookies.get("user");
  const [authStatus, setAuthStatus] = useState(AuthStatus.Loading);
  console.log(accessToken);

  useEffect(() => {
    (async function () {
      if (accessToken) {
        setAuthStatus(AuthStatus.SignedIn);
      } else {
        setAuthStatus(AuthStatus.SignedOut);
      }
    })();
  }, [accessToken]);

  if (authStatus === AuthStatus.Loading) {
    return null;
  }
  const state = {
    authStatus,
    accessToken,
    setAuthStatus,
  };

  return (
    <AuthContext.Provider value={state}>{props.children}</AuthContext.Provider>
  );
};

// const App = () => {
//   const [name, setName] = useState("");
//   const [pwd, setPwd] = useState("");

//   const handle = () => {
//     localStorage.setItem("Name", name);
//     localStorage.setItem("Password", pwd);
//   };
//   const remove = () => {
//     localStorage.removeItem("Name");
//     localStorage.removeItem("Password");
//   };
//   return (
//     <div className="App">
//       <h1>Name of the user:</h1>
//       <input
//         placeholder="Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <h1>Password of the user:</h1>
//       <input
//         type="password"
//         placeholder="Password"
//         value={pwd}
//         onChange={(e) => setPwd(e.target.value)}
//       />
//       <div>
//         <button onClick={handle}>Done</button>
//       </div>
//       {localStorage.getItem("Name") && (
//         <div>
//           Name: <p>{localStorage.getItem("Name")}</p>
//         </div>
//       )}
//       {localStorage.getItem("Password") && (
//         <div>
//           Password: <p>{localStorage.getItem("Password")}</p>
//         </div>
//       )}
//       <div>
//         <button onClick={remove}>Remove</button>
//       </div>
//     </div>
//   );
// };
// import React, { useState, useEffect } from "react";

// const AuthContext = React.createContext({
//   isLoggedIn: 1,
//   onLogin: (email, password) => {},
//   onLogout: () => {},
// });

// export const AuthContextProvider = (props) => {
//   const [isLoggedIn, setIsLoggedIn] = useState("1");

//   const loginHandler = () => {
//     localStorage.setItem("isLoggedIn", 1);

//     setIsLoggedIn(true);
//   };

//   useEffect(() => {
//     if (localStorage.getItem("isLoggedIn") === "1") {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   const logoutHandler = () => {
//     localStorage.removeItem("isLoggedIn");
//     setIsLoggedIn(false);
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         isLoggedIn: isLoggedIn,
//         onLogin: loginHandler,
//         onLogout: logoutHandler,
//       }}
//     >
//       {props.children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContext;
