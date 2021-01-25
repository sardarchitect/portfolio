// MODULE IMPORTS
import React from "react";
import { Switch, Route } from "react-router-dom";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
// COMPONENT IMPORTS 
import { About } from "./components/pages/About";
import { Footer } from "./components/pages/Footer";
import { Work } from "./components/pages/Work";
// STYLE IMPORTS
import "./_app.scss";

function App() {
  let parallax;
  return (
    <div className="App">
      <Parallax
        className="App__parallax"
        ref={(ref) => (parallax = ref)}
        pages={4}
      >
        <About />
        <Work />
        <Footer />
      </Parallax>
    </div>
  );
}

export default App;
