import { createRoot } from "react-dom/client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/index.js";
import Main from "./Main";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <Main />
  </Provider>
);
