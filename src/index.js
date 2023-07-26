import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import PageScrollToTop from "./components/Common/Component/PageScrollToTop";
import swDev from "./swDev";
import { hydrate, render } from "react-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PageScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
// const rootElement = document.getElementById("root");
// if (rootElement.hasChildNodes()) {
//   hydrate(AppVer, rootElement);
// } else {
//   render(AppVer, rootElement);
// }
swDev();
