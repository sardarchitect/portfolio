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
import { Footer } from "./components/global/Footer";

ReactDOM.render(
  <BrowserRouter>
    <Cursor />
    <Nav />
    <App />
    <Footer />
  </BrowserRouter>,
  document.getElementById("root")
);
