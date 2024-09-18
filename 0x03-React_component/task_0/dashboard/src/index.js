import React from "react";
import { createRoot } from "react-dom/client";
import { Notifications } from "../Notifications/Notifications.js";
import App from "../App/App.js";

const dom = document.querySelector("#root");
const root = createRoot(dom);

const logOut = () => {};
root.render(
  <div>
    <App Isloggedin={true} logOut={logOut} />
  </div>
);
