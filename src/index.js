// MODULE IMPORTS
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

// COMPONENT IMPORTS
import App from "./App";
import { Footer } from "./components/global/Footer";
import { Nav } from "./components/global/Nav";
import { LoadingScreen } from "./components/global/Loading";
import ScrollToTop from "./components/utils/ScrollToTop";

// STYLE IMPORTS
import "./index.scss";

const Wrapper = () => {
  /*
  If setLoading == True, display loading screen, else display Homepage
  */
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
  <HashRouter>
    <ScrollToTop>
      <Wrapper />
    </ScrollToTop>
  </HashRouter>,
  document.getElementById("root")
);