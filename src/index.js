// MODULE IMPORTS
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// COMPONENT IMPORTS
import { Nav } from "./components/global/Nav";
import { Cursor } from "./components/global/Cursor";
import App from "./App";
// STYLE IMPORTS
import "./index.scss";

ReactDOM.render(
  <BrowserRouter>
    <Cursor />
    <Nav />
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
