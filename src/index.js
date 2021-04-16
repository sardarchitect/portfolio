// MODULE IMPORTS
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// COMPONENT IMPORTS
import App from "./App";
import { Footer } from "./components/global/Footer";
import { Nav } from "./components/global/Nav";
import ScrollToTop from "./components/utils/ScrollToTop";
// STYLE IMPORTS
import "./index.scss";

ReactDOM.render(
  <BrowserRouter>
      <ScrollToTop>
      <Nav/>
      <App />
      <Footer/>
      </ScrollToTop>
  </BrowserRouter>,
  document.getElementById("root")
);