import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { Nav } from "./components/global/Nav";
import { Cursor } from "./components/global/Cursor";
import App from "./App";

import "./index.scss";

ReactDOM.render(
  <BrowserRouter>
    <Cursor />
    <Nav />
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
