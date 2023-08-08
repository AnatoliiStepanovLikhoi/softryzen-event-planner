import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HashRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import HelmetInfo from "./services/HelmetInfo.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <HashRouter>
        <HelmetInfo />
        <App />
      </HashRouter>
    </HelmetProvider>
  </React.StrictMode>
);
