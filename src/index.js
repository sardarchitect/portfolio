// MODULE IMPORTS
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// COMPONENT IMPORTS
import { Nav } from "./components/global/Nav";
import { Cursor } from "./components/global/Cursor";
import { Footer } from "./components/global/Footer";
import ScrollToTop from "./components/global/ScrollToTop";
import App from "./App";
// STYLE IMPORTS
import "./index.scss";

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop>
      <Cursor />
      <Nav />
      <App />
      <Footer />
    </ScrollToTop>
  </BrowserRouter>,
  document.getElementById("root")
);
