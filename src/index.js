import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store } from "./redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import { Authprovider } from "./Context/AuthContext";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React>
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  // </React>
);

reportWebVitals();
