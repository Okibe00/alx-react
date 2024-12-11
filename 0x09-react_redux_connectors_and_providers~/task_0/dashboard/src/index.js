import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App/App.js";
import BodySection from "./BodySection/BodySection";
import { combineReducers, createStore } from "redux";
import { uiReducer } from "./reducers/uiReducer.js";
import { courseReducer } from "./reducers/courseReducer.js";
import { notificationReducer } from "./reducers/notificationReducer.js"
import { Provider } from "react-redux"
const dom = document.querySelector("#root");
const root = createRoot(dom);
const rootReducer = combineReducers({
  uiReducer,
  // notificationReducer,
  // courseReducer,
})
const store = createStore(rootReducer);
const logOut = () => {};
root.render(
  <div>
    {/* <App Isloggedin={false} logOut={logOut} /> */}
    <Provider store={store}>
      <App />
    </Provider>
  </div>
);
