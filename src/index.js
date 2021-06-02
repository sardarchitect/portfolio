// MODULE IMPORTS
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// COMPONENT IMPORTS
import App from "./App";
import { Footer } from "./components/global/Footer";
import { Nav } from "./components/global/Nav";
import ScrollToTop from "./components/utils/ScrollToTop";
import { LoadingScreen } from "./components/global/Loading";
// STYLE IMPORTS
import "./index.scss";

const Wrapper = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  return (
    <>
      {loading === false ? (
        <>
          <Nav />
          <App />
          <Footer />
        </>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop>
      <Wrapper />
    </ScrollToTop>
  </BrowserRouter>,
  document.getElementById("root")
);