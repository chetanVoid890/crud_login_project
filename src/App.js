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
