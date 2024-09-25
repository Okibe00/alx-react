import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App/App.js";
import BodySection from "./BodySection/BodySection";
const dom = document.querySelector("#root");
const root = createRoot(dom);

const logOut = () => {};
root.render(
  <div>
    <App Isloggedin={true} logOut={logOut} />
  </div>
);
