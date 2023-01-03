import "./App.css";
import React from "react";
import RouteInitial from "./route/RouteInitial";
import { Authprovider } from "./Context/AuthContext";

function App() {
  return (
    <Authprovider>
      <RouteInitial />
    </Authprovider>
  );
}

export default App;

// {
//   /* <Route path="" element={<Register />} /> */
// }

// {
//   /* <BrowserRouter>
//         <Header />
//         <Routes>
//           <Route path="login" element={<Login />} />
//           <Route path="/product" element={<Product />} />
//           <Route path="*" element={<PageNotFound />} />
//         </Routes>
//       </BrowserRouter> */
// }
